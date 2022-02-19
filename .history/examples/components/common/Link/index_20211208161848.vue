<template>
    <div>
        <h2>Button 按钮</h2>
        <hr />
        <h2>默认按钮</h2>
        <section class="sample">
            <x-button>默认按钮</x-button>
            <x-button type="success">成功按钮</x-button>
            <x-button type="warning">警告按钮</x-button>
            <x-button type="danger">危险按钮</x-button>
            <x-button type="info">信息按钮</x-button>
        </section>
    </div>
</template>


<style lang="less" scoped>
.sample {
    padding:15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>