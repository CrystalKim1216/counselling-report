<script setup>
import CalendarStudentAdd from "./CalendarStudentAdd.vue";
import STUDENTS_DATA from "../../assets/data/student.js";

import dayjs from "dayjs";
import { ref, computed } from "vue";

const students = STUDENTS_DATA.map((student) => {
  return { id: student.id, name: student.name };
});

// import { useStore } from "../store";

const DAYS_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const currentDate = ref(dayjs());
const todayDate = dayjs().format("YYYYMMDD");

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//①カレンダーの最初の日を取得する。
const getStartDate = () => {
  //月の初めの日を取得する
  let date = dayjs(currentDate.value).startOf("month");
  const youbiNum = date.day();
  //月の初めの日から日曜日までの差を算出し、日曜日の日を取得。
  return date.subtract(youbiNum, "days");
};
//②カレンダーの最後の日を取得する。
const getEndDate = () => {
  //月の最後の日を取得
  let date = dayjs(currentDate.value).endOf("month");
  const youbiNum = date.day();
  //月の初めの日から土曜日までの差を算出し、土曜日の日を取得。
  return date.add(6 - youbiNum, "days");
};
//③一ヶ月の週の数分の配列の作成
const getCalendar = () => {
  let startDate = getStartDate();
  //月最後の日
  const endDate = getEndDate();
  //カレンダーの縦軸を計算
  const weekNumber = Math.ceil(endDate.diff(startDate, "days") / 7);

  //空配列を用意
  let calendars = [];
  let calendarDate = getStartDate();

  //7日分の日にちデータをループで取得してweekRowにpush。そしてweekRowの配列をcalendarsにpush。それをカレンダーの縦軸回数繰り返す処理
  for (let week = 0; week < weekNumber; week++) {
    const weekRow = [];
    for (let day = 0; day < 7; day++) {
      // let dayEvents = getDayEvents(calendarDate);
      weekRow.push({
        date: calendarDate.get("date"),
        month: calendarDate.format("YYYY-MM"), //背景色を分けるため追加
        // dayEvents,
      });
      calendarDate = calendarDate.add(1, "days");
    }
    calendars.push(weekRow);
  }
  return calendars;
};

//④③で作成した配列を取得
const calendars = computed(() => {
  return getCalendar();
});

//⑤フォーマットを整える
// const displayMonth = computed(() => {
//   console.log(currentDate.value.month());
//   return currentDate.value;
//   return currentDate.value.format("YYYY[/]M");
// });

const paramDate = (day) => {
  return `${day.month.replace("-", "")}${day.date.toString().padStart(2, 0)}`;
};

//⑥前の月を表示
const prevMonth = () => {
  currentDate.value = dayjs(currentDate.value).subtract(1, "month");
};

//⑦後ろの月を表示
const nextMonth = () => {
  currentDate.value = dayjs(currentDate.value).add(1, "month");
};

//⑨背景色を分けるためのプロパティ
const currentMonth = computed(() => {
  return currentDate.value.format("YYYY-MM");
});

const displayMonth = computed(() => {
  return `${MONTHS[currentDate.value.month()]}, ${currentDate.value.year()}`;
});

// const store = useStore();

//⑩イベントを取得
// const events = computed(() => {
//   return store.getters["calendar/getEvents"];
// });

//⑪日付が一致するイベントを取得し、配列として格納するメソッド
// const getDayEvents = (date) => {
//   return events.value.filter((event) => {
//     let eventDate = dayjs(event.start).format("YYYY-MM-DD");
//     let Date = date.format("YYYY-MM-DD");
//     if (eventDate == Date) return true;
//   });
// };

const showDialog = ref(false);
// const addStudent = (day) => {
//   console.log(day);
//   showDialog.value = true;
// };
const closeModal = () => {
  showDialog.value = false;
};
</script>

<template>
  <base-dialog
    :show="showDialog"
    title="Counselling Schedule"
    @close="closeModal"
  >
    <CalendarStudentAdd :students="students" />
  </base-dialog>
  <div class="content">
    <div class="month-area">
      <h1>{{ displayMonth }}</h1>
      <div class="button-area">
        <button class="button__today">TODAY</button>
        <button @click="prevMonth" class="button">
          <font-awesome-icon icon="fa-solid fa-angles-left" />
          Prev
        </button>
        <button @click="nextMonth" class="button">
          Next
          <font-awesome-icon icon="fa-solid fa-angles-right" />
        </button>
      </div>
    </div>
    <div class="calendar">
      <div class="calendar-weekly">
        <div
          class="calendar-daysofweek"
          v-for="(dayofweek, index) in DAYS_OF_WEEK"
          :key="index"
        >
          {{ dayofweek }}
        </div>
      </div>
      <div
        class="calendar-weekly"
        v-for="(week, index) in calendars"
        :key="index"
      >
        <div
          class="calendar-daily"
          :class="{ outside: currentMonth !== day.month }"
          v-for="(day, index) in week"
          :key="index"
        >
          <div
            class="calendar-day"
            :class="{ today: todayDate === paramDate(day) }"
          >
            <section>
              <router-link
                :to="{
                  name: 'counselling.day.detail',
                  params: { date: paramDate(day) },
                }"
                class="date"
              >
                {{ day.date }}
              </router-link>
              <!-- <div
                v-if="currentMonth === day.month"
                class="add-std"
                @click="addStudent(day)"
              >
                <font-awesome-icon icon="fa-solid fa-user-plus" />
              </div> -->
            </section>
            <router-link
              v-if="currentMonth === day.month"
              :to="{
                name: 'counselling.day.add',
                params: { date: paramDate(day) },
              }"
              class="councelling"
            >
              <font-awesome-icon icon="fa-regular fa-pen-to-square" />
            </router-link>
          </div>
          <!--currnetMonthの値とday.monthの値が異なる場合のみstyleを適用-->
          <div v-for="dayEvent in day.dayEvents" :key="dayEvent.id">
            <div
              class="calendar-event"
              :style="`background-color:${dayEvent.color}`"
            >
              <p>{{ dayEvent.health }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 90%;
  min-width: 800px;
  margin: 2rem auto;
}

.month-area {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
}

.button-area {
  margin: 0.5em 0;
}
.button__today {
  color: var(--color-button);
  margin-right: 15px;
  padding: 5px 8px;
  border: 1px solid var(--color-button);
  border-radius: 5px;
  transition: all 0.3s ease-Out;
}
.button__today:hover {
  color: var(--color-cream);
  background-color: var(--color-button);
}
.button {
  padding: 4px 8px;
  margin-right: 8px;
  color: var(--color-font);
}

.calendar {
  border-top: 1px solid var(--color-border);
  font-size: 15px;
}

.calendar-weekly {
  display: flex;
  border-left: 1px solid var(--color-border);
}

/* 曜日のスタイル*/
.calendar-daysofweek {
  height: 25px;
  flex: 1;
  text-align: center;
  border-right: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 日にちのスタイル*/
.calendar-daily {
  flex: 1;
  min-height: 100px;
  border-right: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-cream2);
}

.today {
  background-color: var(--color-button);
  color: var(--color-cream);
}

.calendar-day {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
}

.calendar-day section {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.calendar-day .date {
  font-weight: bold;
}

.calendar-day .add-std {
  color: white;
}

.calendar-day .councelling {
  margin: auto 5px 5px auto;
  font-size: 25px;
  color: white;
}

/* 背景色*/
.outside {
  background-color: var(--color-background);
  color: var(--color-font-soft);
}
/* イベント調整*/
.calendar-event {
  /* フォント色付け*/
  color: white;
  line-height: 25px;
  /* 丸みを帯びさせる*/
  border-radius: 4px;
}
</style>
