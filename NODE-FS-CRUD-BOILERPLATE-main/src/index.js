const fs = require('fs/promises');
const myFileWriter = async (fileName, fileContent) => {
  await fs.writeFile(fileName, fileContent)
}
const myFileReader = async (fileName) => {
  const fileContent = await fs.readFile(fileName, 'utf-8')
  return fileContent
}
const myFileUpdater = async (fileName, fileContent) => {
  const existingContent = await myFileReader(fileName)
  const newContent = existingContent + fileContent
  await fs.writeFile(fileName, newContent)
}
const myFileDeleter = async (fileName) => {
  await fs.unlink(fileName);
}
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
