define(function (require) {
  return function sankeyProvider(Private, Notifier) {
    var _ = require('lodash');
    var arrayToLinkedList = require('components/agg_response/hierarchical/_array_to_linked_list');
    var notify = new Notifier({
      location: 'Sankey chart response converter'
    });
    var nodes = {};
    var links = [];
    var prevNode = -1;

    function processEntry(aggConfig, aggData) {
      _.each(aggData.buckets, function (b) {
        if (isNaN(nodes[b.key])) {
          nodes[b.key] = prevNode + 1;
        }
        if (aggConfig._previous) {
          links.push({'source': prevNode, 'target': nodes[b.key], 'value': b.doc_count});
        }
        prevNode = nodes[b.key];
        if (aggConfig._next) {
          processEntry(aggConfig._next, b[aggConfig._next.id]);
        }
      });
    }

    return function (vis, resp) {

      var buckets = vis.aggs.bySchemaGroup.buckets;
      buckets = arrayToLinkedList(buckets);
      var firstAgg = buckets[0];
      var aggData = resp.aggregations[firstAgg.id];

      if (!firstAgg._next) {
        notify.error('need more than one sub aggs');
      }

      processEntry(firstAgg, aggData);

      var invertNodes = _.invert(nodes);
      var chart = {
        'slices': {
          'nodes' : _.map(_.keys(invertNodes), function (k) { return {'name':invertNodes[k]}; }),
          'links' : links,
        }
      };

      return chart;
    };
  };
});
