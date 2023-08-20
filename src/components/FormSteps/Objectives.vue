<script setup>
import multiForm from "../../composables/multiForm";

const { mainForm } = multiForm();
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Objectives</h4>
    </div>
    <div class="card-body">
      <div class="row mb-4">
        <h3>Which of the following are your top three concerns?</h3>

        <div class="col-md-4 mb-3">
          <label class="form-label">Income Now</label>
          <select class="form-select" v-model="mainForm.income_now">
            <option :value="option" :key="option" v-for="option in 10">{{ option }}</option>
          </select>
        </div>

        <div class="col-md-4 mb-3">
          <label class="form-label">Guarantees Provided</label>
          <select class="form-select" v-model="mainForm.guarantees_provided">
            <option :value="option" :key="option" v-for="option in 10">{{ option }}</option>
          </select>
        </div>

        <div class="col-md-4 mb-3">
          <label class="form-label">Pass to Beneficiaries</label>
          <select class="form-select" v-model="mainForm.pass_to_beneficiaries">
            <option :value="option" :key="option" v-for="option in 10">{{ option }}</option>
          </select>
        </div>

        <div class="col-md-4 mb-3">
          <label class="form-label">Preserve Principal</label>
          <select class="form-select" v-model="mainForm.preserve_principal">
            <option :value="option" :key="option" v-for="option in 10">{{ option }}</option>
          </select>
        </div>

        <div class="col-md-4 mb-3">
          <label class="form-label">Income Later</label>
          <select class="form-select" v-model="mainForm.income_later">
            <option :value="option" :key="option" v-for="option in 10">{{ option }}</option>
          </select>
        </div>

        <div class="col-md-4 mb-3">
          <label class="form-label">Create a Tax Strategy</label>
          <select class="form-select" v-model="mainForm.create_a_tax_strategy">
            <option :value="option" :key="option" v-for="option in 10">{{ option }}</option>
          </select>
        </div>

        <div class="col-md-4 mb-3">
          <label class="form-label">Growth Potential</label>
          <select class="form-select" v-model="mainForm.growth_potential">
            <option :value="option" :key="option" v-for="option in 10">{{ option }}</option>
          </select>
        </div>

        <div class="col-md-4 mb-3">
          <label class="form-label">Reduce Risk</label>
          <select class="form-select" v-model="mainForm.reduce_risk">
            <option :value="option" :key="option" v-for="option in 10">{{ option }}</option>
          </select>
        </div>

        <div class="col-md-4 mb-3">
          <label class="form-label">Other</label>
          <label class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="mainForm.other"
            />
            <span class="form-check-label">Please check if other</span>
          </label>
        </div>

        <div class="col-md-12 mb-3" v-if="mainForm.other == true">
          <label class="form-label">If other, please specify</label>
          <input type="text" class="form-control">
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="d-flex justify-content-end gap-1">
        <button class="btn btn-secondary" @click="$emit('prevStep')">
          Previous
        </button>
        <button class="btn btn-primary" @click="$emit('nextStep')">Next</button>
      </div>
    </div>
  </div>
</template>
