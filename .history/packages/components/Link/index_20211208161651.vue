<template>
    <el-link :type="type" :target="target" :href="href">
        <slot></slot>
    </el-link>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: ""
        },
        href:{
            type:String,
            default:""
        },
        target:{
            type:String,
            default:""
        }
    }
};
</script>