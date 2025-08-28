<template>
    <section id="home" class="min-h-screen flex items-center justify-center px-4 sm:px-6 relative">
        <!-- Elementos de fundo animados -->
        <div class="absolute inset-0 overflow-visible">
            <div class="floating-circle bg-primary/5 w-64 h-64 rounded-full absolute -top-20 -left-20"></div>
            <div class="floating-circle-reverse bg-secondary/5 w-96 h-96 rounded-full absolute -bottom-32 -right-32"></div>
        </div>

        <div class="relative z-10 text-center max-w-4xl">
            <div class="mb-6 inline-block">
                <span class="text-sm md:text-base bg-primary/10 text-primary px-4 py-2 rounded-full">
                    Bem-vindo ao meu portfólio
                </span>
            </div>
            <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold pb-4 mb-4 heading-gradient animate-fade-in">
                Natã Rodrigues
            </h1>
            <p class="text-lg sm:text-xl md:text-2xl text-secondary typewriter mb-6">
                Desenvolvedor Web
            </p>
            <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-in-up">
                Transformando ideias em experiências digitais únicas através de código limpo e design intuitivo
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button @click="scrollToContact" class="btn-primary group bg-primary/10 text-black font-bold px-8 py-4 rounded-lg hover:bg-primary/20 transition-all duration-300 text-center shadow-lg hover:shadow-xl">
                    Entre em Contato
                    <span class="group-hover:translate-x-1 transition-transform inline-block ml-2">→</span>
                </button>
                <button @click="scrollToProjects" class="btn-secondary group bg-primary/10 text-black font-bold px-8 py-4 rounded-lg hover:bg-primary/20 transition-all duration-300 text-center shadow-lg hover:shadow-xl">
                    Meus projetos
                    <span class="group-hover:translate-x-1 transition-transform inline-block ml-2">→</span>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection.scrollIntoView({ behavior: 'smooth' })
}

const scrollToProjects = () => {
    window.open('https://github.com/sntxs', '_blank')
}
</script>

<style scoped>
.floating-circle {
    animation: float 15s infinite ease-in-out;
}

.floating-circle-reverse {
    animation: float-reverse 20s infinite ease-in-out;
}

@keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(30px, 30px) rotate(10deg); }
}

@keyframes float-reverse {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(-30px, -30px) rotate(-10deg); }
}

.animate-fade-in {
    animation: fadeIn 1s ease-out;
}

.animate-fade-in-up {
    animation: fadeInUp 1s ease-out;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.typewriter {
    overflow: hidden;
    border-right: 3px solid var(--color-primary);
    white-space: nowrap;
    animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
}

@keyframes typing {
    from {
        width: 0
    }

    to {
        width: 100%
    }
}

@keyframes blink-caret {

    from,
    to {
        border-color: transparent
    }

    50% {
        border-color: var(--color-primary);
    }
}
</style>