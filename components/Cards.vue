<template>
  <div class="grid-container">
    <a :href="localePath(`/c/${list.handle}`)">
      <div class="item" :style="{ backgroundImage: `url(${list.image.src})` }">
        <span class="title">{{ list.title }}</span>
      </div></a
    >
  </div>
</template>
<script>
export default {
  props: ["list"],
};
</script>
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-gap: 10px;

  padding: 10px;
}

.grid-container > div {
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}

.item {
  width: 290px;
  height: 350px;
  vertical-align: middle;
  background-size: cover;
}
.discover {
  background-color: #f3f4f9;
}
h1 {
  text-align: center;
}
.title {
  color: #fff;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 18px;
  vertical-align: bottom;
  position: relative;
  top: 90%;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  text-rendering: optimizeSpeed;
}
</style>
