<template>
    <div class="x-contaner">
        <el-row>
            <el-col class="x-contaner-aside" :xs="24" :sm="3" :md="3" :lg="4" :xl="4">
                <aside>
                    <navigation />
                </aside>
            </el-col>
            <el-col class="x-contaner-main"  :xs="24" :sm="19" :md="19" :lg="19" :xl="19">
                <section >
                    <router-view></router-view>
                </section>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import navigation from "../components/page/sideNavigation";
export default {
    data() {
        return {};
    },
    components: {
        navigation
    }
};
</script>

<style lang="less" scoped>
.x-contaner {
    width: 100%;
    &-main{
        box-sizing: border-box;
        padding-left:30px;
    }
}
</style>