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
          <input type="text" class="form-control" name="first_name" v-model="mainForm.first_name" />
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label required">Last Name </label>
          <input type="text" class="form-control" name="last_name" v-model="mainForm.last_name" />
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Nickname </label>
          <input type="text" class="form-control" name="nickname" v-model="mainForm.nickname" />
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label required">Date of Birth </label>
          <input class="form-control mb-2" type="date" name="dob" v-model="mainForm.dob"/>
        </div>
        <div class="col-md-4 mb-3">
          <label class="form-label required">Working At/Retired From </label>
          <input type="text" class="form-control" name="organization" v-model="mainForm.organization" />
        </div>
        <div class="col-md-4 mb-3">
          <label class="form-label required">Current/Former Occupation </label>
          <input type="text" class="form-control" name="occupation" v-model="mainForm.occupation" />
        </div>

        <div class="col-md-4 mb-3">
          <label class="form-label required">Retired?</label>
          <div>
            <label class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="retirement_status" value="yes" v-model="mainForm.retirement_status" />
              <span class="form-check-label">Yes</span>
            </label>
            <label class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="retirement_status" value="no" v-model="mainForm.retirement_status" />
              <span class="form-check-label">No</span>
            </label>
            <label class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="retirement_status" value="semi" v-model="mainForm.retirement_status" />
              <span class="form-check-label">Semi</span>
            </label>
          </div>
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Primary Home Phone</label>
          <input type="text" class="form-control" name="primary_home_phone" v-model="mainForm.primary_home_phone"/>
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Cell#</label>
          <input type="phone" class="form-control" name="cell" v-model="mainForm.cell"/>
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" name="email" v-model="mainForm.email" />
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label required">Primary Address</label>
          <input type="text" class="form-control" name="primary_address" v-model="mainForm.primary_address"/>
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">City</label>
          <input type="text" class="form-control" name="city" v-model="mainForm.city" />
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">State</label>
          <input type="text" class="form-control" name="state" v-model="mainForm.state" />
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Zip</label>
          <input type="text" class="form-control" name="zip"  v-model="mainForm.zip" />
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Country</label>
          <input type="text" class="form-control" name="country" v-model="mainForm.country" />
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
            <input type="text" class="form-control" name="spouse_name" v-model="mainForm.spouse_name"/>
          </div>

          <div class="col-md-4 mb-3">
            <label class="form-label">Nickname</label>
            <input type="text" class="form-control" name="spouse_nickname" v-model="mainForm.spouse_nickname" />
          </div>

          <div class="col-md-4 mb-3">
            <label class="form-label required">Date of Birth </label>
            <input
              class="form-control mb-2"
              type="date"
              name="spouse_dob"
              v-model="mainForm.spouse_dob"
            />
          </div>

          <div class="col-md-4 mb-3">
            <label class="form-label">Working At/Retired From </label>
            <input type="text" class="form-control" name="spouse_working_at" v-model="mainForm.spouse_organization"/>
          </div>
          <div class="col-md-4 mb-3">
            <label class="form-label">Current/Former Occupation </label>
            <input type="text" class="form-control" name="spouse_occupation" v-model="mainForm.spouse_occupation" />
          </div>

          <div class="col-md-4 mb-3">
            <label class="form-label">Retired?</label>
            <div>
              <label class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="spouse_retirement_status"
                  value="yes"
                  v-model="mainForm.spouse_retirement_status"
                />
                <span class="form-check-label">Yes</span>
              </label>
              <label class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  value="no"
                  name="spouse_retirement_status"
                  v-model="mainForm.spouse_retirement_status"
                />
                <span class="form-check-label">No</span>
              </label>
              <label class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="spouse_retirement_status"
                  value="semi"
                  v-model="mainForm.spouse_retirement_status"
                />
                <span class="form-check-label">Semi</span>
              </label>
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <label class="form-label">Cell# (Spouse)</label>
            <input type="text" class="form-control" name="spouse_cell" v-model="mainForm.spouse_cell" />
          </div>

          <div class="col-md-6 mb-3">
            <label class="form-label">Email (Spouse)</label>
            <input type="email" class="form-control" name="spouse_email" v-model="mainForm.spouse_email" />
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="d-flex justify-content-end gap-1">
        <button class="btn btn-secondary" @click="$emit('back')">Previous</button>
        <button class="btn btn-primary" @click="$emit('nextStep')">Next</button>
      </div>
      
    </div>
  </div>
</template>
