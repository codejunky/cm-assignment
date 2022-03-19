<template>
  <div class="container">
    <div class="nutrient-wrapper">
      <div class="circle" style="background-color: #f94642;" />
      <span class="nutrient-label">20g</span>
    </div>
    <div class="nutrient-wrapper">
      <div class="circle" style="background-color: #3177BB;" />
      <span class="nutrient-label">16g</span>
    </div>
    <div class="nutrient-wrapper">
      <div class="circle" style="background-color: #FDA120;" />
      <span class="nutrient-label">6g</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeNutrients"
};
</script>

<style>
.container {
  display: flex;
}

.nutrient-wrapper {
  display: flex;
  align-items: center;
  margin-right: 8px;
}

.nutrient-wrapper:last-of-type {
  margin-right: 0;
}

.circle {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #f94642;
}

.nutrient-label {
  font-size: 12px;
  font-weight: 500;
  margin-left: 4px;
}
</style>
