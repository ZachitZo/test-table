<script setup lang="ts">
import Person from './types/person';

import PersonsTable from './components/PersonsTable.vue';

const personList: Array<Person> = [
  {
    firstName: 'Василий',
    height: 165,
    weight: 85,
  },
  {
    firstName: 'Игорь',
    height: 160,
    weight: 82,
  },
  {
    firstName: 'Николай',
    height: 178,
    weight: 70,
  },
  {
    firstName: 'Олег',
    height: 166,
    weight: 77,
  },
  {
    firstName: 'Светлана',
    height: 164,
    weight: 65,
  },
  {
    firstName: 'Валентина',
    height: 168,
    weight: 68,
  },
  {
    firstName: 'Дмитрий',
    height: 166,
    weight: 70,
  },
  {
    firstName: 'Георгий',
    height: 185,
    weight: 78,
  },
  {
    firstName: 'Галина',
    height: 177,
    weight: 69,
  },
  {
    firstName: 'Марина',
    height: 160,
    weight: 78,
  },
  {
    firstName: 'Инокентий',
    height: 184,
    weight: 78,
  },
  {
    firstName: 'Михаил',
    height: 166,
    weight: 85,
  },
  {
    firstName: 'Артём',
    height: 176,
    weight: 83,
  },
  {
    firstName: 'Леонид',
    height: 160,
    weight: 82,
  },
  {
    firstName: 'Пётр',
    height: 184,
    weight: 70,
  },
  {
    firstName: 'Светлогор',
    height: 173,
    weight: 78,
  },
  {
    firstName: 'Григорий',
    height: 194,
    weight: 87,
  },
  {
    firstName: 'Илья',
    height: 189,
    weight: 96,
  },
  {
    firstName: 'Наталья',
    height: 174,
    weight: 72,
  },
  {
    firstName: 'Андрей',
    height: 176,
    weight: 69,
  },
  {
    firstName: 'Роза',
    height: 174,
    weight: 80,
  },
  {
    firstName: 'Людмила',
    height: 168,
    weight: 68,
  },
  {
    firstName: 'Евгений',
    height: 173,
    weight: 77,
  },
  {
    firstName: 'Александр',
    height: 175,
    weight: 87,
  },
  {
    firstName: 'Степан',
    height: 168,
    weight: 80,
  },
  {
    firstName: 'Екатерина',
    height: 182,
    weight: 86,
  },
  {
    firstName: 'Виолетта',
    height: 174,
    weight: 73,
  },
  {
    firstName: 'Руслан',
    height: 190,
    weight: 81,
  },
  {
    firstName: 'Сергей',
    height: 187,
    weight: 88,
  },
  {
    firstName: 'Елена',
    height: 168,
    weight: 62,
  },
  {
    firstName: 'Татьяна',
    height: 190,
    weight: 86,
  },
  {
    firstName: 'Тимур',
    height: 178,
    weight: 79,
  },
];
</script>

<template>
  <PersonsTable :tableData="personList" />
</template>
