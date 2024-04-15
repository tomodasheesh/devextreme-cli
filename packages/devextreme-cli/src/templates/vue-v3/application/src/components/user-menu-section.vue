<template>
  <div>
    <div class="user-info">
      <div
        class="image-container"
        v-if="avatar"
      >
        <div
          :style="{
            backgroundImage: `url(${avatar})`,
          }"
          class="user-image"
        />
      </div>
      <div class="user-email">{{ email }}</div>
    </div>
    <dx-list
      :items="menuItems"
      @item-click="itemClickHandler"
    />
  </div>
</template>

<script setup>
import DxList from "devextreme-vue/list";
import { defineProps, defineEmits } from "vue";

defineProps({
  avatar: String,
  menuItems: Array,
  email: String
});

const emits = defineEmits(['click:menu-item']);

function itemClickHandler({ itemData }) {
  itemData.onClick();
  emits('click:menu-item');
}
</script>

<style scoped lang="scss">
.user-info {
  display: flex;
  align-items: center;
  cursor: default;
  padding: 12px;
  border-bottom: 1px solid rgb(219, 219, 219);

  .user-email {
    font-size: 14px;
    color: var(--base-text-color);
  }

  .image-container {
    overflow: hidden;
    border-radius: 50%;
    height: 28px;
    width: 28px;
    margin-right: 12px;
    border: 1px solid rgb(219, 219, 219);

    .user-image {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-color: #fff;
      background-size: cover;
    }
  }

}
</style>
