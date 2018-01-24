import Component from "@ember/component";

export default Component.extend({
  classNames: ["moviesList"],
  attributeBindings: ["_layout:layout"],
  _layout: "column center-center",
  moviesList: []
});
