<template>
    <div>
        <!-- <div>Look posts</div> -->
        <div v-if="posts.length === 0">NO posts</div>
        <div class="form" v-for="(post, index) in posts"
            :key="index">
        <p>Name: {{ post.title}}</p>
        <p>In:{{ post.body}}</p>
        <div><button>
        DELETE
        </button>
        </div>
    </div>
    </div>

</template>



<script>
export default {
    name: 'postList',
    props: {
        posts:{
            type: Array,
            default(){
                return []
            },
            // required: true или фолз, если пост не обязательный, тру - сто проц надо
            required: false,
        }, 
    }, 
}
</script>




<style>

</style>