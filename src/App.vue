<script setup>
import StepForm from "./pages/StepForm.vue";
import TabForm from "./pages/TabForm.vue";
</script>

<template>
  <div class="page" >
    <header class="navbar navbar-expand-md d-print-none sticky-top">
      <div class="container-xl">
        <h1
          class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3"
        >
          <a href=".">
            <img
              src="../src/assets/logo.webp"
              width="220"
              height="52"
              alt="Oak-Harvest-logo"
            />
          </a>
        </h1>
      </div>
    </header>
    <div class="page-wrapper">
      <TabForm />
      <!-- <StepForm/> -->
    </div>
  </div>
</template>
