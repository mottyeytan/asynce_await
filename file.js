// import { readFile, readdir , stat} from 'fs'

const fs = require('fs/promises');

//1
//  function readFilePromise(path) {
//     return new Promise((res, rej) => {
//         fs.readFile(path, 'utf-8', (err, data) =>{
//             if(err){
//                 rej(err)
//             }else{
//                 res(data)
//             }
        
//         })
//     })
    
            
// }

// readFilePromise('a.txt').then(res => console.log(res))

//2

// async function readFileAsync(path) {
//     return fs.promises.readFile(path, 'utf-8')   
// }

// readFileAsync('a.txt').then(res=>console.log(res))


//3
// async function getFileSize(path){
//     const data =await fs.promises.stat(path)
//     const size = data.size
//     return size 
// }

// getFileSize('a.txt').then(res=>console.log(res))

//4

// async function listFiles(dir){
//     const data = await fs.promises.readdir(dir)
//     return data
// }

// listFiles('./').then(res=>console.log(res))

//5

// async function readFilesInOrder(files){
//      for (let file of files){
//         const data = await fs.promises.readFile(file, 'utf-8')
//         console.log(data)
        

//      }
// }

// readFilesInOrder([ 'a.txt', 'b.txt' ])

//6

// async function readFilesParallel(files){
//     try{
//         const promises = files.map(file=>fs.promises.readFile(file, 'utf-8'))

//         const read = await Promise.all(promises)

//         read.forEach(f => console.log(f))


//     }catch(err){console.log(err)}
// }

// readFilesParallel([ 'a.txt', 'b.txt' ])

//7

// async function isFileExist(path){
//     try{
//         const check = await fs.promises.access(path);
//         return true 
//     }catch(err){return false}
// }

// isFileExist('t.txt').then(d=>console.log(d))

//8

// async function copyFile(src, dest){
//     try{
//         const copy = await fs.promises.readFile(src, 'utf-8')

//         const paste = await fs.promises.writeFile(dest, copy)
//     }catch(err){console.log(err)}
// }

// copyFile('a.txt', 't.txt')

//9

async function mergeFiles(files, output) {
    const merge = await Promise.all( files.map(file=> fs.readFile(file, 'utf-8')))

    const combine = merge.join('\n')

    await fs.writeFile(output, combine, 'utf-8');
}

mergeFiles(['a.txt', 'b.txt'], 't.txt')











