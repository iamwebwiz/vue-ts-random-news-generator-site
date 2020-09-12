<template>
  <div>
    <div v-if="articles.length > 0" class="my-6">
      <h2 class="text-sm sm:text-lg lg:text-2xl capitalize">
        Read articles:
      </h2>
      <div
        class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-4"
      >
        <div v-for="(article, index) in articles" :key="index">
          <article-item
            :article="article"
            :index="index"
            :toggleShowArticleAbstract="toggleShowArticleAbstract"
          ></article-item>
        </div>
      </div>
    </div>
    <div v-else>
      <h4 class="text-center text-gray-700 my-10">
        You have not read any article yet.
      </h4>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import ArticleItem from "./ArticleItem.vue";

  interface ArticleType {
    title: string;
    url: string;
    abstract: string;
    showAbstract: boolean;
  }

  export default Vue.extend({
    name: "ReadArticles",
    components: {
      ArticleItem,
    },
    props: {
      articles: {
        type: Array as () => Array<ArticleType>,
        required: true,
      },
      toggleShowArticleAbstract: {
        required: true,
      },
    },
  });
</script>
