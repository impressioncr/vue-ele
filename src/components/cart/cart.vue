<template>
  <div class="cart">
  <!-- vue2.0 动画过渡 使用css 自定义类名过渡  使用animation.css-->
    <transition
      name="move"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOut">
      <div class="cart-decr" v-show="food.count>0" @click.stop.prevent="removeCart">
        <span class="icon-remove_circle_outline"></span>
      </div>
    </transition>
    <transition
      name="move"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOut">
      <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    </transition>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script>
  import Vue from 'vue'
  
  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart(event) {
        if (!event._constructed) {
          return;
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
        this.$emit('add', event.target);
      },
      removeCart(event) {
        if (!event._constructed) {
          return;
        }
        if (this.food.count) {
          this.food.count--;
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cart
    font-size: 0
    .cart-decr, .cart-add
      display: inline-block
      padding: 6px
      font-size: 24px
      line-height: 24px
      color: rgb(0,160,220)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      text-align: center
      line-height: 24px
      font-size: 10px
      color: rgb(147,153,159)
</style>