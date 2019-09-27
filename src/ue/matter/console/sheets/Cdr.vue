<template>
    <div id="Cdr">
        <el-select v-model="selectedOptVal" placeholder="请选择">
            <el-option v-for="opt in productOpts" :key="opt.value" :label="opt.label" :value="opt.value"></el-option>
        </el-select>
        <el-table :data="items" border style="width: 100%">
            <el-table-column v-for="identify in identifies" :key="identify.id" :prop="identify.id" :label="identify.label" width="180"></el-table-column>
        </el-table>
    </div>
</template>

<script>
import apis from '@/apis/matter/console'
export default {
    props: ['cstDictionay'],
    data() {
        return {
            "selectedOptVal": "1"
        }
    },
    computed: {
        productOpts() {
            return this.cstDictionay[this.selectedOptVal]
        },
        identifies() {
            return this.cstDictionay[this.selectedOptVal]
        }
    },
    mounted () {
        this.$tmsOn('main-loaded', async () => {
            try {
                let result = await apis.getBillItems();
                this.items = result;
            } catch (e) {
                this.$message({
                    message: e,
                    type: 'error',
                    duration: 60000,
                    showClose: true
                })
            } 
        })
    },
    watch: {

    },
    methods: {

    }
};
</script>