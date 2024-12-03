<template>
    <nav :class="{ '-translate-y-full': isHidden }"
        class="fixed top-0 left-0 w-full backdrop-blur-md bg-white/80 z-50 transition-all duration-300">
        <div class="container mx-auto flex justify-between items-center py-4 px-6">
            <div class="text-xl font-bold text-dark">
                <img src="../img/new-logo-nr.png" alt="Natã Rodrigues" class="w-16">
            </div>
            <!-- Menu Desktop -->
            <div class="hidden md:flex space-x-6">
                <a @click.prevent="scrollToSection('home')"
                    class="hover:text-primary transition duration-300 cursor-pointer">Início</a>
                <a @click.prevent="scrollToSection('about')"
                    class="hover:text-primary transition duration-300 cursor-pointer">Sobre</a>
                <a @click.prevent="scrollToSection('skills')"
                    class="hover:text-primary transition duration-300 cursor-pointer">Skills</a>
                <a @click.prevent="scrollToSection('contact')"
                    class="hover:text-primary transition duration-300 cursor-pointer">Contato</a>
            </div>
            <!-- Botão Menu Mobile -->
            <button @click="toggleMenu" class="md:hidden bg-white duration-300">
                <Transition name="fade" mode="out-in">
                    <Menu v-if="!isMenuOpen" class="w-6 h-6" />
                    <X v-else class="w-6 h-6" />
                </Transition>
            </button>
        </div>

        <!-- Menu Mobile -->
        <Transition name="menu-mobile">
            <div v-show="isMenuOpen" class="md:hidden bg-white">
                <div class="flex flex-col space-y-4 px-6 py-4">
                    <a @click="scrollToSectionMobile('home')" class="transition-colors duration-300 hover:text-primary">Início</a>
                    <a @click="scrollToSectionMobile('about')" class="transition-colors duration-300 hover:text-primary">Sobre</a>
                    <a @click="scrollToSectionMobile('skills')" class="transition-colors duration-300 hover:text-primary">Skills</a>
                    <a @click="scrollToSectionMobile('contact')" class="transition-colors duration-300 hover:text-primary">Contato</a>
                </div>
            </div>
        </Transition>
    </nav>
    <button id="back-to-top" v-show="showBackToTop" @click="scrollToTop"
        class="fixed bottom-6 right-6 bg-white text-primary p-4 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
    </button>
</template>

<script>
import { Menu, X } from 'lucide-vue-next'

export default {
    components: {
        Menu,
        X
    },
    data() {
        return {
            isHidden: false,
            showBackToTop: false,
            lastScrollY: 0,
            isMenuOpen: false
        };
    },
    methods: {
        handleScroll() {
            const currentScrollY = window.scrollY;
            this.isHidden = currentScrollY > this.lastScrollY && currentScrollY > 100;
            this.showBackToTop = currentScrollY > 200;
            this.lastScrollY = currentScrollY;
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        scrollToSectionMobile(sectionId) {
            this.scrollToSection(sectionId);
            this.isMenuOpen = false;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }

};
</script>

<style scoped>
nav {
    transition: transform 0.3s ease-in-out;
}

#back-to-top {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

#back-to-top:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* Animações do menu mobile */
.menu-mobile-enter-active,
.menu-mobile-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.menu-mobile-enter-from,
.menu-mobile-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

.menu-mobile-enter-to,
.menu-mobile-leave-from {
    opacity: 1;
    transform: translateY(0);
}

/* Adicione hover effect nos links do menu mobile */
.menu-mobile a {
    transition: color 0.3s ease;
}

.menu-mobile a:hover {
    color: var(--color-primary);
}

/* Animação para os ícones do menu */
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: rotate(180deg);
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
    transform: rotate(0deg);
}
</style>