import { shallowMount } from "@vue/test-utils";

import PremiumRecipeCard from "@/components/PremiumRecipeCard.vue";

describe("PremiumRecipeCard.vue", () => {
  const mockRecipe = {
    title: "Low Carb Philly Cheesesteak Skillet",
    images: [
      {
        url:
          "https://images.carbmanager.com/eEExUfrZDpNN99-qk6mECRJiBXHFc6p6XZ1EGIKnZGU/resize:fit:1200/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzFkYzk0MjVkLWVhNTYtYzM3ZC05MTE4LWNjYmI0ZTIxNmI1My5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1kYjgwYjg0NC0yNDhhLTQxOGUtYjMyOC1hODk2NDFlYjBmZjQ"
      }
    ],
    rating: {
      count: 13,
      score: 3
    },
    details: {
      units: {
        proteins: "g",
        carbs: "g",
        fats: "g",
        energy: "kJ"
      },
      nutrients: {
        proteins: 19,
        carbs: 14,
        fats: 12
      },
      energy: 995
    },
    preparationTimeMinutes: 120
  };

  const mockUser = {
    energyUnits: "calories"
  };

  it("should render with correct data", () => {
    const wrapper = shallowMount(PremiumRecipeCard, {
      propsData: {
        recipe: mockRecipe,
        user: mockUser,
        liked: false
      }
    });

    expect(wrapper.text()).toContain("Low Carb Philly Cheesesteak Skillet");
  });

  it("should show green heart for recipes that has been liked", () => {
    const wrapper = shallowMount(PremiumRecipeCard, {
      propsData: {
        recipe: mockRecipe,
        user: mockUser,
        liked: true
      }
    });

    const likeBtn = wrapper.find(".like-btn img");
    expect(likeBtn.attributes().src).toContain("heart-filled.svg");
  });

  it("should show empty heart for recipes that has not been liked", () => {
    const wrapper = shallowMount(PremiumRecipeCard, {
      propsData: {
        recipe: mockRecipe,
        user: mockUser,
        liked: false
      }
    });

    const likeBtn = wrapper.find(".like-btn img");
    expect(likeBtn.attributes().src).toContain("heart.svg");
  });

  it("should correctly convert energy values", () => {
    const wrapper = shallowMount(PremiumRecipeCard, {
      propsData: {
        recipe: mockRecipe,
        user: mockUser,
        liked: false
      }
    });

    const mealInfo = wrapper.find(".meal-info");
    expect(mealInfo.text()).toContain("238 calories");
  });
});
