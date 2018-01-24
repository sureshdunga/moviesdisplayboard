import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('movies/m-list-item', 'Integration | Component | movies/m list item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{movies/m-list-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#movies/m-list-item}}
      template block text
    {{/movies/m-list-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
