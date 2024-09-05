import { defineStore } from 'pinia'
import {v4 as uuidv4} from 'uuid'
import {ref} from 'vue'

export const useTodoStore = defineStore('todo', {
    //pinia
    state: () => ({
        todos: [],
    }),
    actions: {
        addTodo(text){
            this.todos.push({id: uuidv4(), text, completed: false})
        },
        toggleTodo(index){
            const todo = this.todos.find((todo) => todo.id == index)
            todo && (todo.completed == !todo.completed)
        },
        removeTodo(index){
            const todo = this.todos.findIndex((todo) => todo.id == index)
            todo !== 1 && this.todos.splice(todo, 1)
        },
    },

    // const todos = ref([])

    // const addTodo = (text) => {
    //     todos.value.push({id: uuidv4(), text, completed: false})
    // }
    // const toggleTodo = (index) => {
    //     todos.value.find(todo => todo.id == index).completed = !todos.value.find(todo => todo.id == index).completed
    // }
    // const removeTodo = (index) => {
    //     const todo = todos.value.findIndex((todo) => todo.id == index)
    //     if(todo !== -1) todos.value.splice(todo, 1)
    // }

    // return {todos, addTodo, toggleTodo, removeTodo}
})