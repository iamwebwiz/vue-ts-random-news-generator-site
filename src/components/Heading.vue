<template>
  <div>
    <h1 class="text-center sm:text-left text-lg lg:text-2xl font-semibold py-4 capitalize">
      {{ text }}
    </h1>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";

  @Component
  export default class Heading extends Vue {
    @Prop()
    private text!: string;
  }
</script>
