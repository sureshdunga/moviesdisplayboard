import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('actors/a-list-item', 'Integration | Component | actors/a list item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{actors/a-list-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#actors/a-list-item}}
      template block text
    {{/actors/a-list-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
