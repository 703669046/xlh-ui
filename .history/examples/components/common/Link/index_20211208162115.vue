<template>
    <div>
        <h2>link文字链接</h2>
        <hr />
        <h2>基本用法</h2>
        <section class="sample">
            <x-link href="https://xement.xeme.io" target="_blank">默认链接</x-link>
            <x-link type="primary">主要链接</x-link>
            <x-link type="success">成功链接</x-link>
            <x-link type="warning">警告链接</x-link>
            <x-link type="danger">危险链接</x-link>
            <x-link type="info">信息链接</x-link>
        </section>
    </div>
</template>


<style lang="less" scoped>
.sample {
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>