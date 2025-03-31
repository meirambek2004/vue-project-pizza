<template>
  <Category @update-category="setCategory" @update-sort="setSort" />

  <p v-if="loading" class="loading">Загрузка пицц</p>
  <div v-else class="container">
    <Pizza
      v-for="pizza in filteredPizzas"
      :key="pizza.id"
      :id="Number(pizza.id)"
      :name="pizza.name"
      :sizes="pizza.sizes"
      :price="pizza.price"
      :image="pizza.image"
      :doughTypes="pizza.doughTypes"
    ></Pizza>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from "vue";
import Category from "@/components/Category.vue";
import Pizza from "@/components/Pizza.vue";
import axios from "axios";

const selectedCategory = ref("Все");
const selectedSort = ref("popular");

const pizzas = ref([]);
const loading = ref(true);

onBeforeMount(async () => {
  try {
    const response = await axios.get("http://localhost:3000/pizzas");
    pizzas.value = response.data;
  } catch (error) {
    console.error("Ошибка", error);
  } finally {
    loading.value = false;
  }
});

const filteredPizzas = computed(() => {
  let result = [...pizzas.value];

  if (selectedCategory.value !== "Все") {
    result = result.filter(
      (pizza) => pizza.category === selectedCategory.value
    );
  }

  if (selectedSort.value === "price") {
    result = [...result].sort((a, b) => a.price - b.price);
  } else if (selectedSort.value === "alphabet") {
    result = [...result].sort((a, b) => a.name.localeCompare(b.name));
  }

  return result;
});

const setCategory = (category) => {
  selectedCategory.value = category;
};

const setSort = (sortType) => {
  selectedSort.value = sortType;
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
