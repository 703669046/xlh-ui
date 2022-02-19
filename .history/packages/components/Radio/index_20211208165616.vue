<template>
    <el-radio v-model="radio" label="1">
        <slot></slot>
    </el-radio>
</template>

<script>
export default {
    props: {
        
        disabled:{
            type:Boolean,
            default:false
        },
    }
};
</script>