<script setup>
import { ref } from "vue";

const totalSteps = ref(12);
const current_step = ref(6);

const changeStep = (step) => {
  if (step <= current_step.value) {
    current_step.value = step;
  }
};

const nextStep = () => {
  current_step.value++;
};

const prevStep = () => {
  current_step.value--;
};
</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="steps p-5">
        <a
          v-for="step in totalSteps"
          :key="step"
          class="step-item"
          :class="{ active: current_step === step }"
          data-bs-toggle="tooltip"
          :title="'Step ' + step + ' description'"
          @click="changeStep(step)"
        >
          Step {{ step }}
        </a>
      </div>
    </div>
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Financial Questionnaire</h4>
        </div>

        <div class="card-body">
          <div
            v-for="step in totalSteps"
            :class="{ 'd-none': current_step != step }"
          >
            Step {{ step }} Questions.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
