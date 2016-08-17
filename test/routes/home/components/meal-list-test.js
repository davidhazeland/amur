import test from 'tape';
import React from 'react';
import reactDom from 'react-dom/server';
import dom from 'cheerio';

import MealList from 'routes/home/components/meal-list';

const render = reactDom.renderToStaticMarkup;

test('[Home route] MealList component', nest => {
  nest.test('...with no parameters', assert => {
    const el = <MealList />;
    dom.load(render(el));

    assert.pass('should render without props');
    assert.end();
  });

  nest.test('...with data', assert => {
    const props = {
      data: [{
        food: {
          id: 1,
          name: 'food',
          carb: 10,
          fat: 20,
          protein: 30,
          calo: 40
        },
        quantity: 200
      }],
      removeMeal: () => {}
    }
    const el = <MealList {...props}/>;
    const $ = dom.load(render(el));

    const food = $('tbody tr:first-child');

    const actual = [
      food.find('td:nth-child(2)').html(),
      food.find('td:nth-child(3)').html(),
      food.find('td:nth-child(4)').html(),
      food.find('td:nth-child(5)').html()
    ];

    const expected = [
      '20',
      '40',
      '60',
      '80'
    ];

    assert.deepEqual(actual, expected,
      'should render calculated nutrition');

    assert.end();
  });
});
