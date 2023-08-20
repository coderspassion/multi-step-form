<script setup>
import multiForm from "../../composables/multiForm";

const { mainForm } = multiForm();
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">ADD'l Information</h4>
    </div>
    <div class="card-body">
      <div class="row mb-4">
        <div class="col-12 mb-4">
          <label class="form-label"
            >If you are not already retired, when do you want to retire?</label
          >
          <input
            type="text"
            class="form-control"
            name="when_you_want_to_retire"
            v-model="mainForm.when_you_want_to_retire"
          />
        </div>

        <div class="col-12 mb-4">
          <label class="form-label"
            >What is your after-tax retirement income goal?</label
          >
          <input
            type="text"
            class="form-control"
            name="after_tax_retirement_income_goal"
            v-model="mainForm.after_tax_retirement_income_goal"
          />
        </div>

        <div class="col-12 mb-4">
          <label class="form-label"
            >How did you acquire your wealth?</label
          >
          <input
            type="text"
            class="form-control"
            name="how_did_you_acquire_your_wealth"
            v-model="mainForm.how_did_you_acquire_your_wealth"
          />
        </div>

        <div class="col-12 mb-4">
          <label class="form-label"
            >Who else do you rely on for financial advice and decisions?</label
          >
          <input
            type="text"
            class="form-control"
            name="who_is_your_financial_advisor"
            v-model="mainForm.who_is_your_financial_advisor"
          />
        </div>

        <div class="col-12 mb-4">
          <label class="form-label"
            >If something were to happen to you tomorrow, who do you want taken care of?</label
          >
          <input
            type="text"
            class="form-control"
            name="who_do_you_want_taken_care_of"
            v-model="mainForm.who_do_you_want_taken_care_of"
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
