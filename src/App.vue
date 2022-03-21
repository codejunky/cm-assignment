<template>
  <div id="app">
    <div class="cm-container">
      <div class="cm-logo-wrapper">
        <img alt="Carb Manager" src="./assets/cm-logo.svg" class="cm-logo" />
      </div>
      <h2>Carb Manager Dev Assignment</h2>
      <p>See the README file for assignment requirements.</p>

      <ul class="recipes-container" v-if="!loadingError">
        <li
          v-for="(recipe, i) in recipes"
          :key="recipe.title"
          class="premium-recipe"
        >
          <PremiumRecipeCard
            :recipe="recipe"
            :user="user"
            :liked="i % 2 === 0"
          />
        </li>
      </ul>
      <div v-else>{{ loadingError }}</div>
    </div>
  </div>
</template>

<script>
import PremiumRecipeCard from "./components/PremiumRecipeCard.vue";

export default {
  name: "App",

  components: {
    PremiumRecipeCard
  },

  data: () => ({
    recipes: [],
    user: null,
    loadingError: null
  }),

  async mounted() {
    try {
      const apiUrl = process.env.VUE_APP_BASE_API_URL;
      const res = await fetch(`${apiUrl}/recipes`);
      const userRes = await fetch(`${apiUrl}/user`);
      const recipes = await res.json();
      const user = await userRes.json();

      this.recipes = recipes.filter(recipe => recipe.isPremium);
      this.user = user;
    } catch (err) {
      this.loadingError =
        "Something wrong happend while loading data, try refereshing the page. If the problem persists please contact the site's admins";
    }
  }
};
</script>

<style>
#app {
  font-family: "proxima-nova", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
.cm-logo-wrapper {
  margin-bottom: 30px;
}

.cm-logo {
  max-width: 150px;
  height: auto;
}

.cm-container {
  max-width: 960px;
  margin: auto;
}

.recipes-container {
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
}
</style>
