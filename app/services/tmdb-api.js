import Service from "@ember/service";
import config from "movies-display-board/config/environment";
import { alias } from "@ember/object/computed";

export default Service.extend({
  auth_key: config.APP.tmdb_auth_key,

  service_url: config.APP.tmdb_service_url,

  _makeRequest(url) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url,
        success(response) {
          resolve(response);
        },
        error(e) {
          reject(e);
        }
      });
    });
  },

  getPopularActors() {
    let url = `${this.get("service_url")}/person/popular?api_key=${this.get("auth_key")}`;
    return this._makeRequest(url);
  },

  getMoviesForActor(actor_id){
    let url = `${this.get("service_url")}/person/${actor_id}?api_key=${this.get("auth_key")}&append_to_response=movie_credits`;
    return this._makeRequest(url);
  },

  getMovieDetails(id){
    let url = `${this.get("service_url")}/movie/${id}?api_key=${this.get("auth_key")}&append_to_response=videos`;
    return this._makeRequest(url);
  }
});
