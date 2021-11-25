<template>
    <div class="show-box">
        <div :id="id" class="show-box-code markdown-body">
            <slot></slot>
        </div>
        <x-button class="show-box-btn" @click="handleTrigger">{{title}}</x-button>
    </div>
</template>

<script>
// import codeDom from "./doc";
export default {
    props: {
        componentName: {
            type: String,
            default: ""
        },
        height: {
            type: Number,
            default: 300
        }
    },
    data() {
        return {
            display: false,
            id: this.createRandomId(),
            title: "显示代码"
        };
    },
    // components: { codeDom },
    methods: {
        handleTrigger() {
            this.display = !this.display;
            if (this.display) {
                this.title = "隐藏代码";
                $(`#${this.id}`).animate({ height: `${this.height}px` }, 600);
            } else {
                this.title = "显示代码";
                $(`#${this.id}`).animate(
                    {
                        height: "0"
                    },
                    600
                );
            }
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
.show-box {
    width: 100%;
    margin-top: 20px;
    &-code {
        // display: none;
        overflow: hidden;
        height: 0;
        background-color: #f6f8fa;
    }
    &-btn {
        width: 100%;
    }
}
</style>