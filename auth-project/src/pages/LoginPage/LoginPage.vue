<template>
    <card>
        <div class="login-page">
            <div class="title mb-43">Sign In</div>
            <login-form />
        </div>
    </card>
</template>

<script>
import Card from '../../components/Card/Card.vue'
import LoginForm from '../../components/LoginForm/LoginForm.vue'

export default {
    name: 'LoginPage',
    components: { Card, LoginForm }
}
</script>