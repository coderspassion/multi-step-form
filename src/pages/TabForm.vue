<script setup>
import multiForm from "../composables/multiForm";
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
import bgImage from "@/assets/Oak-Hartvest-Financial-Group-Header-Image.webp";

const totalSteps = [
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
];

const { changeNext, prevStep, nextStep, isNext, current_step } = multiForm();
</script>
<template>
  <div class="page-header d-print-none" v-if="isNext">
    <div class="container-xl">
      <h1 class="display-6 fw-bold my-0">Financial Questionnaire</h1>
    </div>
  </div>

  <div class="page-body min-vh-100" v-if="isNext">
    <div class="container-xl">
      <div class="row">
        <div class="col-12">
          <div>
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
        </div>
      </div>
    </div>
  </div>
  <div class="page-body mt-0" v-else>
    <div  :style="{'background-image': 'url(' + bgImage + ')'}" style="background-repeat: no-repeat;
  background-position: center -70px; background-size: cover;">

      <div class="container-xl" >
      <div class="row position-relative floating-div-wrapper">
        <div class="col-12 bg-glass">
          <div class="text-center my-5  p-4">
            <img src="../assets/logo.webp" alt="" width="170"/>
            <h1 class="mt-3 display-4 fw-bold">The Best is Yet to Come</h1>
        
            <button class="btn btn-primary btn-lg" @click="changeNext">
              Click here to begin
            </button>
            <h2 class="mt-5 display-6  fw-bold">
              We are looking forward to getting together with you.
            </h2>
            <h2>
              If you have any questions or require special assistance prior to
              your visit, please call our office at 281-822-1350.
            </h2>
            <h1 class="text-primary">
              Please bring your financial statements to your first visit with us.
            </h1>
          </div>
        </div>
      </div>
    </div>

    </div>

    <!-- <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
                <img src="../assets/Oak-Hartvest-Financial-Group-Header-Image.webp" class="d-block mx-lg-auto img-fluid" alt="" loading="lazy">
            </div>
            <div class="col-lg-6">
                <div class="lc-block mb-3">
                    <div editable="rich">
                        <h2 class="fw-bold display-5"> The Best is Yet to Come</h2>
                    </div>
                </div>

                <div class="lc-block mb-3">
                    <div editable="rich">
                        <h3> We are looking forward to getting together with you.</h3>
                        <p class="lead">If you have any questions or require special assistance prior to your visit, please call our office at 281-822-1350.
                        </p>
                        <p class="fw-bold lead text-primary">Please bring your financial statements to your first visit with us.
                        </p>
                    </div>
                </div>

                <div class="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
                  <a class="btn btn-primary px-4 me-md-2" href="#" @click="changeNext" role="button">Click here to begin</a>
                    
                </div>

            </div>
        </div>
    </div> -->

      <!-- <div
        class="d-flex container-fluid"
        lc-helper="background"
        :style="{
          height: '50vh',
          background: 'url(' + bgImage + ')  0px -70px / cover no-repeat',
        }"
      ></div>
      <div class="container p-5 bg-light" style="margin-top: -100px">
        <div class="row">
          <div class="col-md-4 text-center align-self-center">
            <div class="lc-block border-end border-2">
              <div editable="rich">
                <img src="../assets/logo.webp" alt="" width="200" />
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="lc-block">
              <div editable="rich">
                <h1 class="display-4">The Best is Yet to Come</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-9 text-center">
            <p class="display-6 mt-5 mb-2">
              We are looking forward to getting together with you.
            </p>
            <button class="btn btn-lg btn-primary mt-5" @click="changeNext">
              Click here to begin
            </button>
            <div class="lc-block mt-5">
              <div editable="rich text-center">
                <h2 class="text-center text-secondary">
                  If you have any questions or require special assistance prior
                  to your visit, please call our office at 281-822-1350.
                </h2>
                <h3 class="text-center text-secondary">
                  Please bring your financial statements to your first visit
                  with us.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div> -->
   
  </div>
</template>

<style scoped>
.bg-glass {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border: 1px solid rgba(4, 32, 69, 0.14);
  position: absolute;
  top: 170px;
  box-shadow:  var(--tblr-shadow-card);
  border-radius: 4px;
}

.floating-div-wrapper {
  height: 500px;
  margin-bottom: 10rem;
}
</style>
