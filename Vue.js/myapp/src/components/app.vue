<template>
    <div class="image-container">
        <div class="top">
            <img v-bind:src="image" class="display"/>
            <!-- <img v-bind:src="image" class="display"/> -->
        </div>
        <div class="left" @click="getSrc">
            <img src="img/4.jpg" alt="">
        </div>
        <div class="right" @click="getSrc">
            <!-- <button>show/hide</button> -->
            <img src="img/hero.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            image: ""
        }
    },
    methods:{
        getSrc(event){
            console.log(event)
            let src = event.target.getAttribute('src')
            this.image = src;
        }
    }
}
</script>

<style lang='scss'>
.image-container{
    width: 70vh;
    margin: 40px auto;
    img {
        height: 70vh;
        object-fit: cover;
    }
}
.top{
    // min-height: 400px;
}

</style>
