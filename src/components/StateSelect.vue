<template>
  <div class="state-select">
    <div>
      <label id="select-state">search by state</label>
      <select
        v-model="selected"
        name="states"
        id="select-state"
        @change="$emit('selectState', selected)"
      >
        <option disabled value="">select your state</option>
        <option v-for="state in states" :value="state" v-bind:key="state.abbr">
          {{ state.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selected: {},
      states: [],
      gestational_limit: {},
      confirmSelected: "",
      isLoading: false,
    };
  },
  mounted() {
    this.getStates();
  },
  methods: {
    getStates() {
      axios.get("api/states").then((response) => {
        this.states = response.data;
      });
    },
  },
};
</script>

<style scoped></style>
