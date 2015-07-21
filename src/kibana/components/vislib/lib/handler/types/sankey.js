define(function (require) {
  return function sankeyHandler(d3, Private) {
    var _ = require('lodash');

    var Handler = Private(require('components/vislib/lib/handler/handler'));
    var Data = Private(require('components/vislib/lib/data'));

    return function (vis) {
      var data = new Data(vis.data, vis._attr);

      var sankeyHandler = new Handler(vis, {
        data: data
      });

      return sankeyHandler;
    };
  };
});

