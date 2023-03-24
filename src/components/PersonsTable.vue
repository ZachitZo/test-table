<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

import createDebounce from '../helpers/debounce';
import { isBottomOfElement } from '../helpers/dom';

import Person from '../types/person';
import Fields from '../types/fields';

import TextFilter from './TextFilter.vue';

const props = defineProps<{ tableData: Array<Person> }>()

const debounce = createDebounce();

// Data
const persons = ref<Array<Person>>([]);

// Table
const scrollingTable = ref<HTMLTableElement | null>(null);

// Pagination
const page = ref<number>(1);
const chunkLength: number = 10;
const chunkStart = computed<number>(() => chunkLength * page.value);
const chunkEnd = computed<number>(() => chunkLength * page.value + chunkLength);

// Initialize data (first chunk)
persons.value = props.tableData.slice(0, chunkLength);

// Filters values
const filters = ref<{[key in Fields]: string}>({
  firstName: '',
  height: '',
  weight: '',
});

// Check filters for empty values
const isEmptyFilters = (): boolean => Object.values(filters.value).every(filterValue => !filterValue);

// Add data function
const addDataChunk = (): void => {
  const dataChunk: Array<Person> = props.tableData.slice(chunkStart.value, chunkEnd.value);

  if (dataChunk.length) {
    persons.value.push(...dataChunk);
    page.value++;
  }
};

// Infinite-scroll
const infiniteScroll = (): void => {
  const tableElement = scrollingTable.value;

  if (isBottomOfElement(tableElement) && isEmptyFilters()) {
    addDataChunk();
  }
}

// Create/remove event listeners for infinite-scroll
onMounted(() => {
  infiniteScroll();
  window.addEventListener('scroll', infiniteScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', infiniteScroll);
});

// Filters function
const filterPersons = (): void => {
  if (isEmptyFilters()) {
    persons.value = props.tableData.slice(0, chunkStart.value);
    return;
  }

  persons.value = props.tableData.filter(person => {
    const isInvalidName = filters.value.firstName && `${person.firstName}` !== filters.value.firstName;
    const isInvalidHeight = filters.value.height && `${person.height}` !== filters.value.height;
    const isInvalidWeight = filters.value.weight && `${person.weight}` !== filters.value.weight;

    return !isInvalidName && !isInvalidHeight && !isInvalidWeight;
  });
}
</script>

<template>
  <span class="info">Страниц загружено: {{page}}</span>
  <table class="table" ref="scrollingTable">
    <tr class="tableHeader">
      <th>
        <p>Имя</p>
        <TextFilter
          v-model="filters.firstName"
          @input="debounce(filterPersons)"
        />
      </th>
      <th>
        <p>Рост</p>
        <TextFilter
          v-model="filters.height"
          @input="debounce(filterPersons)"
        />
      </th>
      <th>
        <p>Вес</p>
        <TextFilter
          v-model="filters.weight"
          @input="debounce(filterPersons)"
        />
      </th>
    </tr>
    <tr v-for="(person, idx) in persons" :key="idx">
      <td v-text="person.firstName"></td>
      <td v-text="person.height"></td>
      <td v-text="person.weight"></td>
    </tr>
    <tr v-show="!persons.length" class="empty">
      Нет данных...
    </tr>
  </table>
</template>

<style lang="sass" scoped>
  .info
    margin: 25px auto
    position: sticky
    top: 25px
    left: 25px
    color: black

  .table
    width: 100%
    max-width: 800px
    margin: 50px auto
    border: 2px solid black

  .table
    th
      padding: 20px 10px
      font-size: 22px
      font-weight: 700
      color: black
      background: #ad8557
    td
      padding: 25px 10px
      background: #decf85
      font-size: 18px
      font-weight: 500
      color: #2e48a6
    tr > td:not(:first-child)
      text-align: center

  .empty
    display: flex
    padding: 20px
    font-style: italic
    color: #2e48a6

  .tableHeader
    position: sticky
    top: 0
</style>
