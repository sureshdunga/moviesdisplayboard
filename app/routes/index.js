import Route from "@ember/routing/route";
import { inject } from "@ember/service";

export default Route.extend({
  tmdbApi: inject(),
  model() {
    return this.get("tmdbApi").getPopularActors().then(list => {
      this.set("actorsList", list.results);
      return list.results;
    });
  }
});
