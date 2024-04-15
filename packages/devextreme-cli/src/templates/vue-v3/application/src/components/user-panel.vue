<template>
  <div class="user-panel">
    <dx-drop-down-button
      v-if="menuMode === 'context'"
      ref="dropDownBtn"
      styling-mode="text"
      :icon="avatar"
      :show-arrow-icon="false"
      :element-attr="{
        class: 'user-button',
      }"
      :drop-down-options="{
        width: 'auto',
      }"
      drop-down-content-template="dropDownContentTemplate"
    >
      <template #dropDownContentTemplate>
        <user-menu-section 
          :email="email"
          :menu-items="menuItems"
          @click:menu-item="onMenuItemClick"
        />
      </template>
    </dx-drop-down-button>

    <user-menu-section
      v-if="menuMode === 'list'"
      class="dx-toolbar-menu-action"
      :email="email"
      :menu-items="menuItems"
      :avatar="avatar"
    />
  </div>
</template>

<script setup>
import { DxDropDownButton } from 'devextreme-vue';
import UserMenuSection from './user-menu-section.vue';
import { defineProps, ref } from 'vue';

defineProps({
  menuMode: String,
  menuItems: Array,
  email: String
});

const avatar = "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png";
const dropDownBtn = ref(null);

function onMenuItemClick () {
  dropDownBtn.value?.instance.close()
}
</script>

<style scoped lang="scss">
@import "../themes/generated/variables.base.scss";

.user-panel  {
  display: flex;
  flex-direction: column;

  :deep(.user-button) {
    margin-left: 5px;

    img.dx-icon {
      border-radius: 50%;
      margin: 0;
      width: auto;
      aspect-ratio: 1 / 1;
      box-sizing: border-box;
      border: 1px solid var(--base-border-color);
      object-fit: cover;
      object-position: top;
      background: rgb(255, 255, 255);
      background-clip: padding-box;

      .dx-theme-generic & {
        height: 100%;
      }

      .dx-theme-material & {
        height: 100%;
      }
    }

    .dx-buttongroup {
      vertical-align: middle;

      .dx-button.dx-button-has-icon:not(.dx-button-has-text) {
        .dx-button-content {
          padding: 0;
        }

        &.dx-state-hover,
        &.dx-state-focused {
          background-color: transparent;
        }
      }
    }
  }
}
</style>
