<template>
  <div class="body--ready">
    <canvas class="canvas"></canvas>
    <div class="ui">
      <input class="ui-input" type="text" />
      <span class="ui-return">↵</span>
    </div>
  </div>
</template>
<script src="static/shape-shifter/shape-shifter.js">
</script>

<script>
import S from 'static/shape-shifter/shape-shifter.js'
export default {
  mounted (){
    S.init();
  },
  methods:{
    // init (){
    //   S.init();
    // }
  }

}
</script>
<style src="static/shape-shifter/site.min.css"></style>



