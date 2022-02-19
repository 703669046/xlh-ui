<template>
    <el-radio v-model="radio" :label="label">
        <slot></slot>
    </el-radio>
</template>

<script>
export default {
    props: {
        
        label:{
            type:Number,
            default:1
        },
        disabled:{
            type:Boolean,
            default:false
        },
    }
};
</script>