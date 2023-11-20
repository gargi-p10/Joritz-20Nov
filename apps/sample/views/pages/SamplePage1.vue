<template>
    <j-app :breadcrumbs="breadcrumbs">
    
      <!-- This is the first page -->
        
      First Page Loaded


    </j-app>
  </template>
  
  <script setup>
  import {ref} from 'vue';
  
  const breadcrumbs = ref([
      {
          label: 'sample',
          to: '/sample'
      }
  ]);
  </script>
  <style lang="scss">
  @import "../../assets/css/sample.scss";
  </style>
