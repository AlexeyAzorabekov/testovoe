<template>
    <card>
        <div class="register-page">
            <div class="title mb-43">Sign Up</div>
            <register-form />
        </div>
    </card>
</template>

<script>
import Card from '../../components/Card/Card.vue'
import RegisterForm from '../../components/RegisterForm/RegisterForm.vue'

export default {
    name: 'RegisterPage',
    components: { Card, RegisterForm }
}
</script>