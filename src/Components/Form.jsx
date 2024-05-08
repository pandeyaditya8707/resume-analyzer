import React, { useState } from 'react';
import { Button, Container, Grid, Typography, TextField, Paper } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Form = ({ onSubmit }) => {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(resume, jobDescription);
  };

  return (
    <Container maxWidth="md" style={{ height: '100vh' }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        style={{ height: '100%' }}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Job Selection Predictor
          </Typography>
        </Grid>
        <Grid item component={Paper} elevation={3} style={{ padding: 20 }}>
          <input
            accept="application/pdf"
            style={{ display: 'none' }}
            id="contained-button-file"
            multiple
            type="file"
            onChange={(e) => setResume(e.target.files[0])}
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="outlined"
              component="span"
              startIcon={<CloudUploadIcon />}
              style={{ marginBottom: 20 }}
            >
              Upload Resume
            </Button>
          </label>
          {resume && (
            <Typography variant="body1" gutterBottom>
              Resume Uploaded: {resume.name}
            </Typography>
          )}
          <TextField
            id="jobDescription"
            label="Enter Job Description"
            multiline
            rows={4}
            fullWidth
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            style={{ marginBottom: 20 }}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Evaluate
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Form;
