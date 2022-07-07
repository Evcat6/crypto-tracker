<template>
  <div>
    <simple-icons-bitcoinsv v-if="index === 0"/>
    <fa-brands-ethereum v-if="index === 1"/>
    <simple-icons-dash v-if="index === 2"/>
    <simple-icons-tether v-if="index === 3"/>
    <cryptocurrency-xrp v-if="index === 4"/>
    <cryptocurrency-usdc v-if="index === 5"/>
    <simple-icons-dogecoin v-if="index === 6"/>
    <logos-cardano-icon v-if="index === 7"/>
  </div>
</template>

<script>
export default {
  props: ["index"],
  data() {
    return {

    }
  }

}
</script>