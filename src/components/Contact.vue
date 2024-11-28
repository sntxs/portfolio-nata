<template>
    <section id="contact" class="flex items-center justify-center min-h-screen px-4">
        <div class="w-full max-w-md">
            <h2 class="text-2xl md:text-3xl font-bold text-center mb-8">Contato</h2>
            <form @submit.prevent="sendMessage" class="bg-white p-8 rounded-lg shadow-md">
                <input v-model="name" type="text" placeholder="Nome" class="w-full mb-4 p-3 border rounded" required>
                <input v-model="email" type="email" placeholder="Email" class="w-full mb-4 p-3 border rounded" required>
                <textarea v-model="message" placeholder="Sua Mensagem" class="w-full mb-4 p-3 border rounded h-32"
                    required></textarea>
                <button type="submit"
                    class="w-full bg-primary text-white py-3 rounded hover:bg-blue-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
                    :disabled="loading">
                    <span v-if="loading" class="flex items-center justify-center">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                        Enviando...
                    </span>
                    <span v-else>Enviar</span>
                </button>
            </form>

            <div class="flex justify-center mt-8 space-x-6">
                <a id="github" href="https://github.com/sntxs" target="_blank" class="social-card" title="Github">
                    <GithubIcon class="w-9 h-9 text-dark hover:text-primary" />
                </a>
                <a id="linkedin" href="https://www.linkedin.com/in/sntsrod00/" target="_blank" class="social-card"
                    title="Linkedin">
                    <LinkedinIcon class="w-9 h-9 text-dark hover:text-primary" />
                </a>
                <a id="mail" href="mailto:natanrodrigues649@gmail.com" class="social-card" title="Email">
                    <MailIcon class="w-9 h-9 text-dark hover:text-primary" />
                </a>
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
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-vue-next'
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
    background: white;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.social-card:hover {
    transform: perspective(400px) rotateX(15deg) rotateY(-15deg) scale(1.2);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.social-card:active {
    transform: scale(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#github,
#linkedin,
#mail {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
