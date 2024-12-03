<template>
    <section id="contact" class="section-padding">
        <div class="max-w-lg mx-auto px-4">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 heading-gradient">
                Vamos Conversar?
            </h2>
            
            <form @submit.prevent="handleSubmit" class="bg-white p-5 rounded-lg shadow-sm">
                <div class="space-y-3">
                    <div>
                        <input 
                            v-model="form.name" 
                            type="text" 
                            placeholder="Nome"
                            :class="{'border-red-500': errors.name}"
                            class="w-full p-2.5 border border-accent rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" 
                        />
                        <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
                    </div>

                    <div>
                        <input 
                            v-model="form.email" 
                            type="email" 
                            placeholder="Email"
                            :class="{'border-red-500': errors.email}"
                            class="w-full p-2.5 border border-accent rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" 
                        />
                        <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
                    </div>

                    <div>
                        <textarea 
                            v-model="form.message" 
                            placeholder="Sua Mensagem (mínimo 10 caracteres)" 
                            rows="3"
                            :class="{'border-red-500': errors.message}"
                            class="w-full p-2.5 border border-accent rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                        ></textarea>
                        <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
                        <p class="text-sm text-gray-500 mt-1">{{ form.message.length }}/10 caracteres mínimos</p>
                    </div>

                    <button 
                        type="submit" 
                        class="w-full bg-primary text-light py-2.5 rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center"
                        :disabled="loading"
                    >
                        <span v-if="loading" class="inline-block animate-spin mr-2">
                            ⚪
                        </span>
                        {{ loading ? 'Enviando...' : 'Enviar Mensagem' }}
                    </button>
                </div>
            </form>
        </div>
    </section>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white p-5 rounded-lg shadow-lg max-w-sm w-full mx-4">
            <div class="flex items-center justify-center mb-4" :class="isSuccess ? 'text-green-600' : 'text-red-600'">
                <span class="text-xl font-semibold text-center">{{ modalMessage }}</span>
            </div>
            <button @click="closeModal"
                class="mt-4 w-full bg-primary text-white py-2 rounded hover:bg-opacity-90 transition">
                Fechar
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'

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
