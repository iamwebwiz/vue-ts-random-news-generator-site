<template>
  <div>
    <div
      class="bg-white px-6 py-4 rounded shadow cursor-pointer"
      @mouseenter="setSelectedArticle(article)"
      @mouseleave="unsetSelectedArticle(article)"
      @click="toggleShowArticleAbstract(article)"
    >
      <div class="flex justify-between">
        <h2 class="font-semibold text-sm sm:text-base capitalize text-gray-800">
          {{ article.title }}
        </h2>
        <a
          :href="article.url"
          class="text-gray-500 text-sm uppercase hover:text-red-500"
          target="_blank"
          >Link</a
        >
      </div>

      <div class="mt-6 mb-3">
        <a
          class="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md font-semibold shadow my-3 mr-2"
          @click="markAsRead(article, index)"
          href="javascript:;"
        >
          Read it
        </a>
        <a
          class="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md font-semibold shadow my-3"
          target="_blank"
          :href="article.url"
          >Open</a
        >
      </div>
      <div v-if="article.showAbstract" class="bg-gray-300 p-4 rounded-md mt-6">
        Abstract: {{ article.abstract }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";

  interface ArticleType {
    title: string;
    url: string;
    abstract: string;
    showAbstract: boolean;
  }

  export default Vue.extend({
    name: "ArticleItem",
    props: {
      article: {
        type: Object as () => ArticleType,
        required: true,
      },
      index: {
        type: Number,
        required: true,
      },
      markAsRead: {
        required: true,
      },
      setSelectedArticle: {
        required: true,
      },
      unsetSelectedArticle: {
        required: true,
      },
      toggleShowArticleAbstract: {
        required: true,
      },
    },
  });
</script>
