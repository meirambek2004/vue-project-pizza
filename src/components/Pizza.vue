<template>
  <div class="contain">
    <div class="pizza-card">
      <img :src="image" alt="pizza" class="pizza-img" />
      <p>{{ name }}</p>
      <div class="size">
        <button
          class="pizza-button"
          v-for="(dough, i) in doughTypes"
          :key="i"
          :class="{ active: selectedDough === dough }"
          @click="selectedDough = dough"
        >
          {{ dough }}
        </button>
        <button
          class="pizza-button"
          v-for="(size, i) in sizes"
          :key="i"
          :class="{ active: selectedSize === size }"
          @click="selectedSize = size"
        >
          {{ size }}
        </button>
      </div>
      <div class="add">
        <p>от {{ price }} ₽</p>
        <button class="count-button" @click="addCard">
          <span>+</span> Добавить
          <div v-if="countCart">
            <span class="count-cart">{{ countCart }}</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "@/stores/counter.js";
const cartStore = useCartStore();

const props = defineProps({
  id: Number,
  image: String,
  name: String,
  doughTypes: Array,
  sizes: Array,
  price: Number,
});

const selectedDough = ref(props.doughTypes[0]);
const selectedSize = ref(props.sizes[0]);

const countCart = computed(() => {
  const item = cartStore.cart.find(
    (p) =>
      p.id === props.id &&
      p.size === selectedSize.value &&
      p.dough === selectedDough.value
  );
  return (item && item.count) || 0;
});
const addCard = () => {
  cartStore.addToCart({
    id: props.id,
    name: props.name,
    price: props.price,
    size: selectedSize.value,
    dough: selectedDough.value,
    image: props.image,
  });
};
</script>

<style scoped>
.pizza-card {
  display: flex;
  flex-direction: column;
  /* background-color: #eb5a1e; */
  width: 280px;
  height: 459px;
  padding: 15px;
  border-radius: 10px;
  margin-left: 50px;
}

.pizza-card p {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
}

.pizza-img {
  /* display: flex; */
  width: 250px;
  margin: auto;
}

.size {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
  height: 78px;
  border-radius: 10px;
  background-color: #f3f3f3;
  padding: 7px 5px;
}

.pizza-button {
  height: 32px;
  border: none;
  background: #f3f3f3;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pizza-button.active {
  background: #ffffff;
  color: black;
  font-weight: bold;
  border: 1px solid #ffffff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}

.pizza-button:nth-child(1),
.pizza-button:nth-child(2) {
  width: 131px;
}
.pizza-button:nth-child(3),
.pizza-button:nth-child(4),
.pizza-button:nth-child(5) {
  width: 85px;
}

.add {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.add button {
  width: 155px;
  height: 40px;
  border: 1px solid #eb5a1e;
  background-color: #ffffff;
  border-radius: 30px;
  cursor: pointer;
}
.count-button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eb5a1e;
  gap: 10px;
  font-size: 16px;
  font-weight: 700;
}
.count-cart {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  background-color: #eb5a1e;
  color: #ffffff;
  border-radius: 10px;
}
</style>
