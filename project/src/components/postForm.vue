<template>
  <div>
    <div>
        Create post
     </div>
     <div>
        <input 
        v-model="post.title"
        class="name_post" 
        placeholder="Name Post">
     </div>
     <div>
        <input 
        v-model="post.body"
        class="in_post" 
        placeholder="In Post">
     </div>
     <div>
        <button @click="addPost">Add post</button>
      </div>
    </div>
</template>

<script>
export default {
    name: 'postForm', 
    data(){
        return{
            post: {
                title: '',
                body: ''
            },
        }
    }, 
    methods:{
        addPost(){
            this.$emit('add', this.post)
            this.post.body = ''
            this.post.title = ''
        },
    }
}
</script>

<style>

</style>