import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
  tmdbApi: inject(),
  model(params){
    return this.get("tmdbApi").getMovieDetails(params.movie_id);
  }
});
