<template>
  <div id = "app">
    <post-form
      @add="addPost">
    </post-form>


    <div>
     <div>Look posts</div>
     <post-list
      :posts="posts">
     </post-list>
    </div>
  </div>
</template>

<script>
import postList from './components/postList.vue';
import postForm from './components/postForm.vue';

export default {
  name: 'App',
  components: { 
    postList,  postForm,
    },
  data() {
    return {
      title: '',
      body:'',
      posts: [
        {
          id: 1, 
          title: 'jfhkjf_1',
          body: 'fbhbfbf_1',
        }, 
        {
          id:2, 
          title: 'jfhkjf_2',
          body: 'fbhbfbf_2',
        }, 
        
      ]
    };
  },
  methods: {
    addPost(post){
      this.posts.push({
        ...post
      });
    },
    deletePost(index){
      this.posts.splice(index, 1);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 32px
}
.like{
  background-color: green;
  color: azure;
  cursor: pointer;
}
.d-like{
  background-color: red;
  color: azure;
  cursor: pointer;
}
.form{
  border: 3px;
  display: block;
  font-size: 18px;
}

</style>
