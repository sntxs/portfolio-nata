<template>
    <section id="skills" class="flex items-center justify-center min-h-screen">
        <div class="text-center">
            <h2 class="text-3xl font-bold mb-8">Minhas Habilidades</h2>
            <div id="cardSkills" class="grid grid-cols-3 gap-6">
                <div v-for="skill in skills" :key="skill.name"
                    class="bg-white p-6 rounded-lg shadow-md hover:scale-110 transition-all duration-300">
                    <font-awesome-icon v-if="skill.useFA" :icon="skill.icon"
                        class="mx-auto mb-4 w-12 h-12 text-primary" />
                    <component v-else :is="skill.icon" class="mx-auto mb-4 w-12 h-12 text-primary" />
                    <h3 class="text-xl font-semibold">{{ skill.name }}</h3>
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
    { name: 'React', icon: ['fab', 'react'], useFA: true },
    { name: 'Bootstrap', icon: ['fab', 'bootstrap'], useFA: true },
]
</script>

<style scoped>
@media (max-width: 768px) {
    #cardSkills {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 0 1rem;
    }
}
</style>
