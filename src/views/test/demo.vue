<style scoped>
    .dtest{
        margin: 3rem;
    }
</style>

<template>
    <div class="dtest">
        <h3>{{ title }}</h3>
    </div>
</template>

<script>
export default {
    name: 'test',
    data() {
        return {
            title: 'this is a test demo!'
        }
    },
    mounted() {
        this.title = this.$moment().format('YYYY-MM-DD HH:mm:ss');
    },
    methods: {
        add() {
            this.title = 'this no demo'
        }
    }
}
</script>


