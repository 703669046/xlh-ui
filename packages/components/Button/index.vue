<template>
    <el-button :type="type" :plain="plain" :round="round" :disabled="disabled">
        <slot></slot>
    </el-button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: ""
        },
        plain:{
            type:Boolean,
            default:false,
        },
        round:{
            type:Boolean,
            default:false,
        },
        disabled:{
            type:Boolean,
            default:false,
        }
    }
};
</script>