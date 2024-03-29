define(function (require) {
  return function HandlerTypeFactory(Private) {
    var pointSeries = Private(require('components/vislib/lib/handler/types/point_series'));

    /**
     * Handles the building of each visualization
     *
     * @return {Function} Returns an Object of Handler types
     */
    return {
      histogram: pointSeries.column,
      line: pointSeries.line,
      pie: Private(require('components/vislib/lib/handler/types/pie')),
      area: pointSeries.area,
      sankey: Private(require('components/vislib/lib/handler/types/sankey')),
      tile_map: Private(require('components/vislib/lib/handler/types/tile_map'))
    };
  };
});
