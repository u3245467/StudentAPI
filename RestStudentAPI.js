const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Read student data from JSON file
const students = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'Students.json'), 'utf8')
);

// GET all students
app.get('/GetStudents', (req, res) => {
    res.json(students);
});

// GET one student by ID
app.get('/GetStudent/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (student) {
        res.json(student);
    } else {
        res.status(404).json({
            message: 'Student not found'
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});