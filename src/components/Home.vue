<template>
    <section id="home" class="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
        <!-- Círculos de fundo ajustados -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="floating-circle bg-primary/5 w-48 sm:w-64 h-48 sm:h-64 rounded-full absolute -top-20 -left-20">
            </div>
            <div
                class="floating-circle bg-secondary/5 w-72 sm:w-96 h-72 sm:h-96 rounded-full absolute -bottom-32 -right-32">
            </div>
        </div>

        <div class="relative z-10 text-center">
            <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 heading-gradient">
                Natã Rodrigues
            </h1>
            <p class="text-lg sm:text-xl md:text-2xl text-secondary typewriter">
                Desenvolvedor Web
            </p>
            <div class="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <a href="#contact" class="btn-primary w-full sm:w-auto">Entre em Contato</a>
            </div>
        </div>
    </section>
</template>

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