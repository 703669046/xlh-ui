<template>
    <div>
        <h2>link文字链接</h2>
        <hr />
        <h2>基本用法</h2>
        <section class="sample">
            <x-link href="http://xlh-ui.codehauler.cn" target="_blank">默认链接</x-link>
            <x-link type="primary">主要链接</x-link>
            <x-link type="success">成功链接</x-link>
            <x-link type="warning">警告链接</x-link>
            <x-link type="danger">危险链接</x-link>
            <x-link type="info">信息链接</x-link>
            <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <docu-block :height="160">
                        <md-link></md-link>
                    </docu-block>
                </el-col>
            </el-row>
        </section>
    </div>
</template>


import docuBlock from "../../page/docuBlock";
export default {
    components: {
        docuBlock
    },
}
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
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>