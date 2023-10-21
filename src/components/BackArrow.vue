<template>
    <button @click="handleBackClick" class="back-arrow">←</button>
  </template>
<script>
export default {
  methods: {
    handleBackClick() {
      const userConfirmed = confirm("Are you sure you want to exit the game? You will lose all progress if you do so!");
      if (userConfirmed) {
        this.$router.push("/profile"); 
      }
    }
  }
};
</script>

<style scoped>
.back-arrow {
  background: url('@/assets/arrow.svg') no-repeat center center;
  background-size: contain;
  color: transparent;
  width: 93px;
  height: 53px;
  border: none;
  cursor: pointer;
  margin: 10px; 

}

.back-arrow:hover {
  background: url('@/assets/arrowshadow.svg') no-repeat center center;
  color: transparent; 
  width: 105px;
  height: 59px;
  border: none;
  
}
</style>
