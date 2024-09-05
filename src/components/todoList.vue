<template>
    <h3>todo list</h3>
    <input type="text" v-model="text" @keyup.enter="addTodo" placeholder="type a todo">
    <ul>
        <li v-for="todo in todos" :key="todo.id">
        <span :style="{textDecoration: todo.completed ? 'line-through':'none'}">{{todo.text}}</span>
        <button @click="removeTodo(todo.id)">remove</button>
        <button @click="toggleTodo(todo.id)">toggle</button>
        </li>
    </ul>
</template>

<script setup lang="js">
import {ref} from 'vue'
import {useTodoStore} from '../store/todoStore'

const todoStore = useTodoStore()
const text = ref('')

const addTodo = () => {
    if(text.value.trim()){
        todoStore.addTodo(text.value)
        text.value = ''
    }
}
const toggleTodo = (index) => {
    todoStore.toggleTodo(index)
}
const removeTodo = (index) => {
    todoStore.removeTodo(index)
}

const todos = todoStore.todos
</script>

<style lang="css" scoped></style>