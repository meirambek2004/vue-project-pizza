import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);
  if (localStorage.getItem("cart")) {
    cart.value = JSON.parse(localStorage.getItem("cart"));
  }
  const saveToLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart.value));
  };
  watch(cart, saveToLocalStorage, { deep: true });

  const addToCart = (pizza) => {
    const item = cart.value.find(
      (p) =>
        p.id === pizza.id && p.size === pizza.size && p.dough === pizza.dough
    );
    if (item) {
      item.count++;
    } else {
      cart.value.push({ ...pizza, count: 1 });
    }
  };
  const deleteItem = (pizza) => {
    const item = cart.value.find(
      (p) =>
        p.id === pizza.id && p.size === pizza.size && p.dough === pizza.dough
    );
    if (item) {
      item.count--;
      if (item.count === 0) {
        cart.value = cart.value.filter(
          (p) =>
            !(
              p.id === pizza.id &&
              p.size === pizza.size &&
              p.dough === pizza.dough
            )
        );
      }
    }
  };

  const clearCart = () => {
    cart.value = [];
    localStorage.removeItem("cart");
  };

  const totalPrice = computed(() =>
    cart.value.reduce((sum, item) => sum + item.price * item.count, 0)
  );

  const totalCount = computed(() =>
    cart.value.reduce((sum, item) => sum + item.count, 0)
  );

  return { cart, addToCart, totalPrice, totalCount, deleteItem, clearCart };
});
