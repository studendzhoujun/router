<template>
  <div>
    <hi :msg="message"/>
    <a href="/hi">go hi</a>
  </div>
</template>

<script>
import hi from '../components/hi.vue'

export default {
  data(){
    let message='hello'+(Math.random()*10).toFixed()
    return {
        message
    }
  },
  name: 'app',
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
</style>
