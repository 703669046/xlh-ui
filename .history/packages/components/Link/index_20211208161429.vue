<template>
    <el-link :type="">
        <slot></slot>
    </el-link>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: ""
        }
    }
};
</script>