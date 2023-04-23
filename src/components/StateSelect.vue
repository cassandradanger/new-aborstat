<template>
  <div class="state-select">
    <div>
      <label id="search-states">search by state</label>
      <select
        v-model="selected"
        name="states"
        id="search-states"
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

<style lang="scss" scoped>
.state-select {
  margin-bottom: -30px;
  #search-states {
    font-size: 14pt;
    font-weight: 300;
    margin: 0 5px 20px 0;
    line-height: 25px;
    max-width: 400px;
  }
}
</style>
