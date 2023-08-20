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
      <div class="row mb-4">
        <h3>
          Assets: Please check off the accounts you currently hold. Note the
          approximate value and bring in the latest statement.
        </h3>
        <div
          class="col-md-6 mb-3"
          v-for="(asset, index) in allAssets"
          :key="index"
        >
          <label class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              :value="asset"
              v-model="mainForm.assets"
            />
            <span class="form-check-label">{{ asset }}</span>
          </label>
        </div>
      </div>

      <h2>Property</h2>
      <hr class="mt-0" />
      <!-- Home Value -->
      <div class="row mb-4">
        <div class="col-md-3">
          <label class="form-label">Home Value</label>
          <input
            type="text"
            class="form-control"
            name="home_value"
            v-model="mainForm.home_value"
          />
        </div>

        <div class="col-md-3">
          <label class="form-label">Balance Owed</label>
          <input
            type="text"
            class="form-control"
            name="home_balance_owed"
            v-model="mainForm.home_balance_owed"
          />
        </div>

        <div class="col-md-3">
          <label class="form-label">Payment</label>
          <input
            type="text"
            class="form-control"
            name="home_payment"
            v-model="mainForm.home_payment"
          />
        </div>

        <div class="col-md-3">
          <label class="form-label">Pay off Date</label>
          <input
            type="date"
            class="form-control"
            name="home_payoff_date"
            v-model="mainForm.home_payoff_date"
          />
        </div>
      </div>

      <!-- Autos / Personal  Properties -->
      <div class="row mb-4 align-items-end">
        <div class="col-md-3">
          <label class="form-label">Autos and Personal Property</label>
          <input
            type="text"
            class="form-control"
            name="autos"
            v-model="mainForm.autos"
          />
        </div>

        <div class="col-md-3">
          <label class="form-label">Balance Owed</label>
          <input
            type="text"
            class="form-control"
            name="autos_balance_owed"
            v-model="mainForm.autos_balance_owed"
          />
        </div>

        <div class="col-md-3">
          <label class="form-label">Payment</label>
          <input
            type="text"
            class="form-control"
            name="autos_payment"
            v-model="mainForm.autos_payment"
          />
        </div>

        <div class="col-md-3">
          <label class="form-label">Pay off Date</label>
          <input
            type="date"
            class="form-control"
            name="autos_payoff_date"
            v-model="mainForm.autos_payoff_date"
          />
        </div>
      </div>

      <!-- Rental/Add’l Properties -->
      <div class="row mb-4">
        <div class="col-md-3">
          <label class="form-label">Rental/Add'l Properties</label>
          <input
            type="text"
            class="form-control"
            name="rental_properties"
            v-model="mainForm.rental_properties"
          />
        </div>

        <div class="col-md-3">
          <label class="form-label">Balance Owed</label>
          <input
            type="text"
            class="form-control"
            name="rental_balance_owed"
            v-model="mainForm.rental_balance_owed"
          />
        </div>

        <div class="col-md-3">
          <label class="form-label">Payment</label>
          <input
            type="text"
            class="form-control"
            name="rental_payment"
            v-model="mainForm.rental_payment"
          />
        </div>

        <div class="col-md-3">
          <label class="form-label">Pay off Date</label>
          <input
            type="date"
            class="form-control"
            name="rental_payoff_date"
            v-model="mainForm.rental_payoff_date"
          />
        </div>

        <div class="col-12 mt-4">
          <label class="form-label">Total Approximate Net Worth</label>
          <input
            type="text"
            class="form-control"
            name="total_net_worth"
            v-model="mainForm.total_net_worth"
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
