<template>
    <div>
        <el-menu default-active="/Button" :router="true" @open="handleOpen" @close="handleClose">
            <el-menu-item v-for="(item,index) in navigation" :key="index" :index="item.to">
                <i class="el-icon-menu"></i>
                <span slot="title" @click="handleClick">{{item.title}}</span>
            </el-menu-item>
        </el-menu>
        
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            list: []
        };
    },
    computed: {
        ...mapGetters(["navigation"])
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClick(){
            console.log(434)
        }
    }
};
</script>
