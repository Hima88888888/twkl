<template>
  <div class="container launcher">
    <div class="row srow">
      <div class="col s6 scol">
        <span>
      <router-link class="link" to="/adham">Adham</router-link>
    </span>
      </div>
      <div class="col s6 scol">
        <span>
      <router-link class="link" to="/omar">Omar</router-link>
    </span>
      </div>
    </div>
    <div class="row srow">
      <div class="col s6 scol">
        <span>
      <router-link class="link" to="/sarah">Sarah</router-link>
    </span>
      </div>
      <div class="col s6 scol">
        <span>
      <router-link class="link" to="/ashry">Ashry</router-link>
    </span>
      </div>
    </div>
    <div class="row srow">
      <div class="col s6 scol">
        <span>
      <router-link class="link" to="/uncle">Uncle</router-link>
    </span>
      </div>
      <div class="col s6 scol">
        <span>
      <router-link class="link" to="/maya">Maya</router-link>
    </span>
      </div>
    </div>
    <div class="row srow">
      <div class="col s6 scol">
        <span>
      <router-link class="link" to="/youssef">Youssef</router-link>
    </span>
      </div>
      <div class="col s6 scol">
        <span>
     
    </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Home',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.launcher {
  background-image: none;
  background-color: #fff;
  height: 100vh;
  width: 100%;
  justify-content: center;
  background-color: #0f1217;
}

.link {
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  color: #2aa499;
}

.srow {
  width: 100%;
  margin-bottom: 20px;
      justify-content: center;
    align-items: center;
}
.scol {
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  span {
    text-align: center;
    background-color: #2d3035;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 10px;
  }
}


.container {
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.hidden{
  display: none;
}
.p-hidden{
  display: none;
}
.block{
  display: block;
}
.col .row {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  padding : 1rem;
}
.right-align {
  text-align: right;
}

.center, .center-align {
  text-align: center;
}

.left {
  float: left !important;
}

.right {
  float: right !important;
}

.row {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
.row .col {
  float: left;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0 0.75rem;
  min-height: 1px;
}

.row .col[class*="push-"], .row .col[class*="pull-"] {
  position: relative;
}

.row .col.s1 {
  width: 8.3333333333%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.s2 {
  width: 16.6666666667%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.s3 {
  width: 25%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.s4 {
  width: 33.3333333333%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.s5 {
  width: 41.6666666667%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.s6 {
  width: 50%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.s7 {
  width: 58.3333333333%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.s8 {
  width: 66.6666666667%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.s9 {
  width: 75%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.s10 {
  width: 83.3333333333%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.s11 {
  width: 91.6666666667%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.s12 {
  width: 100%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.offset-s1 {
  margin-left: 8.3333333333%;
}

.row .col.pull-s1 {
  right: 8.3333333333%;
}

.row .col.push-s1 {
  left: 8.3333333333%;
}

.row .col.offset-s2 {
  margin-left: 16.6666666667%;
}

.row .col.pull-s2 {
  right: 16.6666666667%;
}

.row .col.push-s2 {
  left: 16.6666666667%;
}

.row .col.offset-s3 {
  margin-left: 25%;
}

.row .col.pull-s3 {
  right: 25%;
}

.row .col.push-s3 {
  left: 25%;
}

.row .col.offset-s4 {
  margin-left: 33.3333333333%;
}

.row .col.pull-s4 {
  right: 33.3333333333%;
}

.row .col.push-s4 {
  left: 33.3333333333%;
}

.row .col.offset-s5 {
  margin-left: 41.6666666667%;
}

.row .col.pull-s5 {
  right: 41.6666666667%;
}

.row .col.push-s5 {
  left: 41.6666666667%;
}

.row .col.offset-s6 {
  margin-left: 50%;
}

.row .col.pull-s6 {
  right: 50%;
}

.row .col.push-s6 {
  left: 50%;
}

.row .col.offset-s7 {
  margin-left: 58.3333333333%;
}

.row .col.pull-s7 {
  right: 58.3333333333%;
}

.row .col.push-s7 {
  left: 58.3333333333%;
}

.row .col.offset-s8 {
  margin-left: 66.6666666667%;
}

.row .col.pull-s8 {
  right: 66.6666666667%;
}

.row .col.push-s8 {
  left: 66.6666666667%;
}

.row .col.offset-s9 {
  margin-left: 75%;
}

.row .col.pull-s9 {
  right: 75%;
}

.row .col.push-s9 {
  left: 75%;
}

.row .col.offset-s10 {
  margin-left: 83.3333333333%;
}

.row .col.pull-s10 {
  right: 83.3333333333%;
}

.row .col.push-s10 {
  left: 83.3333333333%;
}

.row .col.offset-s11 {
  margin-left: 91.6666666667%;
}

.row .col.pull-s11 {
  right: 91.6666666667%;
}

.row .col.push-s11 {
  left: 91.6666666667%;
}

.row .col.offset-s12 {
  margin-left: 100%;
}

.row .col.pull-s12 {
  right: 100%;
}

.row .col.push-s12 {
  left: 100%;
}
</style>