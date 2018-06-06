<style scoped>
    .dtest{
        margin: 3rem;
    }

    .icontest{
        width: 30px;
        height: 30px;
    }
</style>

<template>
    <div class="dtest">
        <h3>{{ title }}</h3>
        <h3>{{ ndate | convertDate }}</h3>
        <h3>{{ num | toceil}}</h3>
        <icon-svg icon-class="upper7" class="testicons"></icon-svg>
    </div>
</template>

<script>
export default {
    name: 'test',
    data() {
        return {
            title: 'this is a test demo!',
            ndate: '',
            num: 2.65
        }
    },
    mounted() {
        this.title = this.$moment().format('YYYY-MM-DD HH:mm:ss');
        this.ndate = this.$lodash.now();
    },
    methods: {
        add() {
            this.title = 'this no demo'
        }
    },
    filters: {
        toceil(num) {
            return Math.ceil(num);
        }
    }
}
</script>


