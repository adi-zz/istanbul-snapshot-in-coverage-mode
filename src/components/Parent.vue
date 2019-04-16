<template>
  <div>
    <h1>parent</h1>
    <Child :items="items"/>
  </div>
</template>

<script>
import Child from "./Child";

export default {
  name: "Parent",
  components: {
    Child
  },
  data() {
    return {
      items: [1, "string", () => true]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
