import React, { useState } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Result from './Components/Result';
import { Container, Grid } from '@mui/material';
import { CssBaseline } from '@mui/material'; // Import CssBaseline for resetting default browser styles

const App = () => {
  const [chances, setChances] = useState(null);

  const handleSubmit = async (resume, jobDescription) => {
    try {
      // Make an HTTP POST request to the API endpoint
      const response = await fetch('https://resume-analizer.onrender.com/analyze-resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resume: resume, // Assuming resume is a file or text data
          jobDescription: jobDescription,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      // Parse the JSON response
      const data = await response.json();
      
      // Extract the chances of selection from the response data
      const selectionChances = data.chances; // Adjust this based on your API response structure
      
      // Update the state with the chances of selection
      setChances(selectionChances);
    } catch (error) {
      // Handle errors gracefully, e.g., display an error message to the user
      console.error('Error:', error);
    }
  };

  return (
    <>
      <CssBaseline />
      <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Container maxWidth="md" style={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '80vh' }}
          >
            <Grid item>
              <Form onSubmit={handleSubmit} />
            </Grid>
            <Grid item>
              {chances !== null && <Result chances={chances} />}
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default App;
