<template>
  <div class="empty-cart">
    <h2>Корзина пустая </h2>
    <div class="text-cart">
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.<br />
        Для того, чтобы заказать пиццу, перейдите на главную страницу.
      </p>
    </div>
    <img :src="shoppingIco" alt="ico" />
    <button @click="goHome">Вернуться назад</button>
  </div>
</template>

<script setup>
import shoppingIco from "@/assets/shopping-ico.svg";
import { useRouter } from "vue-router";

const router = useRouter();
const goHome = () => {
  router.push("/");
};
</script>

<style scoped>
.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  /* gap: 15px; */
  text-align: center;
}
.text-cart {
  font-size: 18px;
  color: #777777;
  margin-bottom: 10px;
}
h2 {
  
  font-size: 32px;
}
button {
  width: 210px;
  height: 46px;
  margin-top: 30px;
  border-radius: 30px;
  background-color: #282828;
  color: #ffffff;
  font-size: 18px;
  padding: 13px 16px;
  cursor: pointer;
}
</style>
