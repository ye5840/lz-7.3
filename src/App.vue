<template>
  <div id="app">
    <div>
      <header class="site-header jumbotron">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>请发表对Vue的评论</h1>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
        <Add :addComment='addComment'></Add>
        <list :comments='comments' :deleteComment='deleteComment'></list>
      </div>
    </div>
  </div>
</template>

<script>
import Add from '@/components/Add'
import List from '@/components/List'
export default {
  name: 'APP',
  components:{
    Add,
    List
  },
  data() {
    return {
      comments:[
        {id:1,content:'Vue很666',username:'aaa'},
        {id:2,content:'Vue很牛逼',username:'bbb'},
        {id:3,content:'Vue还行',username:'ccc'},
      ]
    }
  },
  methods:{
    addComment(comment){
      this.comments.unshift(comment)
    },
    deleteComment(index){
      this.comments.splice(index,1)
    }
  }
}
</script>

<style scoped>
    
</style>
