<template>
  <div id="app">
    <LocaleChanger />
    <p>{{ $t("message.hello") }}</p>
        <AppCalendar />
    <footer>
      <a href="https://github.com/ivanishko/vue-calendar" target="_blank">Source Github</a>
    </footer>

  </div>
</template>

<script>
    import AppCalendar from "./assets/components/Calendar";
    import LocaleChanger from "./assets/components/Localechanger";

    export default {
      name: 'app',
        components: {
            AppCalendar,
            LocaleChanger
        },
        data() {
            return {
          }
        },
        computed: {

        },
    }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
  footer {
    margin-top: 100px ;

  }
</style>
