<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option disabled value="">Change language</option>
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.label">{{ lang.language }}</option>
    </select>
  </div>
</template>

<script>
    export default {
        name: 'locale-changer',
        data () {
            return {
                langs: [ {
                        language: 'English',
                        label: 'en',
                    },
                    {
                        language: 'Russian',
                        label: 'ru',
                    },
                    {
                        language: 'Ukrainian',
                        label: 'ua'
                    }
                ] }
        }
    }
</script>
