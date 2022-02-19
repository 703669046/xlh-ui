<template>
    <div>
        <h2>link文字链接</h2>
        <hr />
        <h2>默认按钮</h2>
        <section class="sample">
            <x-link>默认按钮</x-link>
            <x-link type="success">成功按钮</x-link>
            <x-link type="warning">警告按钮</x-link>
            <x-link type="danger">危险按钮</x-link>
            <x-link type="info">信息按钮</x-link>
        </section>
    </div>
</template>


<style lang="less" scoped>
.sample {
    padding:15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>