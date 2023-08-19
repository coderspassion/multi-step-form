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

const changeNext = () => {
    isNext.value = !isNext.value;
    window.scrollTo(0, 0);
}
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
        <div class="col-12">
          <div v-if="isNext">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div
                    class="nav flex-column nav-pills col-md-3"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      v-for="(step, index) in totalSteps"
                      class="nav-link"
                      :class="{ active: current_step == index + 1 }"
                      :id="'step-' + +(index + 1) + '-tab'"
                      data-bs-toggle="pill"
                      :data-bs-target="'#step-' + +(index + 1)"
                      type="button"
                      role="tab"
                      :aria-controls="'step-' + +(index + 1)"
                      :aria-selected="[
                        current_step == index + 1 ? true : false,
                      ]"
                      @click="current_step = index + 1"
                    >
                      {{ step.title }}
                    </button>
                  </div>
                  <div class="tab-content col-md-9" id="v-pills-tabContent">
                    <div
                      v-for="(step, index) in totalSteps"
                      class="tab-pane fade"
                      :class="{ 'show active': current_step == index + 1 }"
                      :id="'step-' + +(index + 1)"
                      role="tabpanel"
                      :aria-labelledby="'step-' + +(index + 1) + '-tab'"
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
          </div>

          <div v-else class="text-center my-5 text-secondary">
            <img src="../assets/logo.webp" alt="" />
            <h1 class="mt-3 ">The Best is Yet to Come</h1>
            <img src="../assets/leaf-divider-gray.webp" alt="">
            <hr />
            <button class="btn btn-primary" @click="changeNext">
              Click here to begin
            </button>
            <h2 class="mt-5">
              We are looking forward to getting together with you.
            </h2>
            <h3>
              If you have any questions or require special assistance prior to
              your visit, please call our office at 281-822-1350.
            </h3>
            <h2 class="text-primary">
              Please bring your financial statements to your first visit with
              us.
            </h2>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
