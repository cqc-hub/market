<template>
    <div>
      <div class="icon-selector" :class="{'selector-active': checked}" @click="selectItem">
        <img src="~/assets/img/cart/tick.svg" alt="">
      </div>
    </div>
</template>

<script>
	export default {
		name: "CartCheckButton",
    props: {
		  value: {
		    type: Boolean,
        default: false
      }
    },
    data() {
		  return {
		    checked: this.value
      }
    },
    methods: {
      selectItem: function () {
        this.$emit('checkBtnClick')
      }
    },
    watch: {
		  value: function (newValue) {
        this.checked = newValue;

      }
    }
	}
</script>

<style scoped>
  .icon-selector {
    position: relative;
    margin: 0;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
		text-align: center;
  }
	.icon-selector img{
		position: relative;
		top: 3px;
	}
  .selector-active {
    background-color: #f82553;
    border-color: #efefef;
  }
</style>
