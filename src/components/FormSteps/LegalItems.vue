<script setup>
import multiForm from "../../composables/multiForm";

const { mainForm } = multiForm();
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Legal Items</h4>
    </div>
    <div class="card-body">
      <h1 class="mb-5">Which of the following documents do you have?</h1>

      <!-- will -->
      <div class="row mb-4">
        <div class="col-md-6 mb-3">
          <label class="form-label">Will</label>
          <div>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="will"
                value="yes"
                v-model="mainForm.will"
              />
              <span class="form-check-label">Yes</span>
            </label>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="will"
                value="no"
                v-model="mainForm.will"
              />
              <span class="form-check-label">No</span>
            </label>
          </div>
        </div>

        <div class="col-md-6 mb-3" v-if="mainForm.will == 'yes'">
          <label class="form-label">Date Last Updated (Will)</label>
          <input
            type="date"
            class="form-control"
            v-model="mainForm.will_last_updated"
          />
        </div>
      </div>

      <!-- Power of attorny (POA) Assets -->
      <div class="row mb-4">
        <div class="col-md-6 mb-3">
          <label class="form-label">Power of Attorney (POA) Assets</label>
          <div>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="poa_asstes"
                value="yes"
                v-model="mainForm.poa_asstes"
              />
              <span class="form-check-label">Yes</span>
            </label>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="poa_asstes"
                value="no"
                v-model="mainForm.poa_asstes"
              />
              <span class="form-check-label">No</span>
            </label>
          </div>
        </div>

        <div class="col-md-6 mb-3" v-if="mainForm.poa_asstes == 'yes'">
          <label class="form-label">Date Last Updated (POA Assets)</label>
          <input
            type="date"
            class="form-control"
            v-model="mainForm.poa_asstes_last_updated"
          />
        </div>
      </div>

      <!-- Power of Attorney(POA) Health -->
      <div class="row mb-4">
        <div class="col-md-6 mb-3">
          <label class="form-label">Power of Attorney (POA) Health</label>
          <div>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="poa_health"
                value="yes"
                v-model="mainForm.poa_health"
              />
              <span class="form-check-label">Yes</span>
            </label>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="poa_health"
                value="no"
                v-model="mainForm.poa_health"
              />
              <span class="form-check-label">No</span>
            </label>
          </div>
        </div>

        <div class="col-md-6 mb-3" v-if="mainForm.poa_health == 'yes'">
          <label class="form-label">Date Last Updated (POA Health)</label>
          <input
            type="date"
            class="form-control"
            v-model="mainForm.poa_health_last_updated"
          />
        </div>
      </div>

      <!-- Living Will -->
      <div class="row mb-">
        <div class="col-md-6 mb-3">
          <label class="form-label">Living Will</label>
          <div>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="living_will"
                value="yes"
                v-model="mainForm.living_will"
              />
              <span class="form-check-label">Yes</span>
            </label>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="living_will"
                value="no"
                v-model="mainForm.living_will"
              />
              <span class="form-check-label">No</span>
            </label>
          </div>
        </div>

        <div class="col-md-6 mb-3" v-if="mainForm.living_will == 'yes'">
          <label class="form-label">Date Last Updated (Living Will)</label>
          <input
            type="date"
            class="form-control"
            v-model="mainForm.living_will_last_updated"
          />
        </div>
      </div>

      <!-- Living Trust -->
      <div class="row mb-4">
        <div class="col-md-6 mb-3">
          <label class="form-label">Living Trust</label>
          <div>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="living_trust"
                value="yes"
                v-model="mainForm.living_trust"
              />
              <span class="form-check-label">Yes</span>
            </label>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="living_trust"
                value="no"
                v-model="mainForm.living_trust"
              />
              <span class="form-check-label">No</span>
            </label>
          </div>
        </div>

        <div class="col-md-6 mb-3" v-if="mainForm.living_trust == 'yes'">
          <label class="form-label">Date Last Updated (Living Trust)</label>
          <input
            type="date"
            class="form-control"
            v-model="mainForm.living_trust_last_updated"
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
