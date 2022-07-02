/* eslint-disable react/prop-types */
import React from 'react'
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material'

function ToDoTable (props) {
  const btnOnClickHandler = (todoId) => {
    props.fnCompleteTodo(todoId)
  }

  return (
        <Table sx={{ maxWidth: 500, margin: '0.5em 1em' }}>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.todos.map((todo) => (
                    <TableRow key={todo.id}>
                        <TableCell>{todo.id}</TableCell>
                        <TableCell>{todo.name}</TableCell>
                        <TableCell>
                            {todo.isCompleted ? 'Selesai' : 'Belum Selesai'}
                        </TableCell>
                        <TableCell>
                            {todo.isCompleted
                              ? ('')
                              : (
                                <Button variant="contained" onClick={() => btnOnClickHandler(todo.id)}>
                                    Selesaikan
                                </Button>
                                )}
                        </TableCell>
                    </TableRow>
                )
                )}
            </TableBody>
        </Table>
  )
}

export default ToDoTable
