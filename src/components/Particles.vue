<template>
  <div id="particles">
      <div id="particles-js"></div>
  </div>
</template>

<script>
import option from '@/config/particles.json';

require('particles.js');

export default {
  name: 'Particles',
  mounted() {
    this.$nextTick(() => {
      window.particlesJS('particles-js', option);
    });
  },
};
</script>
