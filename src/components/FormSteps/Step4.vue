<script setup>
import multiForm from '../../composables/multiForm';


const {mainForm} =multiForm();

</script>

<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Legal Items</h4>
    </div>
    <div class="card-body">
      <div class="row">
        <h2>Which of the following documents do you have?</h2>
        <div class="col-md-6 mb-3">
          <label class="form-label"
            >Will</label
          >
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
                name="child_with_special_need"
                value="no"
                v-model="mainForm.child_with_special_need"
              />
              <span class="form-check-label">No</span>
            </label>
          </div>
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label"
            >Date Last Updated (Will)</label
          >
          <input type="date" class="form-control" v-model="mainForm.will_last_updated">
       
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
