import fs from 'fs';

const get = () => {
  fs.readFile('data.txt', (err, data) => {
    if (err) console.log(err)
    const result = data.toString() === "" ? null : data.toString()
    console.log(result)
    return data
  })
}

const save = (value: number) => {
  fs.writeFile("data.txt", value.toString(), {}, (err) => {
    if (err) console.log(err)
    console.log("The file has been saved.")
  })
}

export default { get, save }