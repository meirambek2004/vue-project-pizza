<template>
  <div class="category">
    <button
      v-for="(category, c) in categories"
      :key="c"
      @click="selectCategory(category)"
      :class="{ active: selectedCategory === category }"
    >
      {{ category }}
    </button>
    <div class="sort">
      <label for="sort">Сортировка по:</label>
      <select id="sort" @change="selectSort($event)">
        <option value="popular">Популярности</option>
        <option value="price">Цене</option>
        <option value="alphabet">Алфавиту</option>
      </select>
    </div>
  </div>
  <h2>Все пиццы</h2>
</template>

<script setup>
import { ref } from "vue";
const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const selectedCategory = ref("Все");

const emit = defineEmits(["update-category", "update-sort"]);

const selectCategory = (category) => {
  selectedCategory.value = category;
  emit("update-category", category);
};
const selectSort = (event) => {
  emit("update-sort", event.target.value);
};
</script>

<style>
.category {
  width: 97%;
  display: flex;
  align-items: center;
  gap: 15px;
  /* background-color: #fe5f1e; */
  padding-left: 50px;
}

.category button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 132px;
  height: 46px;
  border-radius: 30px;
  background-color: #f9f9f9;
  color: #282828;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.category button.active {
  background-color: #282828;
  color: #ffffff;
}
.sort {
  display: flex;
  margin-left: auto;
  padding: 50px;
  gap: 10px;
  position: relative;
}
#sort {
  border: none;
  color: #fe5f1e;
  border-bottom: #fe5f1e dashed 1px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
}
#sort option {
  background-color: #ffffff;
  color: #282828;
  font-size: 16px;
}
#sort:focus {
  position: absolute;
}
h2 {
  padding-left: 50px;
}
</style>
