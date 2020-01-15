<template>
  <div id="app">
    <p>{{ $t("message.hello") }}</p>

        <p class="text-center">{{ $t("message.selectedDate") }}: {{ formattedDate }}</p>
        <AppCalendar v-model="curr" />
        <LocaleChanger />
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
        data () {
          return {
              curr: new Date()
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
