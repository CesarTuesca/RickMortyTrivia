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
  background-color: transparent;
  border: none;
  font-size: 24px; 
  cursor: pointer;
  color: #555; 
  margin: 10px; 
}

.back-arrow:hover {
  color: #000; 
}
</style>
