const academicStaff = require('./academicStaff');
const nonAcademicStaff = require('./nonAcademicStaff');
const students = require('./students');

function getNewId(dataArray, alphabetic) {
    let maxId = 0;
    dataArray.forEach(item => {
        // Extract the numeric part of the ID
        const idNumber = parseInt(item.id.replace(`${alphabetic}-`, ''));
        // Update maxId if the current idNumber is greater
        if (idNumber > maxId) {
            maxId = idNumber;
        }
    });
    // Generate new ID by incrementing maxId
    const newIdNumber = maxId + 1;
    // Ensure the ID is in the correct format (e.g., ACSE-011)
    const newId = alphabetic + '-' + String(newIdNumber).padStart(3, '0');
    return newId;
}

module.exports = { academicStaff, nonAcademicStaff, students, getNewId };