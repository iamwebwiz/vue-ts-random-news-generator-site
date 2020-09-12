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

              <div class="flex justify-around">
                <button
                  class="hidden sm:block focus:outline-none focus:outline-shadow bg-red-500 hover:bg-red-600 transition duration-300 text-white py-1 px-3 rounded-md font-semibold shadow my-3 mr-2"
                  @click.prevent="fetchRandomArticle"
                >
                  Add reading
                </button>
                <button
                  class="hidden sm:block focus:outline-none focus:outline-shadow bg-gray-600 hover:bg-gray-700 transition duration-300 text-white py-1 px-3 rounded-md font-semibold shadow my-3"
                  @click="toggleArticlesToDisplay"
                >
                  <span v-show="showUnreadArticles">Read articles</span>
                  <span v-show="!showUnreadArticles">Unread articles</span>
                </button>
              </div>

              <!-- Mobile buttons -->
              <button
                class="block w-full sm:hidden focus:outline-none focus:outline-shadow bg-red-500 hover:bg-red-600 transition duration-300 text-white py-3 px-3 rounded-md font-semibold shadow my-3"
                @click.prevent="fetchRandomArticle"
              >
                Add reading
              </button>

              <button
                class="block w-full sm:hidden focus:outline-none focus:outline-shadow bg-gray-600 hover:bg-gray-700 transition duration-300 text-white py-3 px-3 rounded-md font-semibold shadow my-3"
                @click="toggleArticlesToDisplay"
              >
                <span v-show="showUnreadArticles">Read articles</span>
                <span v-show="!showUnreadArticles">Unread articles</span>
              </button>
              <!-- /Mobile buttons -->
            </div>

            <h3 class="font-semibold text-md text-gray-700 my-4">
              {{ readingStatus }}
            </h3>

            <!-- Unread articles -->
            <div v-show="showUnreadArticles">
              <unread-articles
                :articles="unreadArticles"
                :markAsRead="markAsRead"
                :setSelectedArticle="setSelectedArticle"
                :toggleShowArticleAbstract="toggleShowArticleAbstract"
                :unsetSelectedArticle="unsetSelectedArticle"
              ></unread-articles>
            </div>
            <!-- /Unread articles -->

            <!-- Read articles -->
            <div v-show="!showUnreadArticles">
              <read-articles
                :articles="readArticles"
                :toggleShowArticleAbstract="toggleShowArticleAbstract"
              ></read-articles>
            </div>
            <!-- /Read articles -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import axios from "axios";
  import UnreadArticles from "@/components/UnreadArticles/Index.vue";
  import ReadArticles from "@/components/ReadArticles/Index.vue";

  interface ArticleType {
    title: string;
    url: string;
    abstract: string;
    showAbstract: boolean;
  }

  @Component({
    components: {
      UnreadArticles,
      ReadArticles,
    },
  })
  export default class App extends Vue {
    private appName: string = "Random news site generator";
    private readArticles: Array<ArticleType> = [];
    private unreadArticles: Array<ArticleType> = [];
    private selectedArticle?: ArticleType | null = null;
    private showUnreadArticles: boolean = true;

    get readingStatus(): string {
      if (this.readArticles.length == 0 && this.unreadArticles.length == 0)
        return "Add something to read to get the show started";
      if (this.readArticles.length > 0 && this.unreadArticles.length == 0)
        return "Was that it? Add more below";
      if (this.unreadArticles.length == 0) return "Get reading!";
      return "Articles";
    }

    public toggleArticlesToDisplay() {
      this.showUnreadArticles = !this.showUnreadArticles;
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

    public unsetSelectedArticle(article: ArticleType): void {
      if (this.selectedArticle?.title == article.title) {
        this.selectedArticle = null;
      }
    }

    public markAsRead(article: ArticleType, index: number): void {
      this.readArticles.push(article);

      this.unreadArticles.splice(index, 1);
    }
  }
</script>
