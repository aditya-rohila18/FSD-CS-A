import fs from 'fs'
const data = fs.readFileSync("data.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Error reading file", err)
    }
    else {
        console.log("Data=", data)
    }
})
console.log("Data=", data);