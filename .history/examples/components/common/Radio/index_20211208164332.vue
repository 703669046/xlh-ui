<template>
    <div>
        <h2>Button 按钮</h2>
        <hr />
        <h2>默认按钮</h2>
        <section class="sample">
            <el-row>
                <el-col :xs="24" :sm="24" :md="19" :lg="19" :xl="19">
                    <x-button>默认按钮</x-button>
                    <x-button type="success">成功按钮</x-button>
                    <x-button type="warning">警告按钮</x-button>
                    <x-button type="danger">危险按钮</x-button>
                    <x-button type="info">信息按钮</x-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <docu-block :height="170">
                        <md-button></md-button>
                    </docu-block>
                </el-col>
            </el-row>
        </section>
    </div>
</template>

<script>
import docuBlock from "../../page/docuBlock";
export default {
    components: {
        docuBlock
    }
};
</script>

<style lang="less" scoped>
.sample {
    padding:15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>