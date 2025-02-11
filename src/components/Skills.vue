<template>
    <section id="skills" class="section-padding py-20 relative">
        <!-- Elementos de fundo animados -->
        <div class="absolute inset-0 overflow-visible">
            <div class="floating-circle bg-primary/5 w-64 h-64 rounded-full absolute -top-20 -left-20"></div>
            <div class="floating-circle-reverse bg-secondary/5 w-96 h-96 rounded-full absolute -bottom-32 -right-32"></div>
        </div>

        <div class="text-center">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 heading-gradient">
                Minhas Habilidades
            </h2>
            
            <!-- Grade de habilidades com efeito de hover mais elaborado -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto px-4">
                <div v-for="skill in skills" :key="skill.name" 
                     class="skill-card group perspective">
                    <div class="card-content">
                        <div class="card-front">
                            <div class="icon-wrapper">
                                <font-awesome-icon v-if="skill.useFA" :icon="skill.icon"
                                    class="text-3xl sm:text-4xl text-primary" />
                                <component v-else-if="!skill.isImage" :is="skill.icon"
                                    class="w-10 h-10 sm:w-12 sm:h-12" />
                                <img v-else :src="skill.icon" :alt="skill.name"
                                    class="w-8 h-8 sm:w-9 sm:h-9">
                            </div>
                            <h3 class="text-base sm:text-lg font-medium mt-3">
                                {{ skill.name }}
                            </h3>
                        </div>
                        <div class="card-back">
                            <p class="text-sm text-light">{{ getSkillDescription(skill.name) }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const skills = [
    { name: 'HTML5', icon: ['fab', 'html5'], useFA: true },
    { name: 'JavaScript', icon: ['fab', 'js'], useFA: true },
    { name: 'CSS3', icon: ['fab', 'css3-alt'], useFA: true },
    { name: 'Vue.js', icon: ['fab', 'vuejs'], useFA: true },
    { name: 'React.js', icon: ['fab', 'react'], useFA: true },
    { name: 'Bootstrap', icon: ['fab', 'bootstrap'], useFA: true },
    {
        name: 'Tailwind CSS',
        icon: new URL('../assets/tailwind.svg', import.meta.url).href,
        useFA: false,
        isImage: true
    },
    {
        name: 'jQuery',
        icon: new URL('../assets/jquery.svg', import.meta.url).href,
        useFA: false,
        isImage: true
    },
]

const experienceLevels = [
    { name: 'Front-end Development', percentage: 90 },
    { name: 'Vue.js', percentage: 85 },
    { name: 'React.js', percentage: 75 },
    { name: 'UI/UX Design', percentage: 70 },
]

const getSkillDescription = (skillName) => {
    const descriptions = {
        'HTML5': 'Estruturação semântica e acessível de conteúdo web',
        'JavaScript': 'Desenvolvimento front-end e lógica de programação',
        'CSS3': 'Estilização avançada e layouts responsivos',
        'Vue.js': 'Desenvolvimento de aplicações SPA modernas',
        'React.js': 'Criação de interfaces interativas e componentizadas',
        'Bootstrap': 'Framework CSS para desenvolvimento rápido',
        'Tailwind CSS': 'Utility-first CSS para designs customizados',
        'jQuery': 'Manipulação DOM e compatibilidade cross-browser'
    }
    return descriptions[skillName] || 'Tecnologia web moderna'
}
</script>

<style scoped>
.skill-card {
    @apply bg-white p-6 rounded-xl relative overflow-hidden transition-all duration-500;
    height: 180px;
}

.perspective {
    perspective: 1000px;
}

.card-content {
    @apply w-full h-full relative transition-transform duration-500;
    transform-style: preserve-3d;
}

.skill-card:hover .card-content {
    transform: rotateY(180deg);
}

.card-front, .card-back {
    @apply absolute w-full h-full flex flex-col items-center justify-center backface-hidden;
}

.card-back {
    @apply bg-primary p-4 rounded-xl;
    transform: rotateY(180deg);
}

.icon-wrapper {
    @apply relative flex items-center justify-center w-16 h-16 rounded-full bg-primary/5
    transition-transform duration-300;
}

.skill-card:hover .icon-wrapper {
    transform: scale(1.1);
}

.backface-hidden {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}

.skill-card:hover {
    animation: float 2s ease-in-out infinite;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
</style>
