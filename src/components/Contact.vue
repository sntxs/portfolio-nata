<template>
    <section id="contact" class="section-padding">
        <div class="max-w-4xl mx-auto px-4">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 heading-gradient">
                Vamos Conversar?
            </h2>
            <div class="grid md:grid-cols-2 gap-6 sm:gap-8">
                <!-- Informações de Contato -->
                <div class="bg-primary p-6 sm:p-8 rounded-lg text-light order-2 md:order-1">
                    <h3 class="text-xl sm:text-2xl font-bold mb-6">Informações de Contato</h3>
                    <div class="space-y-4">
                        <div class="flex items-center space-x-4">
                            <MailIcon class="w-6 h-6" />
                            <span>natanrodrigues649@gmail.com</span>
                        </div>
                        <div class="flex items-center space-x-4">
                            <MapPinIcon class="w-6 h-6" />
                            <span>Mato Grosso do Sul, Brasil</span>
                        </div>
                    </div>
                    <div class="mt-6 sm:mt-8">
                        <div class="flex space-x-4">
                            <a href="https://github.com/sntxs" target="_blank"
                                class="bg-light/10 p-3 rounded-lg hover:bg-light/20 transition-colors">
                                <GithubIcon class="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/sntsrod00/" target="_blank"
                                class="bg-light/10 p-3 rounded-lg hover:bg-light/20 transition-colors">
                                <LinkedinIcon class="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Formulário -->
                <form @submit.prevent="sendMessage" class="bg-white p-6 sm:p-8 rounded-lg shadow-sm order-1 md:order-2">
                    <div class="space-y-4">
                        <input v-model="name" type="text" placeholder="Nome"
                            class="w-full p-3 border border-accent rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" />
                        <input v-model="email" type="email" placeholder="Email"
                            class="w-full p-3 border border-accent rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" />
                        <textarea v-model="message" placeholder="Sua Mensagem" rows="4"
                            class="w-full p-3 border border-accent rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"></textarea>
                        <button type="submit" class="w-full bg-primary text-light py-3 rounded-lg
                                hover:bg-opacity-90 transition-all duration-300"
                                :disabled="loading">
                            {{ loading ? 'Enviando...' : 'Enviar Mensagem' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
            <div class="flex items-center" :class="isSuccess ? 'text-green-600' : 'text-red-600'">
                <span class="text-xl font-semibold">{{ modalMessage }}</span>
            </div>
            <button @click="showModal = false"
                class="mt-4 w-full bg-primary text-white py-2 rounded hover:bg-blue-700 transition">
                Fechar
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon } from 'lucide-vue-next'
import emailjs from '@emailjs/browser'

const name = ref('')
const email = ref('')
const message = ref('')
const loading = ref(false)
const showModal = ref(false)
const modalMessage = ref('')
const isSuccess = ref(true)

const sendMessage = async () => {
    try {
        loading.value = true

        const templateParams = {
            from_name: name.value,
            from_email: email.value,
            message: message.value,
        }

        await emailjs.send(
            'service_gthwjxt',
            'template_5apu00k',
            templateParams,
            'nqNHrI4wqmH8R8_nE'
        )

        isSuccess.value = true
        modalMessage.value = 'Mensagem enviada com sucesso!'
        showModal.value = true

        // Limpa o formulário
        name.value = ''
        email.value = ''
        message.value = ''
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error)
        isSuccess.value = false
        modalMessage.value = 'Erro ao enviar mensagem. Tente novamente.'
        showModal.value = true
    } finally {
        loading.value = false
    }
}
</script>

<style scoped>
.social-card {
/*     background: white;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
    transition: all 0.3s ease;
}

.social-card:hover {
    transform: perspective(400px) rotateX(15deg) rotateY(-15deg) scale(1.2);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

/* .social-card:active {
    transform: scale(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
} */

#github,
#linkedin,
#mail {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
