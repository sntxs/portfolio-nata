<template>
    <footer class="relative mt-20 bg-primary">
        <div class="container mx-auto text-center text-light px-4 py-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div class="footer-section">
                    <h3 class="text-xl font-bold mb-4">Navegação</h3>
                    <ul class="space-y-2">
                        <li><a @click="scrollToSection('home')"
                                class="hover:text-white/80 cursor-pointer transition-colors">Início</a></li>
                        <li><a @click="scrollToSection('about')"
                                class="hover:text-white/80 cursor-pointer transition-colors">Sobre</a></li>
                        <li><a @click="scrollToSection('skills')"
                                class="hover:text-white/80 cursor-pointer transition-colors">Skills</a></li>
                        <li><a @click="scrollToSection('contact')"
                                class="hover:text-white/80 cursor-pointer transition-colors">Contato</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3 class="text-xl font-bold mb-4">Redes Sociais</h3>
                    <div class="flex justify-center space-x-4">
                        <a href="https://github.com/sntxs" target="_blank" class="social-icon">
                            <GithubIcon class="w-8 h-8" />
                        </a>
                        <a href="https://www.linkedin.com/in/sntsrod00/" target="_blank" class="social-icon">
                            <LinkedinIcon class="w-8 h-8" />
                        </a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3 class="text-xl font-bold mb-4">Contato</h3>
                    <p>natarodrigues.dev@gmail.com</p>
                    <p>Mato Grosso do Sul, Brasil</p>
                </div>
            </div>
            <div class="pt-8 border-t border-light/20">
                <p>&copy; {{ new Date().getFullYear() }} Natã Rodrigues. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { GithubIcon, LinkedinIcon } from 'lucide-vue-next'

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<style scoped>
@media (max-width: 768px) {
    .social-icon {
        @apply p-2 rounded-lg bg-light/10;
    }
}

@media (min-width: 768px) {
    .social-icon {
        @apply p-2 rounded-lg bg-light/10 hover:bg-light/20 transition-all duration-300 active:scale-95;
    }

    .footer-section {
        .social-icon:hover {
            transform: perspective(250px) rotateX(15deg) rotateY(-15deg) scale(1.2);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }
    }
}
</style>
