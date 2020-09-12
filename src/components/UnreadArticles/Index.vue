<template>
  <div>
    <div v-if="articles.length > 0" class="my-6">
      <h2 class="text-sm sm:text-lg lg:text-2xl capitalize">
        Reading list:
      </h2>
      <div
        class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-4"
      >
        <div v-for="(article, index) in articles" :key="index">
          <article-item
            :article="article"
            :index="index"
            :markAsRead="markAsRead"
            :setSelectedArticle="setSelectedArticle"
            :toggleShowArticleAbstract="toggleShowArticleAbstract"
            :unsetSelectedArticle="unsetSelectedArticle"
          ></article-item>
        </div>
      </div>
    </div>
    <div v-else>
      <h4 class="text-center text-gray-700 my-10">
        You have nothing to read at this time.
      </h4>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";
  import ArticleItem from "./ArticleItem.vue";

  interface ArticleType {
    title: string;
    url: string;
    abstract: string;
    showAbstract: boolean;
  }

  @Component({
    components: {
      ArticleItem,
    },
  })
  export default class UnreadArticles extends Vue {
    @Prop()
    private articles!: Array<ArticleType>;

    @Prop({ required: true })
    private markAsRead: any;

    @Prop({ required: true })
    private setSelectedArticle: any;

    @Prop({ required: true })
    private unsetSelectedArticle: any;

    @Prop({ required: true })
    private toggleShowArticleAbstract: any;
  }
</script>
