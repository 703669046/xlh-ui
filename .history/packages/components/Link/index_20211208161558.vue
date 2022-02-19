<template>
    <el-link :type="" >
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
            default:"_blank"
        }
    }
};
</script>