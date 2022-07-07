<template id="app">
    <div class="main-div font-ubuntu">
       <div class="main-containers" v-for="(value ,key ,index) in info" :key="index">
         <icons-list v-bind:index="index"/>
         <cryptos-list v-bind:value="value" v-bind:name="key"/>
       </div>
     </div>
</template>

<script>
import iconsList from "@/components/iconsList";
import cryptosList from "@/components/cryptosList";
import axios from "axios";
export default {
  components: {iconsList, cryptosList},
  data() {
    return {
      info: null,
      loading: true,
      query: "",
    }
  },
  mounted() {
    axios
        .get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DASH,USDT,XRP,USDC,DOGE,XRP,ADA&tsyms=USD,EUR,GBP')
        .then(response => (this.info = response.data))
        .catch(error => console.log(error))
        .finally(() => this.loading = false)
  },
}
</script>
