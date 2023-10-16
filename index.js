const fs = require("fs")

const csv1Path = "./CSV_files/CSV1.csv"
const csv2Path = "./CSV_files/CSV2.csv"
const mergedCsvPath = "./CSV_files/CSV3.csv"

function mergeCSV() {
  try {
    const csv1Content = fs.readFileSync(csv1Path, "utf8")
    const csv2Content = fs.readFileSync(csv2Path, "utf8")

    if (csv1Content.trim() === "" || csv2Content.trim === "")
      return console.log("Check the content of csv file!")

    const csv1Lines = csv1Content.split("\n").map((line) => line.trim())
    const csv2Lines = csv2Content.split("\n").map((line) => line.trim())

    const header = "group name phoneNumber"

    const mergedData = []
    for (let i = 1; i < csv1Lines.length; i++) {
      const csv1Values = csv1Lines[i].split(" ")
      const csv2Values = csv2Lines[i].split(" ")
      const mergedRow = `${csv1Values[0]} ${csv1Values[1]} ${csv2Values[1]}`
      mergedData.push(mergedRow)
    }

    const mergedContent = [header, ...mergedData].join("\n")

    fs.writeFileSync(mergedCsvPath, mergedContent)
    console.log("Merged CSV saved to", mergedCsvPath)
  } catch (error) {
    console.error("Error merging CSV:", error)
  }
}

mergeCSV()
