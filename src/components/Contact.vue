<template>
    <section id="contact" class="section-padding py-20 relative">
        <!-- Elementos de fundo animados -->
        <div class="absolute inset-0 overflow-visible">
            <div class="floating-circle bg-primary/5 w-64 h-64 rounded-full absolute -top-20 -left-20"></div>
            <div class="floating-circle-reverse bg-secondary/5 w-96 h-96 rounded-full absolute -bottom-32 -right-32"></div>
        </div>

        <div class="max-w-3xl mx-auto px-4 relative z-10">
            <h2 class="text-2xl sm:text-3xl font-bold text-center mb-8 heading-gradient">
                Vamos Conversar?
            </h2>
            
            <!-- Cards de contato rápido -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div class="contact-card">
                    <div class="icon-wrapper">
                        <Mail class="w-5 h-5 text-primary" />
                    </div>
                    <h3 class="font-semibold text-sm mb-1">Email</h3>
                    <a href="mailto:natarodrigues.dev@gmail.com" class="text-xs text-gray-600 hover:text-primary transition-colors">natarodrigues.dev@gmail.com</a>
                </div>
                <div class="contact-card">
                    <div class="icon-wrapper">
                        <Linkedin class="w-5 h-5 text-primary" />
                    </div>
                    <h3 class="font-semibold text-sm mb-1">LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/sntsrod00/" class="text-xs text-gray-600 hover:text-primary transition-colors">@sntsrod00</a>
                </div>
                <div class="contact-card">
                    <div class="icon-wrapper">
                        <Github class="w-5 h-5 text-primary" />
                    </div>
                    <h3 class="font-semibold text-sm mb-1">GitHub</h3>
                    <a href="https://github.com/sntxs" class="text-xs text-gray-600 hover:text-primary transition-colors">@sntxs</a>
                </div>
            </div>

            <form @submit.prevent="handleSubmit" 
                  class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div class="space-y-4">
                    <div class="form-group">
                        <label class="text-sm font-medium text-gray-700 mb-1 block">Nome</label>
                        <input 
                            v-model="form.name" 
                            type="text" 
                            :class="{'border-red-500': errors.name}"
                            class="form-input" 
                            placeholder="Seu nome"
                        />
                        <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
                    </div>

                    <div class="form-group">
                        <label class="text-sm font-medium text-gray-700 mb-1 block">Email</label>
                        <input 
                            v-model="form.email" 
                            type="email" 
                            :class="{'border-red-500': errors.email}"
                            class="form-input" 
                            placeholder="seu.email@exemplo.com"
                        />
                        <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
                    </div>

                    <div class="form-group">
                        <label class="text-sm font-medium text-gray-700 mb-1 block">Mensagem</label>
                        <textarea 
                            v-model="form.message" 
                            rows="3"
                            :class="{'border-red-500': errors.message}"
                            class="form-input"
                            placeholder="Sua mensagem aqui..."
                        ></textarea>
                        <p v-if="errors.message" class="error-message">{{ errors.message }}</p>
                        <p class="text-xs text-gray-500 mt-1">{{ form.message.length }}/10 caracteres mínimos</p>
                    </div>

                    <button 
                        type="submit" 
                        class="submit-button"
                        :disabled="loading"
                    >
                        <span v-if="loading" class="loading-spinner"></span>
                        {{ loading ? 'Enviando...' : 'Enviar' }}
                    </button>
                </div>
            </form>
        </div>
    </section>

    <!-- Modal de feedback -->
    <Transition name="modal">
        <div v-if="showModal" class="modal-overlay" @click="closeModal">
            <div class="modal-content" @click.stop>
                <div class="modal-icon" :class="isSuccess ? 'success' : 'error'">
                    <Check v-if="isSuccess" class="w-5 h-5" />
                    <X v-else class="w-5 h-5" />
                </div>
                <p class="modal-message">{{ modalMessage }}</p>
                <button @click="closeModal" class="modal-button">
                    Fechar
                </button>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'
import { Mail, Linkedin, Github, Check, X } from 'lucide-vue-next'

const form = reactive({
    name: '',
    email: '',
    message: ''
})

const errors = reactive({
    name: '',
    email: '',
    message: ''
})

const loading = ref(false)
const showModal = ref(false)
const modalMessage = ref('')
const isSuccess = ref(true)

const validateForm = () => {
    let isValid = true
    errors.name = ''
    errors.email = ''
    errors.message = ''

    if (!form.name.trim()) {
        errors.name = 'Nome é obrigatório'
        isValid = false
    }

    if (!form.email.trim()) {
        errors.email = 'Email é obrigatório'
        isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = 'Email inválido'
        isValid = false
    }

    if (!form.message.trim()) {
        errors.message = 'Mensagem é obrigatória'
        isValid = false
    } else if (form.message.trim().length < 10) {
        errors.message = 'Mensagem deve ter pelo menos 10 caracteres'
        isValid = false
    }

    return isValid
}

const handleSubmit = async () => {
    if (!validateForm()) return

    try {
        loading.value = true

        const templateParams = {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            reply_to: form.email
        }

        await emailjs.send(
            'service_gthwjxt',
            'template_5apu00k',
            templateParams,
            'nqNHrI4wqmH8R8_nE'
        )

        isSuccess.value = true
        modalMessage.value = 'Mensagem enviada com sucesso! Retornarei o contato em breve.'
        showModal.value = true
        resetForm()
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error)
        isSuccess.value = false
        modalMessage.value = 'Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato por email.'
        showModal.value = true
    } finally {
        loading.value = false
    }
}

const resetForm = () => {
    form.name = ''
    form.email = ''
    form.message = ''
    errors.name = ''
    errors.email = ''
    errors.message = ''
}

const closeModal = () => {
    showModal.value = false
}
</script>

<style scoped>
.contact-card {
    @apply bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300
    flex flex-col items-center text-center;
}

.icon-wrapper {
    @apply w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2;
}

.form-input {
    @apply w-full p-2 text-sm border border-gray-300 rounded-lg focus:border-primary focus:ring-1 
    focus:ring-primary/20 transition-all duration-300;
}

.error-message {
    @apply text-red-500 text-xs mt-1;
}

.submit-button {
    @apply w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 
    transition-all duration-300 flex items-center justify-center space-x-2 text-sm
    disabled:opacity-70 disabled:cursor-not-allowed;
}

.loading-spinner {
    @apply w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2;
}

/* Modal Styles */
.modal-overlay {
    @apply fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4;
}

.modal-content {
    @apply bg-white rounded-xl p-4 max-w-sm w-full text-center;
}

.modal-icon {
    @apply w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center;
}

.modal-icon.success {
    @apply bg-green-100 text-green-600;
}

.modal-icon.error {
    @apply bg-red-100 text-red-600;
}

.modal-message {
    @apply text-gray-700 text-sm mb-4;
}

.modal-button {
    @apply w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition-all text-sm;
}

/* Modal Transition */
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}
</style>
