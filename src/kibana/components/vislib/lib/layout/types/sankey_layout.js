define(function (require) {
  return function ColumnLayoutFactory(d3, Private) {
    var sankey_split =
      Private(require('components/vislib/lib/layout/splits/sankey/sankey_split'));
    /**
     * Specifies the visualization layout for column charts.
     *
     * This is done using an array of objects. The first object has
     * a `parent` DOM element,  a DOM `type` (e.g. div, svg, etc),
     * and a `class` (required). Each child can omit the parent object,
     * but must include a type and class.
     *
     * Optionally, you can specify `datum` to be bound to the DOM
     * element, a `splits` function that divides the selected element
     * into more DOM elements based on a callback function provided, or
     * a children array which nests other layout objects.
     *
     * Objects in children arrays are children of the current object and return
     * DOM elements which are children of their respective parent element.
     */

    return function (el, data) {
      if (!el || !data) {
        throw new Error('Both an el and data need to be specified');
      }

      return [
        {
          parent: el,
          type: 'div',
          class: 'vis-wrapper',
          datum: data,
          children: [
            {
              type: 'div',
              class: 'vis-col-wrapper',
              children: [
                {
                  type: 'div',
                  class: 'chart-wrapper',
                  splits: sankey_split
                }
              ]
            }
          ]
        }
      ];
    };
  };
});
