<template>
    <card>
        <div class="title">Hello, {{fullName ? fullName : 'John Doe!'}}!</div>
        <div class="images">
            <img 
                src="../../assets/images/main-slide.png" 
                alt="main-slide"
                class="image" 
            />
        </div>
    </card>
</template>

<script>
import Card from '../../components/Card/Card.vue'
export default {
    name: 'MainPage',
    components: { Card },
    data() {
      return {
        fullName: ''
      }
    },
    mounted() {
      this.fullName = JSON.parse(localStorage.getItem('user_info'))?.fullName;
    }
}
</script>