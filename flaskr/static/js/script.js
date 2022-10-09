// check if any task addition button is pressed
const todo_add = document.getElementById('add-todo')
const prog_add = document.getElementById('add-prog')
const upcoming_add = document.getElementById('add-upcoming')
const urgent_add = document.getElementById('add-urgent')

todo_add.addEventListener('click', event => {
        alert('todo clicked')
})

prog_add.addEventListener('click', event => {
        alert('prog clicked')
})

upcoming_add.addEventListener('click', event=>{
        alert('upcoming clicked')
})

urgent_add.addEventListener('click', event => {
        alert('urgent clicked')
})