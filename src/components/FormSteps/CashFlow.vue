<script setup>
import multiForm from "../../composables/multiForm";

const { mainForm } = multiForm();
</script>

<template>
  <div class="card ">
    <div class="card-header">
      <h4 class="card-title">Cash Flow</h4>
    </div>
    <div class="card-body">
      <h1>Please list before tax monthly income from each source:</h1>
      <span class="text-danger">Please make sure to enter monthly income. NOT annual income.</span>

      <!-- Social Security -->
      <div class="row mb-4 mt-5">
        <div class="col-md-6 mb-3">
          <h2>Social Security</h2>
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Me</label>
          <input
            type="text"
            class="form-control"
            v-model="mainForm.social_scurity"
          />
        </div>
        <hr>
      </div>

      <!-- (Survivor Options) -->
      <div class="row mb-4">
        <div class="col-md-6 mb-3">
          <h2>(Survivor Options)</h2>
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Me</label>
          <input
            type="text"
            class="form-control"
            v-model="mainForm.survivor_options"
          />
        </div>
        <hr>
      </div>

      <!-- Pension -->
      <div class="row mb-4">
        <div class="col-md-6 mb-3">
          <h2>Pension</h2>
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Me</label>
          <input
            type="text"
            class="form-control"
            v-model="mainForm.pension"
          />
        </div>
        <hr>
      </div>

      <!-- Wages -->
      <div class="row mb-4">
        <div class="col-md-6 mb-3">
          <h2>Wages</h2>
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Me</label>
          <input
            type="text"
            class="form-control"
            v-model="mainForm.wages"
          />
        </div>
        <hr>
      </div>

      <!-- Other Income -->
      <div class="row mb-4">
        <div class="col-md-6 mb-3">
          <h2>Other Income</h2>
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Me</label>
          <input
            type="text"
            class="form-control"
            v-model="mainForm.other_income"
          />
        </div>
        <hr>
      </div>

      <!-- Retirement Plan Contributions -->
      <div class="row mb-4">
        <div class="col-md-6 mb-3">
          <h2>Retirement Plan Contributions</h2>
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Me</label>
          <input
            type="text"
            class="form-control"
            v-model="mainForm.retirement_plan_contributions"
          />
        </div>
        <hr>
      </div>

      <div class="row mb-4">
        <!-- Monthly Expense -->
        <div class="col-md-12 mb-5">
          <label class="form-label required">How much are your monthly expenses?</label>
          <input
            type="text"
            class="form-control"
            v-model="mainForm.monthly_expense"
          />
          <span>(e.g., mortgage, food, gas, car loan, insurance, utilities, gifts/donations, medical, taxes, etc.)</span>
        </div>

        <!-- Is your monthly recurring income sufficient and comfortable? -->
        <div class="col-12 mb-5">
          <label class="form-label">Is your monthly recurring income sufficient and comfortable?</label>
          <div>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="is_monthly_income_sufficient"
                value="yes"
                v-model="mainForm.is_monthly_income_sufficient"
              />
              <span class="form-check-label">Yes</span>
            </label>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="is_monthly_income_sufficient"
                value="no"
                v-model="mainForm.is_monthly_income_sufficient"
              />
              <span class="form-check-label">No</span>
            </label>
          </div>
        </div>


        <!-- Do you take additional withdrawals from your portfolio to supplement your monthly recurring income? -->
        <div class="col-12 mb-5">
          <label class="form-label">Do you take additional withdrawals from your portfolio to supplement your monthly recurring income?</label>
          <div>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="additional_withdraw_from_portfolio"
                value="yes"
                v-model="mainForm.additional_withdraw_from_portfolio"
              />
              <span class="form-check-label">Yes</span>
            </label>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="additional_withdraw_from_portfolio"
                value="no"
                v-model="mainForm.additional_withdraw_from_portfolio"
              />
              <span class="form-check-label">No</span>
            </label>
          </div>
        </div>

        <!-- If yes, how much -->
        <div class="col-12 mb-5" v-if="mainForm.additional_withdraw_from_portfolio == 'yes'">
          <label class="form-label">If yes, how much</label>
          <input
            type="text"
            class="form-control"
            name="additional_withdraw_amount"
            v-model="mainForm.additional_withdraw_amount"
          />
        </div>

        <!-- Do you have a tax strategy with your portfolio withdrawals? -->
        <div class="col-12 mb-5">
          <label class="form-label">Do you have a tax strategy with your portfolio withdrawals?</label>
          <div>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="tax_strategy_for_portfolio_withdraw"
                value="yes"
                v-model="mainForm.tax_strategy_for_portfolio_withdraw"
              />
              <span class="form-check-label">Yes</span>
            </label>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="tax_strategy_for_portfolio_withdraw"
                value="no"
                v-model="mainForm.tax_strategy_for_portfolio_withdraw"
              />
              <span class="form-check-label">No</span>
            </label>
          </div>
        </div>

        <!-- Do you foresee any large purchases within the next 3 years? -->
        <div class="col-12 mb-5">
          <label class="form-label">Do you foresee any large purchases within the next 3 years?</label>
          <div>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="foresee_any_large_purchase"
                value="yes"
                v-model="mainForm.foresee_any_large_purchase"
              />
              <span class="form-check-label">Yes</span>
            </label>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="foresee_any_large_purchase"
                value="no"
                v-model="mainForm.foresee_any_large_purchase"
              />
              <span class="form-check-label">No</span>
            </label>
          </div>
        </div>

        <!-- If yes, how much -->
        <div class="col-12 mb-5" v-if="mainForm.foresee_any_large_purchase == 'yes'">
          <label class="form-label">If yes, how much</label>
          <input
            type="text"
            class="form-control"
            name="large_purchase_amount"
            v-model="mainForm.large_purchase_amount"
          />
        </div>


        <!-- Do you contribute annually to charity? -->
        <div class="col-12 mb-5">
          <label class="form-label">Do you contribute annually to charity?</label>
          <div>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="annual_charity_contribution"
                value="yes"
                v-model="mainForm.annual_charity_contribution"
              />
              <span class="form-check-label">Yes</span>
            </label>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="annual_charity_contribution"
                value="no"
                v-model="mainForm.annual_charity_contribution"
              />
              <span class="form-check-label">No</span>
            </label>
          </div>
        </div>

        <!-- If yes, how much -->
        <div class="col-12 mb-5" v-if="mainForm.annual_charity_contribution == 'yes'">
          <label class="form-label">If yes, how much</label>
          <input
            type="text"
            class="form-control"
            name="annual_charity_contribution_amount"
            v-model="mainForm.annual_charity_contribution_amount"
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
