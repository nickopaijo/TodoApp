/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Button, TextField, Box, Typography } from '@mui/material'

function TodoForm (props) {
  const [inputData, setInputData] = useState('')

  const inputOnChangeHandler = (event) => {
    setInputData(event.target.value)
  }

  const formOnSubmitHandler = (event) => {
    event.preventDefault()
    props.fnAddTodos(inputData)
    setInputData('')
  }

  return (
    <Box sx={{ p: 2, border: '1px dashed grey' }}>
        <Typography variant="h5">Component ToDo</Typography>
        <form style={{ margin: '0.5em 1em', display: 'flex' }} onSubmit={formOnSubmitHandler}>
            <TextField
                style={{ marginRight: '0.5em' }} type="text" value={inputData}
                onChange={inputOnChangeHandler} label="Input Kerjaan Baru" size="small" variant="outlined" />
            <Button type="submit" variant="contained" size="large">
                Tambah Kerjaan.!
            </Button>
        </form>
    </Box>
  )
}

export default TodoForm
