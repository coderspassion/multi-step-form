<script setup>
import multiForm from "../../composables/multiForm";

const { mainForm } = multiForm();

const totalRisks = [
  {
    label:"Please pick the top two for your retirement “nest egg” money.",
    options:['Income', 'Preservation','Liquidity', 'Growth'],
    modelValue:mainForm.retirement_money
  },

  {
    label:"Risk Tolerance?",
    options:['Conservative', 'Moderate','Aggressive'],
    modelValue:mainForm.risk_tolerance
  },
  {
    label:"How would you describe your investment knowledge?",
    options:['None', 'Limited','Average', 'Good'],
    modelValue:mainForm.invesment_knowledge
  },
  {
    label:"How would you describe your spouse’s investment knowledge?",
    options:['None', 'Limited','Average', 'Good'],
    modelValue:mainForm.spouse_invesment_knowledge
  },

]
</script>

<template>
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">Risk / Goals</h4>
      </div>
      <div class="card-body">

        <div class="row">
          <div class="col-12 mb-3" v-for="risk in totalRisks" :key="risk">
            <label class="form-label">{{ risk.label }}</label>
            <label class="form-check form-check-inline" v-for="option in risk.options">
              <input class="form-check-input" type="checkbox" :value="option" v-model="risk.modelValue">
              <span class="form-check-label">{{ option }}</span>
            </label>
          </div>
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