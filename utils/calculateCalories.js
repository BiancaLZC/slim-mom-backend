const calculateCalories = (weight,weightDesire, height, age) => {
    const weightNumber = parseFloat(weight);
    const weightDesireNumber = parseFloat(weightDesire);
  const heightNumber = parseFloat(height);
  const ageNumber = parseFloat(age);

  if (isNaN(weightNumber) || isNaN(heightNumber) || isNaN(ageNumber)) {
    console.log("Please enter valid numbers");
    return null;
  }

  // Formula pentru calculul caloriilor necesare
  const recCalories =
    10 * weightNumber + 6.25 * heightNumber - 5 * ageNumber - 161 - 10 * (weightNumber - weightDesireNumber) ;
  return Math.round(recCalories);
};

module.exports = calculateCalories;