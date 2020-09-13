<template>
  <div>
    <h3 class="font-semibold text-md text-gray-700 my-8">
      {{ text }}
    </h3>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";

  @Component
  export default class ReadingStatus extends Vue {
    @Prop()
    private text!: string;
  }
</script>
