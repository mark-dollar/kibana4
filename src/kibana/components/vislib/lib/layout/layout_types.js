define(function (require) {
  return function LayoutTypeFactory(Private) {

    /**
     * Provides the HTML layouts for each visualization class
     *
     * @module vislib
     * @submodule LayoutTypeFactory
     * @param Private {Service} Loads any function as an angular module
     * @return {Function} Returns an Object of HTML layouts for each visualization class
     */
    return {
      histogram: Private(require('components/vislib/lib/layout/types/column_layout')),
      line: Private(require('components/vislib/lib/layout/types/column_layout')),
      area: Private(require('components/vislib/lib/layout/types/column_layout')),
      pie: Private(require('components/vislib/lib/layout/types/pie_layout')),
      sankey: Private(require('components/vislib/lib/layout/types/sankey_layout')),
      tile_map: Private(require('components/vislib/lib/layout/types/map_layout'))
    };
  };
});
