<script setup>
import multiForm from "../../composables/multiForm";

const { mainForm } = multiForm();

const allLifeEvents = [
  "Buy a Home",
  "Care for a parent",
  "Help fund education costs for a family member",
  "Sell a home",
  "Start/Expand a business",
  "Sell a property",
  "Improve a home",
  "Pay off debt",
  "Receive an inheritance",
  "Retire",
  "Start a part-time job",
  "Purchase a property",
  "Other",
];
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Life Events</h4>
    </div>
    <div class="card-body">
      <h1>In the near future, I expect to: (Please check all that apply)</h1>
      <div class="row mb-4 mt-5">
        <div
          class="col-md-4 mb-3"
          v-for="(event, index) in allLifeEvents"
          :key="index"
        >
          <label class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              :value="event"
              v-model="mainForm.life_events"
            />
            <span class="form-check-label">{{ event }}</span>
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
