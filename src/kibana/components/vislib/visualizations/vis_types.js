define(function (require) {
  return function VisTypeFactory(Private) {

    /**
     * Provides the visualizations for the vislib
     *
     * @module vislib
     * @submodule VisTypeFactory
     * @param Private {Object} Loads any function as an angular module
     * @return {Function} Returns an Object of Visualization classes
     */
    return {
      histogram: Private(require('components/vislib/visualizations/column_chart')),
      pie: Private(require('components/vislib/visualizations/pie_chart')),
      line: Private(require('components/vislib/visualizations/line_chart')),
      area: Private(require('components/vislib/visualizations/area_chart')),
      sankey: Private(require('components/vislib/visualizations/sankey_chart')),
      tile_map: Private(require('components/vislib/visualizations/tile_map'))
    };
  };

});
