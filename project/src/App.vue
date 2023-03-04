<template>
  <div id="app">
    <!-- <h1>Hi! What`s your talant?</h1>
    <div>Caunt Likes: {{ likes }} </div>
    <div>Caunt Dislakes: {{ dislikes }} </div>
    <div>
      <button class="like" @click=" addLike ">Like</button>
      <button class="d-like" @click=" dislikes += 1">Dislike</button>
    </div>
     -->
  
     <div>
        Create post
     </div>
     <div>
        <input 
        v-model="title"
        class="name_post" 
        placeholder="Name Post">
     </div>
     <div>
        <input 
        v-model="text"
        class="in_post" 
        placeholder="In Post">
     </div>
     <div>
        <button @click="addPost">Add post</button>
      </div>

    <div>
     <div>Look posts</div>
     <div v-if="posts.length === 0">NO posts</div>
     <div class="form" v-for = "(post, index) in posts"
     :key="index">
        <p>Name: {{ post.title}}</p>
        <p>In:{{ post.text}}</p>
        <div><button @click="deetePost">
        DELETE
        </button></div>
     </div>
     </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      title: '',
      text:'',
      posts: [
        {
          id: 1, 
          title: 'jfhkjf_1',
          text: 'fbhbfbf_1',
        }, 
        {
          id:2, 
          title: 'jfhkjf_2',
          text: 'fbhbfbf_2',
        }, 
        
      ]
    };
  },
  methods: {
    addPost(){
      this.posts.push({
        title: this.title, 
        text: this.text, 
    });
    this.title = this.text = '';
    }, 
    deetePost(index){
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
