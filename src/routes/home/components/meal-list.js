'use strict';

import React from 'react';

import {format} from 'utils/food';

const MealList = ({data = [], onRemoveMeal}) => {
  const total = calculateTotal(data);

  return (
    <table className="MealList ui orange table">
      <thead>
        <tr>
          <th>Food</th>
          <th>Carb (g)</th>
          <th>Fat (g)</th>
          <th>Protein (g)</th>
          <th>Calo (Kcal)</th>
          <th className="MealList--actions"></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          const {quantity, food} = item;
          const name = `${format(quantity)} ${food.name}`;
          const unit = quantity/100;
          const carb = calculateNutrition(food.carb, unit);
          const fat = calculateNutrition(food.fat, unit);
          const protein = calculateNutrition(food.protein, unit);
          const calo = calculateNutrition(food.calo, unit);
          return (
            <tr key={index}>
                <td>{name}</td>
                <td>{round(carb)}</td>
                <td>{round(fat)}</td>
                <td>{round(protein)}</td>
                <td>{round(calo)}</td>
                <td>
                  <i className="red remove icon" onClick={onRemoveMeal.bind(null, item)}></i>
                </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th>{round(total.carb)}</th>
          <th>{round(total.fat)}</th>
          <th>{round(total.protein)}</th>
          <th>{round(total.calo)}</th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  );
};

function calculateNutrition(base, unit) {
  return parseFloat(base) * unit;
}

function round(nutrition) {
  return Math.round(nutrition * 100) / 100;
}

function calculateTotal(data) {
  return data.reduce((total, item) => {
    const {quantity, food} = item;
    const unit = quantity/100;
    const calo = calculateNutrition(food.calo, unit);
    const carb = calculateNutrition(food.carb, unit);
    const fat = calculateNutrition(food.fat, unit);
    const protein = calculateNutrition(food.protein, unit);
    return {
      calo: total.calo + calo,
      carb: total.carb + carb,
      fat: total.fat + fat,
      protein: total.protein + protein
    }
  }, {
    calo: 0,
    carb: 0,
    fat: 0,
    protein: 0
  });
}

MealList.displayName = 'MealList';

export default MealList;
