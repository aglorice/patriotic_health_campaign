<template>
<div>
  <h1>HomePage</h1>
  <navigation_bar></navigation_bar>
</div>
</template>

<script>
import navigation_bar from "@/components/navigation_bar";

export default {
	name: 'HomePage',
  components: {navigation_bar}
}
</script>

<style scoped>
a {
	margin: 5px;
}
</style>
