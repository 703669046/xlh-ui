<template>
    <el-link>
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