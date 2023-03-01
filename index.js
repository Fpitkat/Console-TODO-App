// Testing VS Code Web

const todos = ['collect chicken eggs', 'clean litter boxes']

let input = prompt('What would you like todo?')

while (input !== 'quit' && input !== 'q') {
  if (input === 'list') {
    console.log('************')
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`)
    }
    console.log('************')
  } else if (input === 'new') {
    const newTodo = prompt('What would you like add?')
    todos.push(newTodo)
    console.log(`${newTodo} added to your list`)
  } else if (input === 'delete') {
    const index = parseInt(prompt('What index to delete?'))

    if (Number.isNaN(index)) {
      console.log('Please enter a valid index')
    } else {
      const deleted = todos.splice(index, 1)
      console.log(`${deleted} has been removed from your list`)
    }
  }
  input = prompt('What would you like todo?')
}

console.log('You quit the app')
