# Movies display board

Lists popular actors and their movies.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone https://github.com/sureshdunga/moviesdisplayboard.git` this repository
* `cd movies-display-board`
* `npm install` .

## Configuration

This application uses [The MovieDB](https://www.themoviedb.org/documentation/api)'s API for resources. To use TMDB's api, you'll require to mention `tmdb_auth_key` at `config/environment.js` file. 

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200/moviesdisplayboard/](http://localhost:4200/moviesdisplayboard/).
* Visit your tests at [http://localhost:4200/moviesdisplayboard/tests](http://localhost:4200/moviesdisplayboard/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)


## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
