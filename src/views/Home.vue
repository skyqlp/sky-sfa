<template>
  <div class="home">
    <HomeTabbar></HomeTabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTabbar from "../components/Tabbar";

export default {
  name: "home",
  data() {
    return {
      TabbarList: [
        {
          icon: '',
          tabbarlabel:'首页'
        }
      ]
    }
  },
  components: {
    HomeTabbar
  }
};
</script>

<style lang="stylus" scoped>
.home {
  width: 100%;
  height: 100%;
  background: #ffffff;
}
</style>

