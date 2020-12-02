<template>
  <v-row class="mx-4 mx-lg-16">
    <v-col
      cols="12"
      md="12"
    >
      <v-row class="text-left">
        <v-btn 
          text
          to="/hub" 
        >
          <v-icon class="mr-2">
            mdi-arrow-left
          </v-icon>
          Back to all posts
        </v-btn>
      </v-row>
      <Featured v-if="featuredposts" :featuredposts="featuredposts" />
    </v-col>
  </v-row>
</template>

<script>
import Featured from "../../../components/Featured";

const Cosmic = require("cosmicjs");
const api = Cosmic();
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: "confido",
  read_key: "0O6acZ2ATKQSdKr8rLb5b489Kxg4yNPQRvVii3KCL8T8atx3gn"
});

export default {
  name: "FeaturedPostView",
  components: {
    Featured
  },
  data() {
    return {
      loading: false,
      featuredposts: {},
      slug: ""
    };
  },
  created() {
    this.slug = this.$route.params.id;
    this.fetchFeaturedData();
  },
  methods: {
    fetchFeaturedData() {
      this.error = this.featuredposts = null;
      this.loading = true;
      bucket
        .getObject({
          slug: this.slug
        })
        .then(data => {
          // console.log(data);
          this.featuredposts = data.object;
          this.loading = false;
          // this.featuredposts = featuredposts;
        });
    }
  },
//   head() {
//         let title = this?.post?.seo_metatitle,
//         desc = "desc " + this?.post?.seo_metadescription,
//         url = 'https://confidotalent.com/hub/' + this?.post?.slug,
//         image = this?.post?.seo_metaimage;
//       return {
//           title: title,
//             meta: [
//             { hid: 'description', name: 'description', content: desc },

//             { hid: 'og:title', property: 'og:title', content: title},
//             { hid: 'og:url', property: 'og:url', content: url},
//             { hid: 'og:image', property: 'og:image', content: image},
//             { hid: 'og:description', property: 'og:description', content: desc},

//             { property: 'twitter:domain', content: url},
//             { hid: 'twitter:title', property: 'twitter:title', content: title},
//             { hid: 'twitter:description', property: 'twitter:description', content: desc},
//             { hid: 'twitter:image', property: 'twitter:image', content: image},
//             { hid: 'twitter:url', property: 'twitter:url', content: url},
//             { hid: 'twitter:label1', property: 'twitter:label1', content: title},  
//             ], link: [ { rel: 'canonical', href: url} ]
//       }
//   }
};
</script>