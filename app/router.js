import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("actor", {path:"/actor/:actor_id"});
  this.route("movie", {path:"/movie/:movie_id"});
  this.route('loading');
});

export default Router;
