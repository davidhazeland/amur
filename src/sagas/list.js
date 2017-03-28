import {call} from 'redux-saga/effects';
import {pick} from 'lodash/object';

import {fetch as fetchAnimals} from 'api/animal';
import {fetch as fetchVegetables} from 'api/vegetable';

const properties = ['name', 'carb', 'fat', 'protein', 'calo'];

export function* getFoodList() {
  const [
    {data: animals},
    {data: vegetables}
  ] = yield [
    call(fetchAnimals),
    call(fetchVegetables)
  ];

  const foodList = [].concat(animals, vegetables).map((item, index) => ({
    id: index,
    ...pick(item, properties)
  }));
  return foodList;
}
