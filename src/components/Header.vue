<template>
  <div class="header">
    <img src="./icon.svg" />
    <div class="react-pizza">
      <p>React Pizza</p>
      <p>{{ headerText }}</p>
    </div>

    <div class="group-2" v-if="!orderPage" @click="goOrder">
      <p>{{ cartStore.totalPrice }}</p>
      <p></p>
      <img
        src="./src/components/head-corzina.svg"
        alt=""
        width="16px"
        height="16px"
      />
      <p>{{ cartStore.totalCount }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCartStore } from "@/stores/counter.js";
const cartStore = useCartStore();

const route = useRoute();
const router = useRouter();

const goOrder = () => {
  router.push("/pizza/order");
};

const orderPage = computed(() => route.path === "/pizza/order");
const headerText = computed(() => {
  if (orderPage.value) {
    return "cамая реактивная пицца";
  }
  return "cамая вкусная пицца во вселенной";
});
</script>

<style>
.header {
  width: 97%;
  height: 150px;
  display: flex;
  gap: 20px;
  /* background-color: #ffdf8c; */
  flex-wrap: wrap;
  align-items: center;
  border-bottom: #f6f6f6 2px solid;
  padding-left: 50px;
}
.react-pizza {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  /* gap: 10px; */
}
.react-pizza p {
  margin: 0;
  padding: 0;
}
.react-pizza p:first-child {
  font-size: 24px;
  font-weight: 800;
}
.react-pizza p:nth-child(2) {
  font-size: 16px;
  color: #7b7b7b;
}
.group-2 {
  width: 150px;
  height: 50px;
  border-radius: 30px;
  background-color: #fe5f1e;
  display: flex;
  align-content: flex-end;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.group-2 p:nth-child(2) {
  height: 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.25);
}
</style>
