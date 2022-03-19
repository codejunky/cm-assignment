<template>
  <div class="card-container">
    <div class="card-header">
      <div class="meal-img">
        <img
          src="https://images.carbmanager.com/iYKrSEf7P6EAGx3desxGmcPJTVea2lJoBiXom24tevA/resize:fit:535/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmJiNmExNjY4LTU1NDMtNGE3Ny1hMDQ0LWQ0ODVhM2U0ZDMwNS5qcGc_YWx0PW1lZGlh"
          alt="Meal"
        />
      </div>
    </div>
    <div class="card-body">
      <h4 class="meal-title">
        Low Carb Thai Chicken Curry With Coconut Cauliflower Rice
      </h4>
      <div class="meal-rating">
        <StarRating
          :increment="0.5"
          :star-size="13"
          :read-only="true"
          :rating="3.5"
          active-color="#fda01e"
          text-class="vue-rating-text"
        />
        <div class="ratings-count">
          200 ratings
        </div>
      </div>
      <div class="meal-info">
        <div class="info-wrapper">
          <img src="../assets/clock.svg" alt="Clock Icon" />
          <span class="info-label">24 min</span>
        </div>
        <div class="info-wrapper">
          <img src="../assets/flame.svg" alt="Clock Icon" />
          <span class="info-label">489 Calories</span>
        </div>
        <div class="nutrients-wrapper">
          <RecipeNutrients />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import RecipeNutrients from "./RecipeNutrients.vue";

export default {
  name: "PremiumRecipeCard",
  components: {
    RecipeNutrients,
    StarRating
  },
  props: {
    id: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.vue-rating-text {
  margin: 0;
  display: none;
}
</style>

<style scoped>
.card-container {
  width: 343px;
  height: 320px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);
  overflow: hidden;
}

.card-header {
  height: 200px;
}

.meal-img {
  height: inherit;
  overflow: hidden;
}

.meal-img img {
  width: 100%;
}

.card-body {
  padding: 8px 16px 16px 16px;
}

.meal-title {
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: #0c0c0a;
  text-align: left;
  margin: 0;
}

.meal-rating {
  display: flex;
  align-items: center;
  margin-top: 16px;
}

.ratings-count {
  font-size: 14px;
  font-weight: 500;
  color: #1ca677;
  margin-left: 8px;
}

.meal-info {
  display: flex;
  align-items: center;
  margin-top: 4px;
}

.info-wrapper {
  display: flex;
  align-items: center;
  margin-right: 16px;
}

.info-wrapper img {
  margin-right: 8px;
}

.info-label {
  font-size: 12px;
  line-height: 14px;
  color: #393c40;
}

.nutrients-wrapper {
  margin-left: auto;
}
</style>
