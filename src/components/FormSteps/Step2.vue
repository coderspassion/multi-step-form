<script setup>
import multiForm from '../../composables/multiForm';



const {mainForm} = multiForm();

</script>


<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Contact Information</h4>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label required">First Name </label>
          <input type="text" class="form-control" name="f_name" />
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label required">Last Name </label>
          <input type="text" class="form-control" name="l_name" />
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Nickname </label>
          <input type="text" class="form-control" name="n_name" />
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label required">Date of Birth </label>
          <input class="form-control mb-2" type="date" name="date_of_birth" />
        </div>
        <div class="col-md-4 mb-3">
          <label class="form-label required">Working At/Retired From </label>
          <input type="text" class="form-control" name="working_at" />
        </div>
        <div class="col-md-4 mb-3">
          <label class="form-label required">Current/Former Occupation </label>
          <input type="text" class="form-control" name="occupation" />
        </div>

        <div class="col-md-4 mb-3">
          <label class="form-label required">Retired?</label>
          <div>
            <label class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="retired" />
              <span class="form-check-label">Yes</span>
            </label>
            <label class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="retired" />
              <span class="form-check-label">No</span>
            </label>
            <label class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="retired" />
              <span class="form-check-label">Semi</span>
            </label>
          </div>
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Primary Home Phone</label>
          <input type="text" class="form-control" name="p_h_phone" />
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Cell#</label>
          <input type="phone" class="form-control" name="cell" />
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" name="email" />
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label required">Primary Address</label>
          <input type="text" class="form-control" name="p_address" />
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">City</label>
          <input type="text" class="form-control" name="city" />
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">State</label>
          <input type="text" class="form-control" name="state" />
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Zip</label>
          <input type="text" class="form-control" name="zip" />
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Country</label>
          <input type="text" class="form-control" name="country" />
        </div>

        <div class="col-md-12 mb-3">
          <label class="form-label required">Single / Married</label>
          <div>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="maritual_status"
                value="single"
                v-model="mainForm.maritual_status"
              />
              <span class="form-check-label">Single</span>
            </label>
            <label class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="maritual_status"
                value="married"
                v-model="mainForm.maritual_status"
              />
              <span class="form-check-label">Married</span>
            </label>
          </div>
        </div>

        <div class="mt-3" v-if="mainForm.maritual_status == 'married'">
          <h2 class="card-title">Spouse Information</h2>
          <hr />

          <div class="row">
            <div class="col-md-4 mb-3">
            <label class="form-label">Spouse Name</label>
            <input type="text" class="form-control" name="spouse_name" />
          </div>

          <div class="col-md-4 mb-3">
            <label class="form-label">Nickname</label>
            <input type="text" class="form-control" name="spouse_nickname" />
          </div>

          <div class="col-md-4 mb-3">
            <label class="form-label required">Date of Birth </label>
            <input
              class="form-control mb-2"
              type="date"
              name="spouse_date_of_birth"
            />
          </div>

          <div class="col-md-4 mb-3">
            <label class="form-label">Working At/Retired From </label>
            <input type="text" class="form-control" name="spouse_working_at" />
          </div>
          <div class="col-md-4 mb-3">
            <label class="form-label">Current/Former Occupation </label>
            <input type="text" class="form-control" name="spouse_occupation" />
          </div>

          <div class="col-md-4 mb-3">
            <label class="form-label">Retired?</label>
            <div>
              <label class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="spouse_retired"
                />
                <span class="form-check-label">Yes</span>
              </label>
              <label class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="spouse_retired"
                />
                <span class="form-check-label">No</span>
              </label>
              <label class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="spouse_retired"
                />
                <span class="form-check-label">Semi</span>
              </label>
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <label class="form-label">Cell# (Spouse)</label>
            <input type="text" class="form-control" name="spouse_cell" />
          </div>

          <div class="col-md-6 mb-3">
            <label class="form-label">Email (Spouse)</label>
            <input type="email" class="form-control" name="spouse_email" />
          </div>
          </div>
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
