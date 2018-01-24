import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
  tmdbApi: inject(),
  model(params){
    return this.get("tmdbApi").getMoviesForActor(params.actor_id).then((list)=>{
      return list;
    })
  }
});
