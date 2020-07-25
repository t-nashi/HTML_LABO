<template>
  <div id="navMenu">
    <menu>
      <ul class="menu">
        <li v-on:click="toggleMenu($event)"><a href="#">menu1</a></li>
        <li v-on:click="toggleMenu($event)"><a href="#">menu2</a></li>
        <li v-on:click="toggleMenu($event)"><a href="#">menu3</a></li>
        <li v-on:click="toggleMenu($event)"><a href="#">menu4</a></li>

        <!-- // 構文と省略記法 -->
        <!-- <li v-on:click="toggleMenu($event)"><a href="#">menu1</a></li> -->
        <!-- <li @click="toggleMenu($event)"><a href="#">menu1</a></li> -->
      </ul>
    </menu>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      // 使用するデータ
    }
  }
}
</script>
