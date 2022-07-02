import React, { useEffect, useReducer } from 'react'
import ToDoForm from '../components/ToDoForm'
import ToDoTable from '../components/ToDoTable'
import { Box, Typography } from '@mui/material'
import Reducer from '../utils/Reducer'

const todoAwal = []

function ToDo () {
  const [todos, dispatch] = useReducer(Reducer, todoAwal)

  const addTodos = (newTodo) => {
    dispatch({
      type: 'tambah',
      name: newTodo
    })
  }

  const completeTodo = (idTodo) => {
    dispatch({
      type: 'hapus',
      id: idTodo
    })
  }

  useEffect(
    () => {
      const titleText = 'Todos: ' + todos.length
      document.title = titleText
    }, [todos]
  )

  return (
        <>
            <Box sx={{
              p: 2,
              border: '1px dashed grey',
              backgroundColor: '#f1f1f1',
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}>
                <Typography variant="h5" style={{ margin: '0.5em 1em' }}>Aplikasi Input Pekerjaan</Typography>
                <ToDoForm fnAddTodos={addTodos} />
                <ToDoTable todos={todos} fnCompleteTodo={completeTodo} />
            </Box>
        </>
  )
}

export default ToDo
