<template>
  <div>
    <h3>child</h3>
    <div>items from parent: {{items.map(i => typeof i)}}</div>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>
