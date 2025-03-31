<template>
  <div v-if="pizza" class="pizza-detail">
    <img :src="pizza.image" :alt="pizza.name" class="pizza-img" />
    <h1>{{ pizza.name }}</h1>
    <p>Размеры: {{ pizza.sizes.join(", ") }}</p>
    <p>Цена: {{ pizza.price }} ₽</p>
    <button @click="$router.push('/')">Назад</button>
  </div>
  <p v-else>Пицца не найдена.</p>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const pizzas = [
  {
    id: 1,
    name: "Маргарита",
    sizes: ["Мал.", "Ср.", "Бол."],
    price: 450,
    image: "/images/margherita.jpg",
  },
  {
    id: 2,
    name: "Пепперони",
    sizes: ["Ср.", "Бол."],
    price: 500,
    image: "/images/pepperoni.jpg",
  },
  {
    id: 3,
    name: "Четыре сыра",
    sizes: ["Мал.", "Ср.", "Бол."],
    price: 550,
    image: "/images/quattro-formaggi.jpg",
  },
];

const pizza = ref(pizzas.find((p) => p.id == route.params.id));
</script>

<style scoped>
.pizza-detail {
  text-align: center;
  padding: 20px;
}
.pizza-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
</style>
