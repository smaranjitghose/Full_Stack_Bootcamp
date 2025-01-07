// Note: Each operation should be perfomed synchronously as well as asynchronously. Take screenshots too for the PR
const fs = require('fs');

// Synchronous

// 1. Create a folder space_project
fs.mkdirSync('space_project');

// 2. Inside the folder, create a file log.txt and add the line "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft."
fs.writeFileSync('space_project/log.txt', 'ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.');

// 3.Now, replace the line in the log.txt file with "ISRO has started working on Gaganyaan."
fs.writeFileSync('space_project/log.txt', 'ISRO has started working on Gaganyaan.');

// 4. Append another line to the log.txt file " The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission."
fs.appendFileSync('space_project/log.txt', ' The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.');

// 5. Rename the log.txt file to update.txt
fs.renameSync('space_project/log.txt', 'space_project/update.txt');

// 6. Read the update.txt file and display the data. Additionally print a line "We are excited" using console.log() after the read operation
const data = fs.readFileSync('space_project/update.txt', 'utf8');

// 7. Delete the file update.txt
fs.unlinkSync('space_project/update.txt');

// 8. Delete the folder space_project
fs.rmdirSync('space_project');

// Asynchronous

// 1. Create a folder space_project
fs.mkdir('space_project', (err) => {
    if (err) throw err;
    console.log('Folder created successfully');
});

// 2. Inside the folder, create a file log.txt and add the line "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft."
fs.writeFile('space_project/log.txt', 'ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.', (err) => {
    if (err) throw err;
    console.log('File created successfully');
});

// 3.Now, replace the line in the log.txt file with "ISRO has started working on Gaganyaan."
fs.writeFile('space_project/log.txt', 'ISRO has started working on Gaganyaan.', (err) => {
    if (err) throw err;
    console.log('File updated successfully');
});

// 4. Append another line to the log.txt file " The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission."
fs.appendFile('space_project/log.txt', ' The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.', (err) => {
    if (err) throw err;
    console.log('Data appended successfully');
});

// 5. Rename the log.txt file to update.txt
fs.rename('space_project/log.txt', 'space_project/update.txt', (err) => {
    if (err) throw err;
    console.log('File renamed successfully');
});

// 6. Read the update.txt file and display the data. Additionally print a line "We are excited" using console.log() after the read operation
fs.readFile('space_project/update.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    console.log('We are excited');
});

// 7. Delete the file update.txt
fs.unlink('space_project/update.txt', (err) => {
    if (err) throw err;
    console.log('File deleted successfully');
});

// 8. Delete the folder space_project
fs.rmdir('space_project', (err) => {
    if (err) throw err;
    console.log('Folder deleted successfully');
});