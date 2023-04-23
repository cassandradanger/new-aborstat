<template>
  <div class="aborstat-footer">
    <h6>
      abortion status - data provided by
      <a target="_blank" href="http://www.abortionpolicyapi.com"
        >Abortion Policy API</a
      >, which should be consistent with the data from the
      <a href=" https://www.guttmacher.org/state-policy/laws-policies"
        >Guttmacher Institute</a
      >
    </h6>
    <h6>
      logo provided by
      <a target="_blank" href="https://www.hajny.com">Chris Hajny</a>
    </h6>
  </div>
</template>
<style lang="scss" scoped>
.aborstat-footer {
  // margin: 0 auto;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #d9b7d9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  h6 {
    width: 90%;
    margin: 8px;
  }
}
</style>
