<template>
   <card>
       <template>
           <div class="first-slide">
               <div class="title">
                    Ready for a great User experience?
                </div>
                <div class="sub-title">
                    Bring your media to the next level!
                </div>
                <div class="buttons" @click="nextSlide">
                    <div class="buttons__text">Sign Up</div>
                    <div class="buttons__arrow">
                        <img src="../../assets/svg/arrow_forward.svg" alt="arrow" />
                    </div>
                </div>
                <div class="images">
                    <img src="../../assets/images/woman.png" alt="woman" class="image"/>
                 </div>
           </div>
       </template>
   </card>
</template>

<script>
import Card from '../../components/Card/Card.vue'
export default {
    name: 'EntryPage',
    components: {
        Card
    },
    methods: {
        nextSlide() {
            this.$router.push({name: 'Register'})
        }
    }
}
</script>

<style lang="scss">
    @import 'EntryPage'
</style>