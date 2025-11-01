<template>
    <div class="msg" >
        <h4>{{ title }}</h4>
        <h4>{{ content }}</h4>
    </div>
</template>
<script>
export default {
    props:{
        title:String,
        content:{
            type:[Number,String],
            required:false,
            default:456,
            validator(value){
                console.log(value)
                return true
            }
        }
    }
}
</script>
