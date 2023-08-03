<template>
  <div>
    <h1>HomePage</h1>
    <!--  导航栏-->
    <NavigationBar/>
  </div>
</template>

<script>
import navigation_bar from "@/components/navigation_bar";

export default {
  name: 'HomePage',
  components: {
    NavigationBar:navigation_bar
  }
}
</script>

<style scoped>
a {
  margin: 5px;
}
</style>
