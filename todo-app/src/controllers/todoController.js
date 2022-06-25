import { Router } from 'express';
import todoService from '../services/todoService.js';

const todoController = Router()

todoController.get('/', async (_req, res) => {
  try {
    const todos = await todoService.getTodos()
    res.json(todos)
  } catch (error) {
    res.status(500).json({ error })
  }
})

todoController.post('/', async (req, res) => {
  try {
    const { text, important } = req?.body ?? {}
    if (!text) return res.status(404).json({ error: 'bad request' })
    const addedTodo = await todoService.addTodo({ text, important })
    return res.status(201).json(addedTodo)
  } catch (error) {
    res.status(500).json({ error })
  }
})

todoController.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await todoService.deleteTodo(id)
    res.status(204).json('ok')
  } catch (error) {
    res.status(500).json({ error })
  }
})

todoController.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const updatedTodo = await todoService.updateTodo(id, req.body)
    res.status(200).json(updatedTodo)
  } catch (error) {
    res.status(500).json({ error })
  }
})

export default todoController
