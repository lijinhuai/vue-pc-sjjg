<template>
  <div class="body--ready">
    <canvas class="canvas"></canvas>
    <div class="ui">
      <input class="ui-input" type="text" />
      <span class="ui-return">↵</span>
    </div>
  </div>
</template>
<script>
import Canvas from 'assets/plugins/shape-shifter/shape-shifter.js'
export default {
  mounted () {
    const self = this
    self.drawCanvas(function () {
      self.$router.push({ path: '/home' })
    })
  },
  methods: {
    drawCanvas (callback) {
      Canvas.init(callback)
    }
  }

}
</script>
<style src="assets/plugins/shape-shifter/site.css"></style>

<style scoped>
.body--ready {
  margin: -10px;
}
</style>





