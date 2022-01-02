<template>
    <div class="form">
        <div v-if="message" class="form__message">{{message}}</div>
        <form @submit="handleSubmit">
            <div class="form__field">
                <label>Full name</label>
                <input 
                    type="text" 
                    v-model="formData.fullName"
                    :class="(error.fullName) ? 'form-error' : ''"
                />
                <span v-if="error.fullName" class="form-danger">
                   {{ error.fullName }}
                </span>
            </div>
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
            <div class="form__field">
                <label>Repeat password</label>
                <input 
                    type="password" 
                    v-model="formData.repeatPassword"
                     :class="(error.repeatPassword) ? 'form-error' : ''"
                />
                <span v-if="error.repeatPassword" class="form-danger">
                   {{ error.repeatPassword }}
                </span>
            </div>
            <button type="submit" class="form__submit">
                Sign Up
            </button>
        </form>
        <div class="form__text">
            Already have an account? 
            <span
                @click="$router.push({ name: 'Login' })"
                class="form__text-decoration"
            >Sign In</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterForm',
    data() {
      return {
         formData: {
            fullName: '',
            email: '',
            password: '',
            repeatPassword: ''
         },
         error: {
            fullName: '',
            email: '',
            password: '',
            repeatPassword: ''
         },
         message: '',
         isValid: false
      }
    },
    methods: {
        withOutError() {
          return this.formData.email !== '' &&
                 this.formData.password !== '' &&
                 this.formData.fullName !== '' &&
                 this.formData.repeatPassword !== '' &&
                 this.isValid
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

        validEmail(email) {
            const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regexp.test(email)
        },

        validFullName(fullName) {
            const regexp = /^\w{6}\s\w{6}$/
            return regexp.test(fullName)
        },

        validPassword(password) {
          const regexp = /^\w{8}[A-Z]{2}\*|\+$/
          return regexp.test(password)
        },

        validateFormData (action) {
        if (action.type === 'fullName') {
            if (!this.validFullName(action.payload)) {
                this.error.fullName = 'Please enter a valid fullName';
                this.isValid = false
            } else {
                this.error.fullName = ''
                this.isValid = true
            }
          }


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
            } else {
                this.error.password = ''
            }
          }

          if (action.type === 'repeatPassword') {
            if (this.formData.password !== this.formData.repeatPassword) {
                this.error.repeatPassword = 'Please enter valid repeat password'
                this.isValid = false
            } else {
               this.error.repeatPassword = ''
               this.isValid = true
            }
          }
        }
    },
    watch: {
        'formData.email': function(val) {
            this.validateFormData({type: 'email', payload: val})
        },

        'formData.password': function(val) {
            this.validateFormData({type: 'password', payload: val})
        },

        'formData.repeatPassword': function(val) {
            this.validateFormData({type: 'repeatPassword', payload: val})
        },

        'formData.fullName': function(val) {
            this.validateFormData({type: 'fullName', payload: val})
        }
    }
}
</script>