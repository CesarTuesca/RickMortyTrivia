<template>
    <button @click="handleSubmit">Submit</button>
  </template>
  
  <script>
  export default {
    props: {
      correctAnswer: {
        type: String,
        required: true
      },
      selectedAnswer: {
        type: String,
        required: true
      }
    },
    methods: {
      handleSubmit() {
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  