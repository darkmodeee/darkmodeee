<template>
  <div id="darkmode">
    <Particles></Particles>
    <router-view/>
  </div>
</template>

<script>
import Particles from './components/Particles.vue';

export default {
  name: 'DarkMode',
  components: {
    Particles,
  },
};
</script>
