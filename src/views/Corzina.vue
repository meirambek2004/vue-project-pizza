<template>
  <div v-if="cartStore.cart.length">
    <div class="main">
      <div class="delete-card">
        <div class="first">
          <img src="/src/components/order-corzina.svg" alt="" />
          <h1>Корзина</h1>
        </div>
        <div class="second" @click="cartStore.clearCart()">
          <img src="/src/components/order-ico.svg" alt="" />
          <p>Очистить корзину</p>
        </div>
      </div>

      <div
        class="buy-item"
        v-for="(item, index) in cartStore.cart"
        :key="index"
      >
        <div class="cart-info">
          <div class="name-size">
            <img :src="item.image" alt="pizza" class="cart-img" />
            <div class="text-container">
              <p>{{ item.name }}</p>
              <p>{{ item.dough }} тесто, {{ item.size }}</p>
            </div>
          </div>
          <div class="cart-plus-minus">
            <button @click="cartStore.deleteItem(item)">-</button>
            <p>{{ item.count }}</p>
            <button @click="cartStore.addToCart(item)">+</button>
          </div>
          <p class="bold">{{ item.price }} ₽</p>
        </div>
      </div>

      <div class="summa-order">
        <p>
          Всего пицц: <span class="bold">{{ cartStore.totalCount }} шт</span>
        </p>
        <p>
          Сумма заказа: <span class="red"> {{ cartStore.totalPrice }} ₽</span>
        </p>
      </div>
      <div class="paynment">
        <button @click="goHome">Вернуться назад</button>
        <button>Оплатить сейчас</button>
      </div>
    </div>
  </div>
  <Empty v-else></Empty>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/counter.js";
import Empty from "@/views/Empty.vue";

const router = useRouter();
const cartStore = useCartStore();
const goHome = () => {
  router.push("/");
};
</script>
<style>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.first,
.second {
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
}
.delete-card,
.summa-order,
.paynment {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.delete-card p {
  color: #b6b6b6;
}
.paynment button:first-child {
  width: 211px;
  height: 55px;
  border: 1px solid #d3d3d3;
  border-radius: 30px;
  color: rgba(202, 202, 202, 1);
  background-color: #ffffff;
  font-size: 16px;
  cursor: pointer;
}
.paynment button:nth-child(2) {
  width: 211px;
  height: 55px;
  border-radius: 30px;
  border: 1px solid #fe5f1e;
  background-color: #fe5f1e;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
}
.buy-item {
  width: 60%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-top: 1px solid #f4f4f4;
}
.cart-info {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.cart-plus-minus {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 10px;
  position: absolute;
  left: 50%;
}
.cart-plus-minus button {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #fe5f1e;
  background: #ffffff;
  color: #fe5f1e;
  font-weight: bold;
  cursor: pointer;
}
.name-size {
  display: flex;
  align-items: center;
  gap: 15px;
}
.cart-img {
  width: 100px;
}
.text-container p:first-child {
  height: 10px;
  font-size: 22px;
  font-weight: 700;
}
.text-container p:nth-child(2) {
  color: #8d8d8d;
}
.cart-plus-minus p:nth-child(2),
.cart-info p:nth-child(3),
.summa-order {
  font-size: 22px;
}
.bold {
  font-weight: 700;
}
.red {
  font-weight: 700;
  color: #fe5f1e;
}
</style>
