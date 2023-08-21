<script setup>
import multiForm from "../composables/multiForm";
import bgImage from "@/assets/Oak-Hartvest-Financial-Group-Header-Image.webp";

const { changeNext, prevStep, nextStep,totalSteps, isNext, current_step } = multiForm();
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
  <div class="page-body" v-if="isNext">
    <div class="container-xl">
      <div class="row">
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
  <div class="page-body mt-0" v-else>
    <div
      :style="{ 'background-image': 'url(' + bgImage + ')' }"
      style="
        background-repeat: no-repeat;
        background-position: center -70px;
        background-size: cover;
      "
    >
      <div class="container-xl">
        <div class="row position-relative floating-div-wrapper">
          <div class="col-12 bg-glass">
            <div class="text-center my-5 p-4">
              <img src="../assets/logo.webp" alt="" width="170" />
              <h1 class="mt-3 display-4 fw-bold">The Best is Yet to Come</h1>

              <button class="btn btn-primary btn-lg" @click="changeNext">
                Click here to begin
              </button>
              <h2 class="mt-5 display-6 fw-bold">
                We are looking forward to getting together with you.
              </h2>
              <h2>
                If you have any questions or require special assistance prior to
                your visit, please call our office at 281-822-1350.
              </h2>
              <h1 class="text-primary">
                Please bring your financial statements to your first visit with
                us.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  box-shadow: var(--tblr-shadow-card);
  border-radius: 4px;
}

.floating-div-wrapper {
  height: 500px;
  margin-bottom: 10rem;
}
</style>