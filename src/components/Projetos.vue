<template>
  <section id="projetos" class="py-16 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">
        Projetos
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="projeto in projetos"
          :key="projeto.titulo"
          class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 flex flex-col h-full"
        >
          <img
            :src="projeto.imagem"
            :alt="projeto.titulo"
            class="w-full h-48 object-cover"
          />
          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-2xl font-semibold mb-2 text-gray-900">
              {{ projeto.titulo }}
            </h3>
            <p class="text-gray-700 mb-4">{{ projeto.descricao }}</p>
            <a
              :href="projeto.link"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full inline-flex items-center justify-center mt-auto px-5 py-3 bg-blue-600 text-white font-semibold rounded shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-200 text-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Ver Projeto
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-5 h-5 ml-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
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
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
