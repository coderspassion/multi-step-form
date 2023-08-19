<template>

    <div class="card">
        <div class="card-header">
            <h4 class="card-title">Getting Started</h4>
        </div>
        <div class="card-body">
            <div class="text-center">
                <img src="../../assets/logo.webp" alt="">
                <h1 class="mt-3">The Best is Yet to Come</h1>
                <hr>
                <button class="btn btn-primary" @click="$emit('nextStep')">Click here to begin</button>
                <h2 class="mt-5">We are looking forward to getting together with you.</h2>
                <h4>If you have any questions or require special assistance prior to your visit, please call our office at 281-822-1350.</h4>
                <h3>Please bring your financial statements to your first visit with us.</h3>
            </div>

        </div>
    </div>
</template>