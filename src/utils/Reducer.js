// Di sini kita akan membuat fungsi reducer
// Yang akan menerima semua "pekerjaan yang bisa dilakukan dalam container ToDo"
export default function Reducer (todos, action) {
  switch (action.type) {
    case 'tambah': {
      // Perhatikan di sini kita TIDAK menggunakan state sama sekali

      // Logic ini mirip dengan function addTodo pada Container ToDo.jsx
      // hanya saja tidak menggunakan setState
      const newId = todos.length + 1

      const objTodo = {
        id: newId,
        // Perhatikan di sini menggunakan action.name
        name: action.name,
        isCompleted: false
      }

      return [...todos, objTodo]
    }
    case 'hapus': {
      // Logic ini mirip dengan function completeTodo pada Container ToDo.jsx
      // hanya saja tidak menggunakan set state
      return todos.map((todo) => {
        // Perhatikan di sinin menggunakan action.id
        if (todo.id === action.id) {
          todo.isCompleted = true
        }

        return todo
      })
    }
    // Apabila salah nama aksi
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
