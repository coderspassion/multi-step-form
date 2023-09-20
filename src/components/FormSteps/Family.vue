<script setup>
import multiForm from "../../composables/multiForm";

const { mainForm, addChild, removeChild } = multiForm();
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Family</h4>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-12">
          <h3>Family Hierarchy</h3>
          <hr class="mt-1 mb-3">
          <div class="row d-none d-md-flex">
            <div class="col-2">
              <label class="form-label">Child</label>
            </div>
            <div class="col-2">
              <label class="form-label">Children's Name</label>
            </div>
            <div class="col-2">
              <label class="form-label">DOB</label>
            </div>
            <div class="col-2">
              <label class="form-label">Number of Grandchildren</label>
            </div>
            <div class="col-2">
              <label class="form-label">Grandchildren's Ages</label>
            </div>
       
          </div>
          <div class="row mb-3" v-for="(child, index) in mainForm.childs">
            <div class="col-md-2 d-flex flex-column justify-content-between">
              <label class="form-label d-md-none">Child</label>
              <input
                type="text"
                class="form-control"
                name="child[]"
                v-model="child.child"
              />
            </div>
            <div class="col-md-2 d-flex flex-column justify-content-between">
              <label class="form-label d-md-none ">Children's Name</label>
              <input
                type="text"
                class="form-control"
                name="child_name[]"
                v-model="child.child_name"
              />
            </div>
            <div class="col-md-2 d-flex flex-column justify-content-between">
              <label class="form-label d-md-none ">DOB</label>
              <input
                type="text"
                class="form-control"
                name="child_dob[]"
                v-model="child.child_dob"
              />
            </div>

            <div class="col-md-2 d-flex flex-column justify-content-between">
              <label class="form-label d-md-none ">Number of Grandchildren</label>
              <input
                type="text"
                class="form-control"
                name="number_of_grand_child[]"
                v-model="child.number_of_grand_child"
              />
            </div>
            <div class="col-md-2 d-flex flex-column justify-content-between">
              <label class="form-label d-md-none "> Grandchildren's Ages</label>
              <input
                type="text"
                class="form-control"
                name="grand_childs_age[]"
                v-model="child.grand_childs_age"
              />
            </div>
            <div class="col-2 d-flex align-items-end gap-1 p-2 p-md-0">
              <button
                class="btn btn-primary btn-icon"
                @click="addChild(index)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>

              <button class="btn btn-danger btn-icon" @click="removeChild(index)" v-if="mainForm.childs.length>1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 mb-3">
          <label class="form-label">Who are your trustees and/or executor?</label>
              <input
                type="text"
                class="form-control"
                name="trustees"
                v-model="mainForm.trustees"
              />
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Do any of your children or grandchildren have special needs?</label>
          <div>
            <label class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="child_with_special_need" value="yes" v-model="mainForm.child_with_special_need"/>
              <span class="form-check-label">Yes</span>
            </label>
            <label class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="child_with_special_need" value="no" v-model="mainForm.child_with_special_need"/>
              <span class="form-check-label">No</span>
            </label>
          </div>
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Are any of your children or grandchildren listed as joint owners?</label>
          <div>
            <label class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="child_joint_owners" value="yes" v-model="mainForm.child_joint_owners"/>
              <span class="form-check-label">Yes</span>
            </label>
            <label class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="child_joint_owners" value="no" v-model="mainForm.child_joint_owners"/>
              <span class="form-check-label">No</span>
            </label>
          </div>
        </div>

        <div class="col-md-6 mb-3">
          <label class="form-label">Were you referred to us?</label>
          <div>
            <label class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="referred" value="yes" v-model="mainForm.referred"/>
              <span class="form-check-label">Yes</span>
            </label>
            <label class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="referred" value="no" v-model="mainForm.referred"/>
              <span class="form-check-label">No</span>
            </label>
          </div>
        </div>

        <div class="col-md-6 mb-3" v-if="mainForm.referred== 'yes'">
          <label class="form-label">If yes, by whom?</label>
              <input
                type="text"
                class="form-control"
                name="trustees"
                v-model="mainForm.referred_by"
              />
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
