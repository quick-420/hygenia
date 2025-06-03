import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  MenuItem,
  Alert,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AppointmentForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isServiceRequest = location.pathname === '/request-services';

  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    serviceType: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/appointments', formData);
      setStatus({
        type: 'success',
        message: 'Appointment request submitted successfully!',
      });
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Error submitting appointment request. Please try again.',
      });
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          {isServiceRequest ? 'Request Medical Services' : 'Book an Appointment'}
        </Typography>

        {status.message && (
          <Alert severity={status.type} sx={{ mb: 2 }}>
            {status.message}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            required
            fullWidth
            label="Full Name"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            required
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            required
            fullWidth
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            required
            fullWidth
            label="Date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            required
            fullWidth
            label="Time"
            name="time"
            type="time"
            value={formData.time}
            onChange={handleChange}
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            required
            fullWidth
            select
            label="Service Type"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            margin="normal"
          >
            <MenuItem value="general">General Checkup</MenuItem>
            <MenuItem value="specialist">Specialist Consultation</MenuItem>
            <MenuItem value="emergency">Emergency Care</MenuItem>
            <MenuItem value="followup">Follow-up Visit</MenuItem>
          </TextField>
          <TextField
            fullWidth
            label="Additional Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{ mt: 3 }}
          >
            {isServiceRequest ? 'Submit Request' : 'Book Appointment'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AppointmentForm; 