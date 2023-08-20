<script setup>
import multiForm from "../../composables/multiForm";

const { mainForm } = multiForm();
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">ADD'l Items</h4>
    </div>
    <div class="card-body">
      <h1 class="mb-5">Which of the following documents do you have?</h1>

      <div class="row mb-4">
        <!-- Umbrella Policy -->
        <div class="col-12 mb-3">
          <label class="form-label">Umbrella Policy</label>
          <div>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="umbrella_policy"
                value="yes"
                v-model="mainForm.umbrella_policy"
              />
              <span class="form-check-label">Yes</span>
            </label>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="umbrella_policy"
                value="no"
                v-model="mainForm.umbrella_policy"
              />
              <span class="form-check-label">No</span>
            </label>
          </div>
        </div>

        <!-- Long-Term Care Insurance -->
        <div class="col-12 mb-3">
          <label class="form-label">Long-Term Care Insurance</label>
          <div>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="long_term_care_insurance"
                value="yes"
                v-model="mainForm.long_term_care_insurance"
              />
              <span class="form-check-label">Yes</span>
            </label>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="long_term_care_insurance"
                value="no"
                v-model="mainForm.long_term_care_insurance"
              />
              <span class="form-check-label">No</span>
            </label>
          </div>
        </div>

        <!-- Life Insurance -->
        <div class="col-12 mb-3">
          <label class="form-label">Life Insurance</label>
          <div>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="life_insurance"
                value="yes"
                v-model="mainForm.life_insurance"
              />
              <span class="form-check-label">Yes</span>
            </label>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="life_insurance"
                value="no"
                v-model="mainForm.life_insurance"
              />
              <span class="form-check-label">No</span>
            </label>
          </div>
        </div>

        <!-- Death Benefit -->
        <div class="col-12 mb-3">
          <label class="form-label">Death Benefit</label>
          <input
            type="text"
            class="form-control"
            v-model="mainForm.death_benefit"
          />
        </div>
        <!-- Cash Value -->
        <div class="col-12 mb-3">
          <label class="form-label">Cash Value</label>
          <input
            type="text"
            class="form-control"
            v-model="mainForm.cash_value"
          />
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
