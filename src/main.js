import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      hello: 'Hello world',
      selectedDate: 'Selected date',
      days: ['S', 'M', 'T', 'W', 'Th', 'F', 'S'],
      months: [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"]

    }
  },
  ru: {
    message: {
      hello: 'Привет, Мир',
      selectedDate: 'Выбранная дата',
      days: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      months: [
        "Январь", "Февраль", "Март",
        "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь",
        "Октябрь", "Ноябрь", "Декабрь"]
    }
  },
  ua: {
    message: {
      hello: 'Привіт, світ',
      selectedDate: 'Обрана дата',
      days: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      months: [
        "Січень", "Лютий", " Березень",
        "Квітень", "Травень", " Червень",
        "Липень", "Серпень", " Вересень",
        "Жовтень", "Листопад", " Грудень"]
    }
  }
};


const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});


new Vue({
  el: '#app',
  i18n,
  render: h => h(App),
  methods: {
    setLang: function (lang) {
      Vue.config.lang = lang;
      console.log(lang);
    }
  }
});

