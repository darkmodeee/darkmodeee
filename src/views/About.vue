<template>
  <div id="about" class="no-select">
    <h1>{{dark.about.title}}</h1>
    <p>{{dark.about.content}}</p>
    <router-link to="/">Back to home</router-link>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>
