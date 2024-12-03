<template>
    <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div v-for="(bubble, index) in bubbles" 
             :key="index"
             :style="bubble.style"
             class="floating-bubble absolute rounded-full opacity-10"
             :class="bubble.color">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const bubbles = ref([
    {
        style: {
            width: '150px',
            height: '150px',
            left: '5%',
            top: '15%',
            animationDelay: '0s',
        },
        color: 'bg-primary'
    },
    {
        style: {
            width: '80px',
            height: '80px',
            left: '25%',
            top: '40%',
            animationDelay: '2s',
        },
        color: 'bg-secondary'
    },
    {
        style: {
            width: '120px',
            height: '120px',
            right: '15%',
            top: '30%',
            animationDelay: '4s',
        },
        color: 'bg-primary'
    },
    {
        style: {
            width: '100px',
            height: '100px',
            right: '25%',
            bottom: '20%',
            animationDelay: '1s',
        },
        color: 'bg-secondary'
    },
    {
        style: {
            width: '170px',
            height: '170px',
            left: '10%',
            bottom: '15%',
            animationDelay: '3s',
        },
        color: 'bg-primary'
    },
    {
        style: {
            width: '90px',
            height: '90px',
            right: '10%',
            bottom: '10%',
            animationDelay: '5s',
        },
        color: 'bg-secondary'
    }
])
</script>

<style scoped>
.floating-bubble {
    animation: floatBubble 15s ease-in-out infinite;
}

@keyframes floatBubble {
    0% {
        transform: translate(0, 0) rotate(0deg);
    }
    33% {
        transform: translate(20px, -20px) rotate(10deg);
    }
    66% {
        transform: translate(-15px, 15px) rotate(-8deg);
    }
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}
</style> 