import { Router } from 'express';
import todoService from '../services/todoService.js';

const todoController = Router()

todoController.get('/', (_req, res) => {
  const todos = todoService.getTodos()
  res.json(todos)
})

todoController.post('/', (req, res) => {
  const { text } = req?.body ?? {}
  if (!text) return res.status(404).json({ error: 'bad request' })
  const addedTodo = todoService.addTodo({ text })
  return res.status(201).json(addedTodo)
})

export default todoController
