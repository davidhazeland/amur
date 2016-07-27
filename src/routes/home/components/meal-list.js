'use strict';

import React from 'react';

import {format} from 'utils/food';

const MealList = ({data}) => {
  const total = calculateTotal(data);

  return (
    <table className="MealList ui orange table">
      <thead>
        <tr>
          <th>Food</th>
          <th>Carb (g)</th>
          <th>Fat (g)</th>
          <th>Protein (g)</th>
          <th>Calories (g)</th>
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
                <td>{carb}</td>
                <td>{fat}</td>
                <td>{protein}</td>
                <td>{calo}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th>{total.carb}</th>
          <th>{total.fat}</th>
          <th>{total.protein}</th>
          <th>{total.calo}</th>
        </tr>
      </tfoot>
    </table>
  );
};

function calculateNutrition(base, unit) {
  const nutrition = parseFloat(base) * unit;
  return Math.round(nutrition * 100) / 100
}

function calculateTotal(data) {
  return data.reduce((total, item) => {
    const {quantity, food} = item;
    const unit = quantity/100;
    const calo = parseFloat(food.calo) * unit;
    const carb = parseFloat(food.carb) * unit;
    const fat = parseFloat(food.fat) * unit;
    const protein = parseFloat(food.protein) * unit;
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
