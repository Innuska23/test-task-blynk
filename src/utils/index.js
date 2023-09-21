import { customAlphabet } from 'nanoid'

export const generateItemId = customAlphabet('1234567890', 8)

export const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;