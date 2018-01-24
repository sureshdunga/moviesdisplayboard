import Component from '@ember/component';

export default Component.extend({
  classNames: ["moviesList__item"],
  attributeBindings: ["_layout:layout"],
  _layout: "rows center-justify",
  moviesList: []
});
