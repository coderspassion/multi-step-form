<script setup>
import multiForm from "../../composables/multiForm";

const { mainForm } = multiForm();

const allConcerns = [
  "Losing money in the stock market",
  "Outliving my/our nest egg",
  "Paying too much in taxes",
  "Stock market uncertainty",
  "Being unable to afford retirement",
  "Leaving a legacy to children and/or grandchildren",
  "Not having a reliable income plan for retirement",
  "Financial effects of a catastrophic illness",
  "Other",
];
</script>
<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Concerns</h4>
    </div>
    <div class="card-body">
      <div class="row mb-4">
        <h3>Which of the following are your top three concerns?</h3>
        <div
          class="col-md-6 mb-3"
          v-for="(concern, index) in allConcerns"
          :key="index"
        >
          <label class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              :value="concern"
              v-model="mainForm.concerns"
            />
            <span class="form-check-label">{{ concern }}</span>
          </label>
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
