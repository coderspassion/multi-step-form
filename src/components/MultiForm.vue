<script setup>
import { ref } from "vue";
import Step1 from './FormSteps/Step1.vue'
import Step2 from './FormSteps/Step2.vue'
import Step3 from './FormSteps/Step3.vue'
import Step4 from './FormSteps/Step4.vue'
import Step5 from './FormSteps/Step5.vue'
import Step6 from './FormSteps/Step6.vue'
import Step7 from './FormSteps/Step7.vue'
import Step8 from './FormSteps/Step8.vue'
import Step9 from './FormSteps/Step9.vue'
import Step10 from './FormSteps/Step10.vue'
import Step11 from './FormSteps/Step11.vue'
import Step12 from './FormSteps/Step12.vue'

const totalSteps = ref([
  "GETTING STARTED",
  "CONTACT INFORMATION",
  "FAMILY",
  "LEGAL ITEMS",
  "ADD'l ITEMS",
  "CASH FLOW",
  "LIFE EVENTS",
  "ASSETS",
  "ADD'L INFORMATION",
  "CONCERNS",
  "OBJECTIVES",
  "RISK/GOALS",
]);
const current_step = ref(1);

const nextStep = () => {
  current_step.value++;
}

const prevStep = () => {
  current_step.value--;
}

</script>
<template>
  <div class="row">
    <div class="col-12">
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
                :aria-selected="[current_step == index + 1 ? true : false]"
                @click="current_step=index+1"
              >
                {{ step }}
              </button>
            </div>
            <div class="tab-content col-md-9" id="v-pills-tabContent">
              <div
                class="tab-pane fade"
                :class="{ 'show active': current_step == 1 }"
                id="step-1"
                role="tabpanel"
                aria-labelledby="step-1-tab"
              >
                <Step1 @nextStep="nextStep()"/>
              </div>
              <div
                class="tab-pane fade"
                :class="{ 'show active': current_step == 2 }"
                id="step-2"
                role="tabpanel"
                aria-labelledby="step-2-tab"
              >
                <Step2 @nextStep="nextStep()"  @prevStep="prevStep()" />
              </div>

              <div
                class="tab-pane fade"
                :class="{ 'show active': current_step == 3 }"
                id="step-3"
                role="tabpanel"
                aria-labelledby="step-3-tab"
              >
                <Step3 @nextStep="nextStep()"  @prevStep="prevStep()" />
              </div>

              <div
                class="tab-pane fade"
                :class="{ 'show active': current_step == 4 }"
                id="step-4"
                role="tabpanel"
                aria-labelledby="step-4-tab"
              >
                <Step4 @nextStep="nextStep()"  @prevStep="prevStep()"/>
              </div>

              <div
                class="tab-pane fade"
                :class="{ 'show active': current_step == 5 }"
                id="step-5"
                role="tabpanel"
                aria-labelledby="step-5-tab"
              >
                <Step5 @nextStep="nextStep()"  @prevStep="prevStep()"/>
              </div>

              <div
                class="tab-pane fade"
                :class="{ 'show active': current_step == 6 }"
                id="step-6"
                role="tabpanel"
                aria-labelledby="step-6-tab"
              >
                <Step6 @nextStep="nextStep()"  @prevStep="prevStep()"/>
              </div>

              <div
                class="tab-pane fade"
                :class="{ 'show active': current_step == 7 }"
                id="step-7"
                role="tabpanel"
                aria-labelledby="step-7-tab"
              >
                <Step7 @nextStep="nextStep()"  @prevStep="prevStep()"/>
              </div>

              <div
                class="tab-pane fade"
                :class="{ 'show active': current_step == 8 }"
                id="step-8"
                role="tabpanel"
                aria-labelledby="step-8-tab"
              >
                <Step8 @nextStep="nextStep()"  @prevStep="prevStep()"/>
              </div>

              <div
                class="tab-pane fade"
                :class="{ 'show active': current_step == 9 }"
                id="step-9"
                role="tabpanel"
                aria-labelledby="step-9-tab"
              >
                <Step9 @nextStep="nextStep()"  @prevStep="prevStep()"/>
              </div>

              <div
                class="tab-pane fade"
                :class="{ 'show active': current_step == 10 }"
                id="step-10"
                role="tabpanel"
                aria-labelledby="step-10-tab"
              >
                <Step10 @nextStep="nextStep()"  @prevStep="prevStep()"/>
              </div>

              <div
                class="tab-pane fade"
                :class="{ 'show active': current_step == 11 }"
                id="step-11"
                role="tabpanel"
                aria-labelledby="step-11-tab"
              >
                <Step11 @nextStep="nextStep()"  @prevStep="prevStep()"/>
              </div>

              <div
                class="tab-pane fade"
                :class="{ 'show active': current_step == 12 }"
                id="step-12"
                role="tabpanel"
                aria-labelledby="step-12-tab"
              >
                <Step12 @nextStep="nextStep()"  @prevStep="prevStep()"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
