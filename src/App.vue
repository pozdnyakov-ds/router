<template>
  <AppHeader></AppHeader>
  <router-view />
</template>

<script>
import AppHeader from './components/AppHeader'
export default {
  components: {
    AppHeader
}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
body {
  vertical-align: top;
  padding: 0;
  margin: 0;
}
</style>
