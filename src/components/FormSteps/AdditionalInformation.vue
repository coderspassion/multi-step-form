<template>
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">ADD'l Information</h4>
      </div>
      <div class="card-body"></div>
      <div class="card-footer">
      <div class="d-flex justify-content-end gap-1">
        <button class="btn btn-secondary" @click="$emit('prevStep')">Previous</button>
        <button class="btn btn-primary" @click="$emit('nextStep')">Next</button>
      </div>
      
    </div>
    </div>
  </template>