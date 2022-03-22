<template>
  <div class="card-container" @click="cardClickHandler(recipe.title)">
    <div class="card-header">
      <div class="meal-img">
        <img :src="recipe.images[0].url" alt="Meal" />
      </div>
      <div class="overlay">
        <div class="like-btn">
          <img v-if="!liked" src="../assets/heart.svg" alt="Heart Icon" />
          <img v-else src="../assets/heart-filled.svg" alt="Green Heart Icon" />
        </div>
        <div class="premium-badge">
          <img src="../assets/trophy.svg" alt="Trophy Icon" />
          <span class="badge-label">Premium Recipe</span>
        </div>
      </div>
    </div>
    <div class="card-body">
      <h4 class="meal-title">
        {{ recipe.title }}
      </h4>
      <div class="meal-rating">
        <StarRating
          :increment="0.5"
          :star-size="13"
          :read-only="true"
          :rating="recipe.rating.score"
          active-color="#fda01e"
          text-class="vue-rating-text"
        />
        <div class="ratings-count">{{ recipe.rating.count }} ratings</div>
      </div>
      <div class="meal-info">
        <div class="info-wrapper">
          <img src="../assets/clock.svg" alt="Clock Icon" />
          <span class="info-label">
            {{ duration }}
          </span>
        </div>
        <div class="info-wrapper">
          <img src="../assets/flame.svg" alt="Flame Icon" />
          <span class="info-label">{{ energy }}</span>
        </div>
        <div class="nutrients-wrapper">
          <RecipeNutrients :nutrientDetails="recipe.details" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import RecipeNutrients from "./RecipeNutrients.vue";

import formatDuration from "@/utils/formatDuration";
import formatEnergy from "@/utils/formatEnergy";

export default {
  name: "PremiumRecipeCard",
  components: {
    RecipeNutrients,
    StarRating
  },
  props: {
    recipe: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    },
    liked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    duration() {
      return formatDuration(this.recipe.preparationTimeMinutes);
    },
    energy() {
      return formatEnergy(this.recipe.details, this.user.energyUnits);
    }
  },
  methods: {
    cardClickHandler(title) {
      console.log(`Card: "${title}" was clicked!`);
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
  cursor: pointer;
}

.card-header {
  position: relative;
  height: 200px;
}

.overlay {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.overlay:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.like-btn {
  align-self: end;
  margin: 16px;
}

.premium-badge {
  display: flex;
  align-items: center;
  align-self: start;
  margin: 8px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 0 8px;
  border-radius: 10px;
}

.badge-label {
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: -0.2px;
  color: #fff;
  margin-left: 4px;
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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

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
