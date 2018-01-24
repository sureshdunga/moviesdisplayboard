import Component from '@ember/component';

export default Component.extend({
  classNames:["ListActors_item"],
  attributeBindings:["_layout:layout"],
  _layout:"rows center-stretch"
});
