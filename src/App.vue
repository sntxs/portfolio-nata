<template>
  <div class="bg-gray-100 min-h-screen relative overflow-hidden">
    <NavBar />
    <div class="container mx-auto px-4 relative">
      <Home />
      <About />
      <Skills />
      <Projetos />
      <Contact />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projetos from './components/Projetos.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>