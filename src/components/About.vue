<template>
    <section id="about" class="min-h-screen flex items-center justify-center py-20 relative">
        <!-- Elementos de fundo animados -->
        <div class="absolute inset-0 overflow-visible">
            <div class="floating-circle bg-primary/5 w-64 h-64 rounded-full absolute -top-20 -left-20"></div>
            <div class="floating-circle-reverse bg-secondary/5 w-96 h-96 rounded-full absolute -bottom-32 -right-32"></div>
        </div>

        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center heading-gradient">
                    Sobre Mim
                </h2>

                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div
                        class="about-card p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div class="space-y-6">
                            <div class="flex items-center space-x-4 mb-6">
                                <div class="w-20 h-20 md:w-32 md:h-32 bg-primary/10 rounded-full flex items-center justify-center">
                                    <img src="../img/profile.jpeg" alt="Natã Rodrigues" class="w-20 h-20 md:w-32 md:h-32 rounded-full">
                                </div>
                                <h3 class="text-xl font-semibold">Quem sou eu</h3>
                            </div>
                            <p class="text-gray-700 leading-relaxed">
                                Meu nome é Natã Rodrigues, tenho 24 anos e estou no meu ultimo semestre de Engenharia de Software.
                            </p>
                        </div>
                    </div>

                    <div
                        class="about-card p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div class="space-y-6">
                            <div class="flex items-center space-x-4 mb-6">
                                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <CodeIcon class="w-6 h-6 text-primary" />
                                </div>
                                <h3 class="text-xl font-semibold">Minha Jornada</h3>
                            </div>
                            <p class="text-gray-700 leading-relaxed">
                                Desenvolvedor Front-End com experiência prática em criação de interfaces interativas e
                                responsivas. Busco colaborar com empresas inovadoras, contribuindo para o
                                desenvolvimento de soluções web que proporcionem uma experiência de usuário de alta
                                qualidade.

                            </p>
                        </div>
                    </div>
                </div>

                <div class="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                    <div class="stat-card p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all">
                        <h4 class="text-3xl font-bold text-primary mb-2">1+</h4>
                        <p class="text-gray-600">Anos de Experiência</p>
                    </div>
                    <!--                     <div class="stat-card p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all">
                        <h4 class="text-3xl font-bold text-primary mb-2">5+</h4>
                        <p class="text-gray-600">Projetos Concluídos</p>
                    </div> -->
                    <div class="stat-card p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all">
                        <h4 class="text-3xl font-bold text-primary mb-2">10+</h4>
                        <p class="text-gray-600">Tecnologias</p>
                    </div>
                    <div class="stat-card p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all">
                        <h4 class="text-3xl font-bold text-primary mb-2">100%</h4>
                        <p class="text-gray-600">Comprometimento</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { UserIcon, CodeIcon } from 'lucide-vue-next'
</script>

<style scoped>
.about-card {
    position: relative;
    overflow: hidden;
}

.about-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, var(--color-primary/5), var(--color-secondary/5));
    opacity: 0;
    transition: opacity 0.3s ease;
}

.about-card:hover::before {
    opacity: 1;
}

.stat-card {
    transform: translateY(0);
    transition: all 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-5px);
}
</style>