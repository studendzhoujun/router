<template>
  <div>
    <hi :msg="message"/>
    <a href="/index"> go index</a>
    <template>
       <ul>
         <li v-for="(item,index) in list" :key="index">
           {{item}}
         </li>
       </ul>
    </template>
  </div>
</template>

<script>
import hi from '../components/hi.vue'

export default {
  data(){
    let message='hi'+(Math.random()*10).toFixed()
    return {
        message
    }
  },
  name: 'app',
  created(){

  },
  computed:{
    list(){
      return this.$store.state.list
    }
  },
  components: {
    hi
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul li{ 
  list-style:none
}
</style>
