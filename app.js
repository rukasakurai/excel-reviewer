const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const app = express();
const port = 3000;

// Serve HTML for the front-end
app.get('/', (req, res) => {
    res.send(`
        <form action="/upload" method="post" enctype="multipart/form-data">
            <input type="file" name="excelFile" />
            <input type="submit" value="Upload and Analyze" />
        </form>
    `);
});

// Handle file upload and processing
app.post('/upload', upload.single('excelFile'), (req, res) => {
    // Here, you would add the code to read the Excel file
    // and call Azure OpenAI for analysis
    res.send('File uploaded and analysis started');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
