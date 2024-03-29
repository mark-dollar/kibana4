define(function (require) {
  return function VislibVisTypeFactory(Private) {
    var _ = require('lodash');

    var VisTypeSchemas = Private(require('components/vis/Schemas'));
    var VisType = Private(require('components/vis/VisType'));
    var pointSeries = Private(require('components/agg_response/point_series/point_series'));
    var VislibRenderbot = Private(require('components/vislib_vis_type/VislibRenderbot'));

    require('plugins/kbn_vislib_vis_types/controls/vislib_basic_options');
    require('plugins/kbn_vislib_vis_types/controls/point_series_options');
    require('plugins/kbn_vislib_vis_types/controls/line_interpolation_option');

    _.class(VislibVisType).inherits(VisType);
    function VislibVisType(opts) {
      opts = opts || {};

      VislibVisType.Super.call(this, opts);

      if (this.responseConverter == null) {
        this.responseConverter = pointSeries;
      }

      this.listeners = opts.listeners || {};
      this.sankeyConverter = opts.sankeyConverter || false;
    }

    VislibVisType.prototype.createRenderbot = function (vis, $el) {
      return new VislibRenderbot(vis, $el);
    };

    return VislibVisType;
  };
});
