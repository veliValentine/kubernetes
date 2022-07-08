import fs from 'fs'

export const writeToFile = (file, content) => {
	fs.writeFileSync(file, JSON.stringify(content))
}