import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: {
            list: [
                {
                    name: "Take car", 
                    priority: "low"
                },
                {
                    name: "Go to Mum's",
                    priority: "high"
                },
                {
                    name: "Kill Phil",
                    priority: "low"
                },
                {
                    name: "Grab Liz",
                    priority: "high"
                }
            ],
            todoItem: "",
            priorityItem: ""
        },
        methods: {
            changePriorityHigh: function () {
                return "High";
            },
            newTodoSubmit: function () {
                this.list.push({
                    name: this.todoItem,
                    priority: this.priorityItem
                })
                this.todoItem = "";
                this.priorityItem = "";
            }
        }
    })
})