<template>
  <div>
    <div
      @mouseenter="setSelectedArticle(article)"
      @mouseleave="unsetSelectedArticle(article)"
      @click="toggleShowArticleAbstract(article)"
    >
      <div class="flex">
        <span class="text-grey-600">Name:</span>
        <span class="font-bold text-gray-900">
          {{ article.title }} -
          <a :href="article.url">Link</a>
        </span>
      </div>
      <div>
        <button
          class="bg-red-400 text-white py-1 px-3 rounded-full font-bold shadow my-3"
          @click="markAsRead(article, index)"
        >
          Read it
        </button>
        <a
          class="bg-red-400 text-white py-1 px-3 rounded-full font-bold shadow my-3"
          target="_blank"
          :href="article.url"
          >Open</a
        >
      </div>
      <div v-if="article.showAbstract" class="bg-gray-400 p-4">
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
