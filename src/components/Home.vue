<template>
    <section id="home" class="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
        <div class="relative z-10 text-center">
            <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold pb-4 mb-4 heading-gradient">
                Natã Rodrigues
            </h1>
            <p class="text-lg sm:text-xl md:text-2xl text-secondary typewriter">
                Desenvolvedor Web
            </p>
            <div class="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <a @click.prevent="scrollToContact" href="#contact" class="btn-primary w-full sm:w-auto">Entre em Contato</a>
            </div>
        </div>
    </section>
</template>

<script setup>
const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.btn-primary {
    @apply px-6 py-3 bg-primary text-light rounded-lg hover:bg-opacity-90 transition-all duration-300 text-center;
}

.btn-secondary {
    @apply px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-light transition-all duration-300 text-center;
}

.floating-circle {
    animation: float 8s infinite ease-in-out;
}

@keyframes float {

    0%,
    100% {
        transform: translate(0, 0) rotate(0deg);
    }

    50% {
        transform: translate(20px, 20px) rotate(10deg);
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