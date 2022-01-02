<template>
    <div  class="form">
        <div v-if="message" class="form__message">{{message}}</div>
        <form @submit="handleSubmit">
            <div class="form__field">
                <label>Email</label>
                <input 
                    type="email" 
                    v-model="formData.email"
                     :class="(error.email) ? 'form-error' : ''"
                />
                <span v-if="error.email" class="form-danger">
                   {{ error.email }}
                </span>
            </div>
            <div class="form__field">
                <label>Password</label>
                <input 
                    type="password" 
                    v-model="formData.password"
                     :class="(error.password) ? 'form-error' : ''"
                />
                <span v-if="error.password" class="form-danger">
                   {{ error.password }}
                </span>
            </div>
            <button type="submit" class="form__submit">
                Sign In
            </button>
        </form>
        <div class="form__text">
            Don’t have an account yet? 
                <span
                    @click="$router.push({ name: 'Register' })"
                    class="form__text-decoration"
                >Sign Up</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data() {
      return {
         formData: {
            email: '',
            password: ''
         },
         error: {
            email: '',
            password: '',
         },
         message: '',
         isValid: false
      }
    },
    methods: {
         withOutError() {
          return this.formData.password !== '' &&
                 this.formData.email !== '' &&
                 this.isValid
        },

        validEmail(email) {
            const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regexp.test(email)
        },

        validPassword(password) {
          const regexp = /^\w{8}[A-Z]{2}\*|\+$/
          return regexp.test(password)
        },

        validateFormData (action) {
            if (action.type === 'email') {
                if (!this.validEmail(action.payload)) {
                    this.error.email = 'Please enter a valid email address';
                    this.isValid = false
                } else {
                    this.error.email = ''
                    this.isValid = true
                }
            }
            
            if (action.type === 'password') {
                if (!this.validPassword(action.payload)) {
                    this.error.password = 'Please enter valid password'
                    this.isValid = false
                } else {
                    this.error.password = ''
                    this.isValid = true
                }
            }
        },


        handleSubmit(e) {
            e.preventDefault()
            if (this.withOutError()) {
                localStorage.setItem('user_info', JSON.stringify(this.formData))
                this.$router.push({name: 'Main'}, () => {})
            } else {
               this.message = 'Заполните форму...'
            }
        },
    },
    watch: {
        'formData.email': function(val) {
            this.validateFormData({type: 'email', payload: val})
        },

        'formData.password': function(val) {
            this.validateFormData({type: 'password', payload: val})
        }
    }
}
</script>