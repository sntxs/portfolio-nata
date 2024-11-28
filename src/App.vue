<template>
  <div class="bg-gray-100 min-h-screen">
    <NavBar />
    <div class="container mx-auto px-4">
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
</script>