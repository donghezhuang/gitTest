<template>
    <div id="console-table">
        <el-table :data="items" border style="width: 100%">
            <el-table-column v-for="(index, key, header) in headers" :key="key" :prop="header.prop" :label="header.label" width="180"></el-table-column>
        </el-table>
    </div>
</template>

<script>

export default {
    name: "console-table",
    props: ['headers', 'items']
};
</script>