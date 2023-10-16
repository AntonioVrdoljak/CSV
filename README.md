# CSV Merger

## Description

This script merges data from two CSV files and saves the merged content into a new CSV file.

## Usage

1. Ensure you have Node.js installed on your machine.
2. Clone this repository to your local machine.
3. Install the required dependencies: ``` npm install ```
4. Run the script to merge the CSV files and generate a new merged CSV file:
5. ```
   node index.js
   ```
   The merged CSV file will be saved as CSV_files/CSV3.csv.
   
## How it Works

- The script reads the content from CSV1.csv and CSV2.csv.
- It extracts relevant information and merges the data.
- The merged data is saved to a new CSV file, CSV3.csv.

### Dependencies

fs: File system module for reading and writing files.
