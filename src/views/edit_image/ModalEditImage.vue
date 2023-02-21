<script>

export default {
  setup() {

  },
  data() {
    return {
      selectedKey: "resize",
    }
  },
  methods: {
    handleOk() {

    },
    isSelected(key) {
      return this.selectedKey == key
    },
    changeSelectedKey(key) {
      this.selectedKey = key
    }
  }
}
</script>

<template>
  <a-modal :visible="true" centered @ok="handleOk" class="custom-modal" :footer="false">
    <template #title>
      <div class="flex justify-between">
        <div class="flex items-center">
          <close-svg-pcon :size="15" class="mr-4"></close-svg-pcon>
          <a-divider type="vertical" />
          <div class="font-semibold ml-4">Photo Studio</div>
        </div>

        <div class="flex">
          <div
            class="flex items-center justify-center text-color-primary hover:bg-color-primary hover:text-white hover:opacity-70 h-[30px] w-[80px] cursor-pointer rounded-[20px]">
            Cancel
          </div>
          <div
            class="flex items-center justify-center bg-color-primary ml-4 rounded-[20px] h-[30px] w-[80px] text-white text-sm cursor-pointer">
            Save</div>
        </div>
      </div>
    </template>
    <template #closeIcon>
    </template>

    <div class="w-full h-full">
      <div class="w-44 pl-4 pt-4 border-r border-r-color-border h-full text-xs">
        <div class="mb-3 ml-2 text-base font-semibold">Editing tools</div>

        <div class="group flex items-center mb-3 hover:text-color-primary cursor-pointer" :class="{
          'font-semibold text-color-primary': isSelected('resize')
        }" @click="changeSelectedKey('resize')">
          <div class="w-9 h-9 flex items-center justify-center rounded-full"
            :class="{ 'bg-color-primary text-white': isSelected('resize') }">
            <text-resize-pcon :size="20"></text-resize-pcon>
          </div>
          <div class="ml-4 group-hover:translate-x-1 duration-150">Crop & Resize</div>
        </div>


        <div class="group flex items-center mb-3 hover:text-color-primary cursor-pointer" :class="{
          'font-semibold text-color-primary': isSelected('enhance')
        }" @click="changeSelectedKey('enhance')">
          <div class="w-9 h-9 flex items-center justify-center rounded-full"
            :class="{ 'bg-color-primary text-white': isSelected('enhance') }">
            <magic-wand-pcon :size="20"></magic-wand-pcon>
          </div>
          <div class="ml-4 group-hover:translate-x-1 duration-150">Enhance</div>
        </div>


        <div class="group flex items-center mb-3 hover:text-color-primary cursor-pointer" :class="{
          'font-semibold text-color-primary': isSelected('adjust')
        }" @click="changeSelectedKey('adjust')">
          <div class="w-9 h-9 flex items-center justify-center rounded-full"
            :class="{ 'bg-color-primary text-white': isSelected('adjust') }">
            <adjustments-horizontal-pcon :size="20"></adjustments-horizontal-pcon>
          </div>
          <div class="ml-4 group-hover:translate-x-1 duration-150">Adjust</div>
        </div>

        <div class="group flex items-center mb-3 hover:text-color-primary cursor-pointer" :class="{
          'font-semibold text-color-primary': isSelected('filter')
        }" @click="changeSelectedKey('filter')">
          <div class="w-9 h-9 flex items-center justify-center rounded-full"
            :class="{ 'bg-color-primary text-white': isSelected('filter') }">
            <intersect-svg-pcon :size="20"></intersect-svg-pcon>
          </div>
          <div class="ml-4 group-hover:translate-x-1 duration-150">Filters</div>
        </div>


        <div class="group flex items-center mb-3 hover:text-color-primary cursor-pointer" :class="{
          'font-semibold text-color-primary': isSelected('cutout')
        }" @click="changeSelectedKey('cutout')">
          <div class="w-9 h-9 flex items-center justify-center rounded-full"
            :class="{ 'bg-color-primary text-white': isSelected('cutout') }">
            <scissors-svg-pcon :size="20"></scissors-svg-pcon>
          </div>
          <div class="ml-4 group-hover:translate-x-1 duration-150">Cut Out</div>
        </div>
      </div>


      <div class="ml-4 w-64 group-hover:translate-"></div>
    </div>
  </a-modal>
</template>