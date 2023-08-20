<script setup>
import multiForm from "../../composables/multiForm";

const { mainForm } = multiForm();

const allAssets = [
  "Bank / Credit Union Accounts",
  "IRAs",
  "Brokerage Accounts",
  "Roth IRAs",
  "Annuities",
  "401k/ 403b",
  "Business Interests",
  "Employer Stock Plans",
];
</script>

<template>
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">Assets</h4>
      </div>
      <div class="card-body">
        <div class="row">
          <h3>Assets: Please check off the accounts you currently hold. Note the approximate value and bring in the latest statement.</h3>
        </div>
      </div>
      <div class="card-footer">
      <div class="d-flex justify-content-end gap-1">
        <button class="btn btn-secondary" @click="$emit('prevStep')">Previous</button>
        <button class="btn btn-primary" @click="$emit('nextStep')">Next</button>
      </div>
      
    </div>
    </div>
  </template>