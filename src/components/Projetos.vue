<template>
  <section id="projetos" class="py-16 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">
        Projetos
      </h2>

      <!-- Carrossel Container -->
      <div class="relative max-w-5xl mx-auto">
        <!-- Carrossel -->
        <div class="overflow-hidden rounded-lg">
          <div class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="projeto in projetos" :key="projeto.titulo" class="w-full flex-shrink-0 px-8 md:px-4">
              <div
                class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 flex flex-col h-full max-w-md mx-auto">
                <img :src="projeto.imagem" :alt="projeto.titulo" class="w-full h-64 object-cover" />
                <div class="p-6 flex flex-col flex-1">
                  <h3 class="text-2xl font-semibold mb-2 text-gray-900">
                    {{ projeto.titulo }}
                  </h3>
                  <p class="text-gray-700 mb-4">{{ projeto.descricao }}</p>
                  <a :href="projeto.link" target="_blank" rel="noopener noreferrer"
                    class="w-full inline-flex items-center justify-center mt-auto px-5 py-3 bg-blue-600 text-white font-semibold rounded shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-200 text-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                    Ver Projeto
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      class="w-5 h-5 ml-1">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Botões de Navegação -->
        <button @click="previousSlide"
          class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 z-10"
          :disabled="currentSlide === 0" :class="{ 'opacity-50 cursor-not-allowed': currentSlide === 0 }">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            class="w-4 h-4 md:w-6 md:h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button @click="nextSlide"
          class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 z-10"
          :disabled="currentSlide === projetos.length - 1"
          :class="{ 'opacity-50 cursor-not-allowed': currentSlide === projetos.length - 1 }">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            class="w-4 h-4 md:w-6 md:h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Indicadores -->
        <div class="flex justify-center mt-6 space-x-2">
          <button v-for="(projeto, index) in projetos" :key="`indicator-${index}`" @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            :class="currentSlide === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'"></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projetos",
  data() {
    return {
      currentSlide: 0,
      projetos: [
        {
          titulo: "Machado Fotografia e Eventos",
          descricao:
            "Portfólio para uma empresa de fotografia, com foco em apresentação visual e responsividade.",
          link: "https://machado-fotografia-e-eventos.vercel.app",
          imagem: new URL("../assets/machado-fotografias.png", import.meta.url)
            .href,
        },
        {
          titulo: "IEAB Central",
          descricao:
            "Site institucional para uma igreja, com área administrativa para gerenciamento de conteúdo.",
          link: "https://ieab-central.vercel.app",
          imagem: new URL("../assets/ieab.png", import.meta.url).href,
        },
        {
          titulo: "Dona M Doces",
          descricao:
            "Portfólio para uma empresa de doces, com destaque para produtos e contato.",
          link: "https://dona-m.vercel.app",
          imagem: new URL("../assets/dona-m.png", import.meta.url).href,
        },
        {
          titulo: "SGE - Sistema de Gestão de Estoque",
          descricao:
            "Sistema completo de gestão de estoque, com autenticação, dashboard e funcionalidades avançadas.",
          link: "https://sge-tcc.up.railway.app/login",
          imagem: new URL("../assets/sge.png", import.meta.url).href,
        },
        {
          titulo: "Moon Community",
          descricao:
            "Portfólio para uma agência de comunicação, com destaque para projetos e contato.",
          link: "https://moon-communicaty.vercel.app/",
          imagem: new URL("../assets/moon.png", import.meta.url).href,
        },
        {
          titulo: "Casamento J & N",
          descricao:
            "Projeto de site de casamento com cadastro de lista de presentes e pagamento direto pelo site.",
          link: "https://casamento-jn.vercel.app/",
          imagem: new URL("../assets/casamento-jn.png", import.meta.url).href,
        },
        {
          titulo: "Barber System",
          descricao:
            "Projeto de um sistema de barbearia. Ainda está em produção, mas já possui algumas funcionalidades.",
          link: "https://barber-system-app.vercel.app",
          imagem: new URL("../assets/barber-system.jpg", import.meta.url).href,
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.projetos.length - 1) {
        this.currentSlide++;
      }
    },
    previousSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    goToSlide(index) {
      this.currentSlide = index;
    }
  },
  mounted() {
    // Auto-play opcional (descomente se desejar)
    // this.autoPlay();
  },
  beforeUnmount() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
