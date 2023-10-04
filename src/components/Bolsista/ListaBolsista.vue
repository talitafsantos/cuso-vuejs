<script setup lang="ts">
import { ref } from 'vue'

const bolsistas = ref([
  {
    id: 1,
    name: 'Messias Freire',
    project: 'Treinamento vue',
    educationLevel: 'Ensino Médio',
    email: 'messias.freirejr@outlook.com',
    status: 'burro'
  },
  {
    id: 2,
    name: 'Messias Freire',
    project: 'Treinamento vue',
    educationLevel: 'Ensino Médio',
    email: 'messias.freirejr@outlook.com',
    status: 'burro'
  },
  {
    id: 3,
    name: 'Messias Freire',
    project: 'Treinamento vue',
    educationLevel: 'Ensino Médio',
    email: 'messias.freirejr@outlook.com',
    status: 'burro'
  }
])
const columns = [
  { field: 'name', header: 'Nome' },
  { field: 'project', header: 'Projeto' },
  { field: 'educationLevel', header: 'Escolaridade' },
  { field: 'email', header: 'Escolaridade' },
  { field: 'status', header: 'Situação Cad' },
  { field: 'actions', header: 'Ação' }
]

const handleEditAction = () => {
  console.log('editou ')
}
const handleRemoveAction = () => {
  console.log('deletou')
}
</script>

<template>
  <section>
    <div v-for="bolsista in bolsistas" :key="bolsista.id">
      <span>{{ bolsista.name }}</span>
      <RouterLink :to="`/listar-bolsistas/${bolsista.id}`">Detalhes</RouterLink>
      <!-- <RouterLink :to="{name: 'detalhes' , params: {id: bolsista.id}}"></RouterLink> -->
    </div>
    <RouterView></RouterView>
  </section>
</template>

<style scoped>
span {
  color: black;
}
</style>
