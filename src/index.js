const fs = require('fs/promises')
const fName = "myfile.txt"
const fContent = "I wrote something'"

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	await fs.writeFile(fileName,fileContent)
	// dont chnage function name
}
myFileWriter(fName, fContent)


const myFileReader = async (fileName) => {
	// write code here
	const content = await fs.readFile(fileName)
	return content.toString();
	// dont chnage function name
}
myFileReader(fName).then(a=>console.log(a))


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	return await fs.appendFile(fileName, fileContent)
	// dont chnage function name
}
myFileUpdater(fName, "\nnew Content")


const myFileDeleter = async (fileName) => {
	// write code here
	return await fs.unlink(fileName)
	// dont chnage function name
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
