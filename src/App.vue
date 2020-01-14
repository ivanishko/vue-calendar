<template>
  <div id="app">
    <div class="container">
      <div class="wrapper">
        <p class="text-center">Selected Date: {{ formattedDate }}</p>
        <AppCalendar v-model="curr" />
      </div>

    </div>

  </div>
</template>

<script>
    import AppCalendar from "./assets/components/Calendar";

export default {
  name: 'app',
    components: {
        AppCalendar
    },
    data () {
      return {
          curr: new Date(),
      }
    },
    computed: {
        formattedDate() {
            return dateFns.format(this.curr, 'DD/MM/YYYY');
        }
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
</style>
