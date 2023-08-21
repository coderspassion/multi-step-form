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

    <div class="container-xl mt-5">
        <hr class="my-5">
        <h4 class="text-center text-secondary my-5">
          We collect nonpublic personal information about you that is either provided by you or obtained by us with your authorization.&nbsp;The firm does not disclose non‐public personal information about our customers to anyone, except in limited circumstances stated in our&nbsp;<a class="text-primary" href="https://oakharvestfg.com/wp-content/uploads/2023/03/Privacy-Policy-Statement-3.28.23.pdf" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </h4>
      </div>
  </div>
</template>
