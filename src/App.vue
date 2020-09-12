<template>
  <div>
    <div>
      <div>
        <div
          class="w-full h-full bg-gray-200 p-8"
          style="min-height: 100vh; min-width: 100%;"
        >
          <div>
            <div class="block sm:flex sm:justify-between">
              <h1 class="text-lg lg:text-2xl font-semibold py-4 capitalize">
                {{ appName }}
              </h1>
              <button
                class="hidden sm:block focus:outline-none focus:outline-shadow bg-red-500 hover:bg-red-600 transition duration-300 text-white py-1 px-3 rounded-md font-semibold shadow my-3"
                @click.prevent="fetchRandomArticle"
              >
                Add reading
              </button>

              <!-- Mobile buttons -->
              <button
                class="block w-full sm:hidden focus:outline-none focus:outline-shadow bg-red-500 hover:bg-red-600 transition duration-300 text-white py-3 px-3 rounded-md font-semibold shadow my-3"
                @click.prevent="fetchRandomArticle"
              >
                Add reading
              </button>

              <button
                class="block w-full sm:hidden focus:outline-none focus:outline-shadow bg-red-500 hover:bg-red-600 transition duration-300 text-white py-3 px-3 rounded-md font-semibold shadow my-3"
                @click.prevent=""
              >
                Read articles
              </button>
              <!-- /Mobile buttons -->
            </div>

            <h3 class="font-semibold text-md text-gray-700 my-4">
              {{ readingStatus }}
            </h3>

            <div v-if="unreadArticles.length > 0" class="my-6">
              <h2 class="text-sm sm:text-lg lg:text-2xl capitalize">
                Reading list:
              </h2>
              <div
                class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-4"
              >
                <div v-for="(article, index) in unreadArticles" :key="index">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import axios from "axios";
  import ArticleItem from "@/components/ArticleItem.vue";

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
  export default class App extends Vue {
    private appName: string = "Random news site generator";
    private readArticles: Array<ArticleType> = [];
    private unreadArticles: Array<ArticleType> = [];
    private selectedArticle?: ArticleType | null = null;

    get readingStatus(): string {
      if (this.readArticles.length == 0 && this.unreadArticles.length == 0)
        return "Add something to read to get the show started";
      if (this.readArticles.length > 0 && this.unreadArticles.length == 0)
        return "Was that it? Add more below";
      if (this.unreadArticles.length == 0) return "Get reading!";
      return "Articles";
    }

    public fetchRandomArticle() {
      // create get call to grab list of potential article soruces
      try {
        axios.get("/test-data.json").then((response) => {
          // data from response
          let data = response.data;
          // make random number
          let randomNumber = Math.max(Math.floor(Math.random() * 5) - 1, 0);
          // get random article
          let randomArticle: ArticleType = data.results[randomNumber];
          // update the state
          this.unreadArticles.push(randomArticle);
        });
      } catch (error) {
        alert(error);
      }
    }

    public toggleShowArticleAbstract(article: ArticleType): void {
      article.showAbstract = !article.showAbstract;
    }

    public setSelectedArticle(article: ArticleType): void {
      this.selectedArticle = article;
    }

    public unsetSelectedArticle(article: ArticleType) {
      if (this.selectedArticle?.title == article.title) {
        this.selectedArticle = null;
      }
    }

    public markAsRead(article: ArticleType, index: number) {
      this.readArticles.push(article);

      this.unreadArticles.splice(index, 1);
    }
  }
</script>
