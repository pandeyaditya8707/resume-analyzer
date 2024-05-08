import React, { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';

const Form = ({ onSubmit }) => {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(resume, jobDescription);
  }

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <TextField
          id="resume"
          label="Upload Resume"
          type="file"
          onChange={(e) => setResume(e.target.files[0])}
          fullWidth
          margin="normal"
        />

        <TextField
          id="jobDescription"
          label="Enter Job Description"
          multiline
          rows={4}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          fullWidth
          margin="normal"
        />

        <Button variant="contained" color="primary" type="submit">
          Evaluate
        </Button>
      </form>
    </Container>
  );
}

export default Form;
