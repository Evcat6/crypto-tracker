<template>
  <div class="crypto-list">{{name}}</div>
  <div class="pt-3.5">
    <div class="cryptos-price">${{value.USD}}</div>
    <div class="cryptos-price">€{{value.EUR}}</div>
    <div class="cryptos-price">£{{value.GBP}}</div>
  </div>
</template>

<script>
export default {
  props: ["value", "name"],
  data() {
    return {

    }
  }
}
</script>
