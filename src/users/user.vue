<template>
    <h3>users</h3>
    <ul>
        <li v-for="user in users" :key="user.id">{{user.name}}</li>
    </ul>
    <TodoList></TodoList>
</template>
  
<script setup lang="js">
import {ref, onMounted} from 'vue'
import axios from 'axios'

const users = ref([])

const getUsers = async () => {
    try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    users.value = response.data
    } catch (error) {
        console.error(error)
    }
}

onMounted(getUsers)
</script>
  
<style lang="css" scoped></style>