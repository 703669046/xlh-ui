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

        <br />
        <h2>朴素按钮</h2>
        <section class="sample">
            <el-row>
                <el-col :xs="24" :sm="24" :md="19" :lg="19" :xl="19">
                    <x-button plain>默认按钮</x-button>
                    <x-button type="success" plain>成功按钮</x-button>
                    <x-button type="warning" plain>警告按钮</x-button>
                    <x-button type="danger" plain>危险按钮</x-button>
                    <x-button type="info" plain>信息按钮</x-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <docu-block :height="170">
                        <md-buttonPlain></md-buttonPlain>
                    </docu-block>
                </el-col>
            </el-row>
        </section>

        <br />
        <h2>圆角按钮</h2>
        <section class="sample">
            <el-row>
                <el-col :xs="24" :sm="24" :md="19" :lg="19" :xl="19">
                    <x-button round>默认按钮</x-button>
                    <x-button type="success" round>成功按钮</x-button>
                    <x-button type="warning" round>警告按钮</x-button>
                    <x-button type="danger" round>危险按钮</x-button>
                    <x-button type="info" round>信息按钮</x-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <docu-block :height="170">
                        <md-buttonRound></md-buttonRound>
                    </docu-block>
                </el-col>
            </el-row>
        </section>

        <br />
        <h2>禁用按钮</h2>
        <section class="sample">
            <el-row>
                <el-col :xs="24" :sm="24" :md="19" :lg="19" :xl="19">
                    <x-button disabled>默认按钮</x-button>
                    <x-button type="success" disabled>成功按钮</x-button>
                    <x-button type="warning" disabled>警告按钮</x-button>
                    <x-button type="danger" disabled>危险按钮</x-button>
                    <x-button type="info" disabled>信息按钮</x-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <docu-block :height="270">
                        <md-buttonDisabled></md-buttonDisabled>
                    </docu-block>
                </el-col>
            </el-row>
        </section>

        <br />
        <h2>文字按钮</h2>
        <section class="sample">
            <el-row>
                <el-col :xs="24" :sm="24" :md="19" :lg="19" :xl="19">
                    <x-button type="text" >文字按钮</x-button>
                    <x-button type="text" disabled>文字按钮</x-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <docu-block :height="120">
                        <md-buttonText></md-buttonText>
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
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            console.log(this.createRandomId());
        },
        createRandomId() {
            return (
                (Math.random() * 10000000).toString(16).substr(0, 4) +
                "-" +
                new Date().getTime() +
                "-" +
                Math.random()
                    .toString()
                    .substr(2, 5)
            );
        }
    }
};
</script>
<style lang="less" scoped>
.sample {
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>