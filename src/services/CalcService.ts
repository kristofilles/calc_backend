import fs from 'fs';

const get = () => {
  const result = fs.readFileSync('data.txt')
  return result.toString()
}

const save = (value: number) => {
  fs.writeFile("data.txt", value.toString(), {}, (err) => {
    if (err) console.log(err)
    console.log("The file has been saved.")
  })
}

export default { get, save }