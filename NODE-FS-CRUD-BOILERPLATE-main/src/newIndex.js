const { myFileWriter, myFileUpdater, myFileReader, myFileDeleter } = require('./index.js');
// Create a new file
myFileWriter('./index.txt','Hello World!')
  .then(() => console.log('File created successfully'))
  .catch((err) => console.error(`Error creating file: ${err}`));

// Read the file
myFileReader('./index.txt')
  .then((data) => console.log(`File content: ${data}`))
  .catch((err) => console.error(`Error reading file: ${err}`));

// Update the file
myFileUpdater('./index.txt',', Hey Manohar!')
  .then(() => console.log('File updated successfully'))
  .catch((err) => console.error(`Error updating file: ${err}`));

// Delete the file
myFileDeleter('./index.txt')
  .then(() => console.log('File deleted successfully'))
  .catch((err) => console.error(`Error deleting file: ${err}`));
