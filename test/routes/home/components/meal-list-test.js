import test from 'tape';
import React from 'react';
import reactDom from 'react-dom/server';
import dom from 'cheerio';

import MealList, {round, calculateNutrition, calculateTotal} from 'routes/home/components/meal-list';

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
      onRemoveMeal: () => {}
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

test('[Home route] MealList component - round() function', assert => {
  const actual = [];
  const expected = [];

  actual[0] = round(3.799);
  expected[0] = 3.80;

  actual[1] = round(3.444);
  expected[1] = 3.44;

  assert.deepEqual(actual, expected,
    'should round float number with 2 digits after point');

  assert.end();
});

test('[Home route] MealList component - calculateNutrition() function', assert => {
  const base = '3.3';
  const unit = 200;

  const actual = calculateNutrition(base, unit);
  const expected = 660;

  assert.deepEqual(actual, expected,
    'should returned expected result');

  assert.end();
});

test('[Home route] MealList component - calculateTotal() function', assert => {
  const data = [
    {
      food: {
        calo: 1,
        carb: 2,
        fat: 3,
        protein: 4
      },
      quantity: 100
    }, {
      food: {
        calo: 2,
        carb: 2,
        fat: 2,
        protein: 2
      },
      quantity: 200
    }
  ];

  const actual = calculateTotal(data);
  const expected = {
    calo: 5,
    carb: 6,
    fat: 7,
    protein: 8
  };

  assert.deepEqual(actual, expected,
    'should returned expected result');

  assert.end();
});
