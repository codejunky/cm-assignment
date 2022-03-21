export default (recipeDetails, energyUnit) => {
  let energyStr = "";

  if (energyUnit === "kJ") {
    const energy =
      recipeDetails.units.energy === "kJ"
        ? recipeDetails.energy
        : recipeDetails.energy * 4.184;
    energyStr = `${Math.round(energy)} KJ`;
  } else {
    const energy =
      recipeDetails.units.energy === "kcal"
        ? recipeDetails.energy
        : recipeDetails.energy / 4.184;
    energyStr = `${Math.round(energy)} calories`;
  }

  return energyStr;
};
