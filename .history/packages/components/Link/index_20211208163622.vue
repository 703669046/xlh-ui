<template>
    <el-link :type="type" :target="target" :href="href" :disabled="disabled" :underline="underline">
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
        },
        disabled:{
            type:Boolean,
            default:false
        },
        underline:{
            type:Boolean,
            default:false
        }
    }
};
</script>