define(function (require) {
  return function NormalizeChartDataFactory(Private) {
    return {
      hierarchical: Private(require('components/agg_response/hierarchical/build_hierarchical_data')),
      pointSeries: Private(require('components/agg_response/point_series/point_series')),
      tabify: Private(require('components/agg_response/tabify/tabify')),
      sankey: Private(require('components/agg_response/sankey/sankey')),
      geoJson: Private(require('components/agg_response/geo_json/geo_json'))
    };
  };
});
