<template>
    <section id="about" class="min-h-screen flex items-center justify-center py-20 relative">
        <!-- Elementos de fundo animados -->
        <div class="absolute inset-0 overflow-visible">
            <div class="floating-circle bg-primary/5 w-64 h-64 rounded-full absolute -top-20 -left-20"></div>
            <div class="floating-circle-reverse bg-secondary/5 w-96 h-96 rounded-full absolute -bottom-32 -right-32"></div>
        </div>

        <div class="container mx-auto px-4">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center heading-gradient">
                    Sobre Mim
                </h2>

                <!-- Seção principal -->
                <div class="grid md:grid-cols-2 gap-12 items-start mb-12">
                    <div
                        class="about-card p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div class="space-y-6">
                            <div class="flex items-center space-x-4 mb-6">
                                <div class="w-20 h-20 md:w-32 md:h-32 bg-primary/10 rounded-full flex items-center justify-center">
                                    <img src="https://www.devmates.com.br/assets/img-nata-84kRO5y5.jpg" alt="Natã Rodrigues" class="w-20 h-20 md:w-32 md:h-32 rounded-full">
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold">Natã Rodrigues</h3>
                                    <p class="text-gray-600">Desenvolvedor Web</p>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <p class="text-gray-700 leading-relaxed">
                                    Olá! Sou um desenvolvedor web apaixonado por criar interfaces interativas e responsivas 
                                    que proporcionem uma experiência de usuário excepcional. Sou formado em Engenharia de Software 
                                    pela Unigran (Concluído em Agosto de 2025).
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        class="about-card p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div class="space-y-6">
                            <div class="flex items-center space-x-4 mb-6">
                                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <CodeIcon class="w-6 h-6 text-primary" />
                                </div>
                                <h3 class="text-xl font-semibold">Objetivo Profissional</h3>
                            </div>
                            <p class="text-gray-700 leading-relaxed">
                                Busco colaborar com empresas inovadoras, contribuindo para o desenvolvimento de soluções web 
                                que proporcionem uma experiência de usuário de alta qualidade. Foco em aprendizado contínuo 
                                e aplicação das mais recentes tecnologias e boas práticas de desenvolvimento.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Seção de Formação e Experiência -->
                <div class="grid md:grid-cols-2 gap-8 mb-12">
                    <!-- Formação Acadêmica -->
                    <div class="about-card p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div class="flex items-center space-x-4 mb-6">
                            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <UserIcon class="w-6 h-6 text-primary" />
                            </div>
                            <h3 class="text-xl font-semibold">Formação Acadêmica</h3>
                        </div>
                        <div class="space-y-4">
                            <div class="border-l-4 border-primary pl-4">
                                <h4 class="font-semibold text-gray-800">Engenharia de Software</h4>
                                <p class="text-gray-600 text-sm">Unigran - Concluído em Agosto de 2025</p>
                            </div>
                            <div class="border-l-4 border-secondary pl-4">
                                <h4 class="font-semibold text-gray-800">Ensino Médio</h4>
                                <p class="text-gray-600 text-sm">Escola Estadual José Maria Hugo Rodrigues - Concluído em 2017</p>
                            </div>
                        </div>
                    </div>

                    <!-- Experiência Profissional -->
                    <div class="about-card p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div class="flex items-center space-x-4 mb-6">
                            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <BriefcaseIcon class="w-6 h-6 text-primary" />
                            </div>
                            <h3 class="text-xl font-semibold">Experiência Profissional</h3>
                        </div>
                        <div class="space-y-4">
                            <div class="border-l-4 border-primary pl-4">
                                <h4 class="font-semibold text-gray-800">Desenvolvedor Web</h4>
                                <p class="text-gray-600 text-sm">Unigran Capital - 12/2023 à atual</p>
                                <p class="text-gray-700 text-sm mt-1">Vue.js, HTML, CSS, Bootstrap, jQuery, PHP</p>
                            </div>
                            <div class="border-l-4 border-secondary pl-4">
                                <h4 class="font-semibold text-gray-800">Assistente de Informática</h4>
                                <p class="text-gray-600 text-sm">Unigran Capital - 03/2021 a 11/2023</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Estatísticas -->
                <div class="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                    <div class="stat-card p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all">
                        <h4 class="text-3xl font-bold text-primary mb-2">1.10+</h4>
                        <p class="text-gray-600">Anos de Experiência</p>
                    </div>
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
import { UserIcon, CodeIcon, BriefcaseIcon } from 'lucide-vue-next'
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
