<template>
  <div>
    <div class="bg-green-100 px-6 py-4 rounded shadow cursor-pointer" @click="toggleShowArticleAbstract(article)">
      <div class="flex justify-between">
        <h2 class="font-semibold text-sm sm:text-base capitalize text-gray-800">
          {{ article.title }}
        </h2>
        <a :href="article.url" class="text-gray-500 text-sm uppercase hover:text-red-500" target="_blank">Link</a>
      </div>
      <div v-if="article.showAbstract" class="bg-gray-300 p-4 rounded-md mt-6 font-light text-sm">
        {{ article.abstract }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";

  interface ArticleType {
    title: string;
    url: string;
    abstract: string;
    showAbstract: boolean;
  }

  @Component
  export default class ArticleItem extends Vue {
    @Prop()
    private article!: ArticleType;

    @Prop({ required: true })
    private toggleShowArticleAbstract: any;
  }
</script>
