<template>
  <div class="app">
    <div>
      <AborstatHeader />
      <StateSelect @select-state="handleSubmit" />
      <DisplayGestationalLimits
        :is-loading="isLoading"
        :data="gestationalLimit"
        :selected-state="confirmSelected"
      />
      <AborstatFooter />
    </div>
  </div>
</template>

<script>
import AborstatHeader from "./components/AborstatHeader";
import StateSelect from "./components/StateSelect";
import DisplayGestationalLimits from "./components/DisplayGestationalLimits";
import AborstatFooter from "./components/AborstatFooter";
import axios from "axios";

export default {
  components: {
    AborstatHeader,
    StateSelect,
    DisplayGestationalLimits,
    AborstatFooter,
  },
  data() {
    return {
      selected: {},
      gestationalLimit: {},
      isLoading: false,
      confirmSelected: "",
    };
  },
  methods: {
    handleSubmit(event) {
      this.isLoading = true;
      this.selected = event;
      axios
        .post("/api/gestationalLimits", { state: event.abbr })
        .then((response) => {
          this.gestationalLimit = response.data[event.name];
          this.confirmSelected = this.selected.name;
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
.app {
  margin: 40px auto;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: #35495e;
}
</style>
