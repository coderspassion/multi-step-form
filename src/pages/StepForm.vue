<script setup>
import { ref } from "vue";
import ContactInformation from "../components/FormSteps/ContactInformation.vue";
import Family from "../components/FormSteps/Family.vue";
import LegalItems from "../components/FormSteps/LegalItems.vue";
import AdditionalItems from "../components/FormSteps/AdditionalItems.vue";
import CashFlow from "../components/FormSteps/CashFlow.vue";
import LifeEvents from "../components/FormSteps/LifeEvents.vue";
import Assets from "../components/FormSteps/Assets.vue";
import AdditionalInformation from "../components/FormSteps/AdditionalInformation.vue";
import Concerns from "../components/FormSteps/Concerns.vue";
import Objectives from "../components/FormSteps/Objectives.vue";
import RiskOrGoals from "../components/FormSteps/RiskOrGoals.vue";

const totalSteps = ref([
  {
    title: "CONTACT INFORMATION",
    component: ContactInformation,
  },

  {
    title: "FAMILY",
    component: Family,
  },

  {
    title: "LEGAL ITEMS",
    component: LegalItems,
  },

  {
    title: "ADD'l ITEMS",
    component: AdditionalItems,
  },

  {
    title: "CASH FLOW",
    component: CashFlow,
  },

  {
    title: "LIFE EVENTS",
    component: LifeEvents,
  },

  {
    title: "ASSETS",
    component: Assets,
  },

  {
    title: "ADD'L INFORMATION",
    component: AdditionalInformation,
  },

  {
    title: "CONCERNS",
    component: Concerns,
  },

  {
    title: "OBJECTIVES",
    component: Objectives,
  },

  {
    title: "RISK/GOALS",
    component: RiskOrGoals,
  },
]);

const isNext = ref(false);
const current_step = ref(1);

const changeStep = (step) => {
  if (step <= current_step.value) {
    current_step.value = step;
  }
};

const changeNext = () => {
  isNext.value = !isNext.value;
  window.scrollTo(0, 0);
};
const nextStep = () => {
  current_step.value++;
  window.scrollTo(0, 0);
};

const prevStep = () => {
  current_step.value--;
  window.scrollTo(0, 0);
};
</script>

<template>
  <div class="page-header d-print-none" v-if="isNext">
    <div class="container-xl">
      <div class="row g-2 align-items-center">
        <div class="col">
          <h2 class="page-title">Financial Questionnaire</h2>
        </div>
      </div>
    </div>
  </div>
  <div class="page-body">
    <div class="container-xl">
      <div class="row">
        <h4 class="card-title">Financial Questionnaire</h4>
        <div class="col-12">
          <div class="steps p-5">
            <a
              v-for="(step, index) in totalSteps"
              :key="index"
              class="step-item"
              :class="{ active: current_step === index + 1 }"
              data-bs-toggle="tooltip"
              :title="'Step ' + step + ' description'"
              @click="changeStep(index+1)"
            >
              Step {{ index + 1 }}
            </a>
          </div>
        </div>
        <div class="col-12">
         
          <div
                v-for="(step, index) in totalSteps"
                :class="{ 'd-none': current_step != index + 1 }"
              >
                <component
                  :is="step.component"
                  @nextStep="nextStep()"
                  @prevStep="prevStep()"
                  @back="changeNext"
                ></component>
              </div>
        </div>
      </div>
    </div>
  </div>
</template>
