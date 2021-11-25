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

        <br />
        <h2>朴素按钮</h2>
        <section class="sample">
            <x-button plain>默认按钮</x-button>
            <x-button type="success" plain>成功按钮</x-button>
            <x-button type="warning" plain>警告按钮</x-button>
            <x-button type="danger" plain>危险按钮</x-button>
            <x-button type="info" plain>信息按钮</x-button>
        </section>

        <br />
        <h2>圆角按钮</h2>
        <section class="sample">
            <x-button round>默认按钮</x-button>
            <x-button type="success" round>成功按钮</x-button>
            <x-button type="warning" round>警告按钮</x-button>
            <x-button type="danger" round>危险按钮</x-button>
            <x-button type="info" round>信息按钮</x-button>
        </section>

        <br />
        <h2>禁用按钮</h2>
        <section class="sample">
            <x-button disabled>默认按钮</x-button>
            <x-button type="success" disabled>成功按钮</x-button>
            <x-button type="warning" disabled>警告按钮</x-button>
            <x-button type="danger" disabled>危险按钮</x-button>
            <x-button type="info" disabled>信息按钮</x-button>
        </section>
    </div>
</template>


<style lang="less" scoped>
.sample {
    padding:15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>