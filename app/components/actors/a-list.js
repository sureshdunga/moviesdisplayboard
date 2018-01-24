import Component from "@ember/component";
import { inject } from "@ember/service";
import { computed } from "@ember/object";

export default Component.extend({
  tmdbApi: inject("tmdb-api"),
  _layout:"column center-center",
  classNames:["ActorsList"],
  attributeBindings:['_layout:layout'],
  actorsList: []
});
