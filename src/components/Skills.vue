<template>
    <section id="skills" class="section-padding">
        <div class="text-center">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 heading-gradient">
                Minhas Habilidades
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto px-4">
                <div v-for="skill in skills" :key="skill.name" class="skill-card group">
                    <div class="relative z-10 flex flex-col items-center">
                        <div class="icon-wrapper">
                            <font-awesome-icon v-if="skill.useFA" :icon="skill.icon"
                                class="text-3xl sm:text-4xl mb-3 sm:mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                            <component v-else :is="skill.icon" 
                                class="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h3 class="text-lg sm:text-xl font-medium text-primary group-hover:text-secondary transition-colors duration-300">
                            {{ skill.name }}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faHtml5,
    faCss3Alt,
    faBootstrap,
    faJs,
    faVuejs,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import {
    Database,
    CloudLightning,
    Server
} from 'lucide-vue-next'

const skills = [
    { name: 'HTML5', icon: ['fab', 'html5'], useFA: true },
    { name: 'JavaScript', icon: ['fab', 'js'], useFA: true },
    { name: 'CSS3', icon: ['fab', 'css3-alt'], useFA: true },
    { name: 'Vue.js', icon: ['fab', 'vuejs'], useFA: true },
    { name: 'React.js', icon: ['fab', 'react'], useFA: true },
    { name: 'Bootstrap', icon: ['fab', 'bootstrap'], useFA: true },
]
</script>

<style scoped>
.skill-card {
    @apply bg-white p-6 sm:p-8 rounded-lg relative overflow-hidden transition-all duration-500
    hover:shadow-lg hover:-translate-y-1;
}

.skill-card::before {
    content: '';
    @apply absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 
    opacity-0 transition-opacity duration-500;
}

.skill-card::after {
    content: '';
    @apply absolute -inset-2 bg-gradient-to-br from-primary/10 to-secondary/10
    rounded-[100%] blur-2xl opacity-0 transition-all duration-500 scale-0;
}

.skill-card:hover::before {
    @apply opacity-100;
}

.skill-card:hover::after {
    @apply opacity-70 scale-150;
}

.icon-wrapper {
    @apply relative;
}

.icon-wrapper::after {
    content: '';
    @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
    w-12 h-12 bg-primary/5 rounded-full scale-0 transition-transform duration-500;
}

.skill-card:hover .icon-wrapper::after {
    @apply scale-150;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
}

.skill-card:hover {
    animation: float 2s ease-in-out infinite;
}
</style>
