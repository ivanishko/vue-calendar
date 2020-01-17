<template  id="calendar">
  <div>
    <p class="text-center">{{ $t("message.selectedDate") }}: {{ formattedDate }}</p>
    <p v-show="propsDate">{{$t("message.props")}}: {{propsDate}} </p>
    <div class="calendar">

    <header class="header">

      <button @click="previousMonth">&lt;&lt;</button>
      <span>{{ currentMonthLabel }} {{ currentYear }}</span>
      <button @click="nextMonth">&gt;&gt;</button>
    </header>
    <div class="headings" v-for="dayLabel in dayLabels">
      {{ dayLabel }}
    </div>
    <div v-for="(day, index) in dates"
         class="day"
         :class="dayClassObj(day)">
      <button @click="setSelectedDate(day)">
        {{ day.date | formatDateToDay }}
      </button>
    </div>
    </div>
  </div>
</template>

<script>

    export default {
        data() {
            return {
                today: null,
                selectedDate: null,
                currDateCursor: null,
                inputFromDate: null
            };
        },
        created() {
            if (this.propsDate) {
                this.inputFromDate = new Date(this.propsDate );
            }
            this.today = this.propsDate ? this.inputFromDate  : new Date();
            this.selectedDate = this.today;
            this.currDateCursor = this.today;
        },
        props: {
            propsDate: {

            },
            startDate: {
                  required: false,
                  type: Date,
            }
        },
        computed: {
            currentMonth() {
                return this.currDateCursor.getMonth();
            },
            currentYear() {
                return this.currDateCursor.getFullYear();
            },
            currentMonthLabel() {
                return this.$t("message.months")[this.currentMonth];
            },
            dayLabels() {
                return this.$t("message.days");
            },
            dates() {
                const cursorDate = this.currDateCursor;
                let startDate = dateFns.startOfMonth(cursorDate),
                    endDate = dateFns.lastDayOfMonth(cursorDate);
                const daysNeededForLastMonth = dateFns.getDay(startDate),
                    daysNeededForNextMonth = (7 - (dateFns.getDay(endDate) + 1)) > 6 ? 0 : (7 - dateFns.getDay(endDate)) - 1;
                startDate = dateFns.addDays(startDate, -daysNeededForLastMonth);
                endDate = dateFns.addDays(endDate, daysNeededForNextMonth);

                return dateFns.eachDay(startDate, endDate).map(date => ({
                    date,
                    isCurrentMonth: dateFns.isSameMonth(cursorDate, date),
                    isToday: (this.inputFromDate) ? dateFns.isSameDay(this.inputFromDate, date) :  dateFns.isToday(date),
                    isSelected: dateFns.isSameDay(this.selectedDate, date)
                }));
            },
            formattedDate() {
                return dateFns.format(this.selectedDate, 'DD/MM/YYYY');
            }
        },
        mounted() {

            if (this.startDate) {
                this.currDateCursor = this.startDate;
                this.selectedDate = this.startDate;
            }
        },
        methods: {
            dayClassObj(day) {
                return {
                    'today': day.isToday,
                    'current': day.isCurrentMonth,
                    'selected': day.isSelected,
                };
            },
            nextMonth() {
                this.currDateCursor = dateFns.addMonths(this.currDateCursor, 1);
            },
            previousMonth() {
                this.currDateCursor = dateFns.addMonths(this.currDateCursor, -1);
            },
            setSelectedDate(day) {
                this.selectedDate = day.date;
                this.$emit('input', this.selectedDate);
                // change calendar to correct month if they select previous or next month's days
                if (!day.isCurrentMonth) {
                    const selectedMonth = dateFns.getMonth(this.selectedDate);
                    this.currDateCursor = dateFns.setMonth(this.currDateCursor, selectedMonth);
                }
            }
        },
            filters: {
                formatDateToDay(val) {
                    return dateFns.format(val, 'D');
                }
            }

    }
</script>

<style lang="scss">
  :root {
    --white: hsl(0, 0%, 100%);
    --blue-grey-400: hsl(210, 38%, 95%);
    --blue-grey-100: hsl(210, 38%, 80%);
    --black-400: hsl(0, 0%, 96%);
    --black-300: hsl(0, 0%, 85%);
    --black-200: hsl(0, 0%, 75%);
    --black-100: hsl(0, 0%, 20%);
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    font-family: inherit;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  body {
    font-family: "Inconsolata", serif;
    background: var(--blue-grey-400);
    color: var(--black-100);
    display: flex;
    justify-content: center;
  }

  .calendar {
    background-color: var(--white);
    border-radius: 3px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 300px;
    padding: 0.25rem 0.5rem 1rem 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
    margin-top: 20px;

  > .top {
    grid-column: 1 / span 7;
  }

  > .header {
    padding: 0.75rem;
    font-size: 1.25rem;
    grid-column: 1 / span 7;

  > span {
    flex: 1;
    text-align: center;
  }

  button {
    border: none;
    background: var(--white);
    margin: 0 1rem;
    padding: 0.25rem 0.5rem;

  &:hover {
     background: var(--black-400);
     transition: background 150ms;
   }
  }
  }

  > * {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  > .day {
    color: var(--black-200);
    font-size: 1rem;
    border-radius: 2px;

  &.selected {
     border: 1px solid var(--blue-grey-100);
   }

  &.current {
     color: var(--black-100);
   }

  &::before {
     content: "";
     display: inline-block;
     height: 0;
     padding-bottom: 100%;
     width: 1px;
   }

  button {
    color: inherit;
    background: transparent;
    border: none;
    height: 100%;
    width: 100%;
  &:hover {
     background: var(--black-400);
     transition: background 150ms;
   }
  }
  }

  > .today {
    background: var(--black-400);
    border-radius: 2px;
  }
  }

  .text-center {
    text-align: center;
  }
</style>
