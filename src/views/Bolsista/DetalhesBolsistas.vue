<script setup lang="ts">
    import { onMounted } from 'vue'
    import { useRoute } from 'vue-router'

    const { params } = useRoute()

    onMounted(()=>{
        console.log(params)
    })
</script>


<template>
    <div>
        Detalhes sobre o Bolsista id {{ params.id }}

        <button @click="$router.push('/listar-bolsistas')"> voltar </button>

    </div>
</template>

<style scoped>
div {
    color: black;
}
</style>