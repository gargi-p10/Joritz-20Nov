<template>
    <j-app :breadcrumbs="breadcrumbs">
    
      <!-- This is the second page -->
        
      Second Page Loaded


    </j-app>
  </template>
  
  <script setup>
  import {ref} from 'vue';
  
  const breadcrumbs = ref([
      {
          label: 'sample',
          to: '/sample'
      },
      {
            label: 'page2',
            to: '/sample/page2'
      }
  ]);
  </script>
  <style lang="scss">
  @import "../../assets/css/sample.scss";
  </style>
