import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const doctorImage = 'https://images.unsplash.com/photo-1511174511562-5f97f4f4c1b3?auto=format&fit=facearea&w=600&q=80'; // Replace with your own image if needed

const faqs = [
  {
    question: "How do I book an appointment?",
    answer: "Click on the 'Book Appointment' button and fill out the form with your details."
  },
  {
    question: "Can I request home services?",
    answer: "Yes, click on 'Request Services' and specify your needs in the form."
  },
  {
    question: "Is my information secure?",
    answer: "Yes, we use industry-standard security to protect your data."
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ bgcolor: '#eaf6fb', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: 32, md: 48 } }}>
                Empowering Kolkata's Healthcare
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, color: 'text.secondary' }}>
                Connecting Patients with Top-Notch Medical Professionals across the City
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  color="warning"
                  size="large"
                  sx={{ borderRadius: 2, fontWeight: 600, px: 3 }}
                  onClick={() => navigate('/book-appointment')}
                >
                  Book Appointment
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  sx={{ borderRadius: 2, fontWeight: 600, px: 3 }}
                  onClick={() => navigate('/request-services')}
                >
                  Request Services
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
              <Box
                component="img"
                src={doctorImage}
                alt="Doctors"
                sx={{
                  width: { xs: '80%', md: '90%' },
                  maxWidth: 420,
                  borderRadius: 4,
                  boxShadow: 3,
                  objectFit: 'cover',
                  background: '#fff',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Us Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          About Us
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
              <LocalHospitalIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Quality Healthcare
              </Typography>
              <Typography>
                We connect you with the best healthcare providers in your area.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
              <AccessTimeIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Easy Booking
              </Typography>
              <Typography>
                Book appointments at your convenience, 24/7.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
              <LocationOnIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Local Doctors
              </Typography>
              <Typography>
                Find healthcare providers near your location.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* FAQs Section */}
      <Box sx={{ bgcolor: 'white', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom align="center">
            FAQs
          </Typography>
          {faqs.map((faq, idx) => (
            <Accordion key={idx} sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      {/* Contact Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom align="center">
            Contact Us
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Get in Touch
              </Typography>
              <Typography paragraph>
                Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Message"
                margin="normal"
                variant="outlined"
                multiline
                rows={4}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2 }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
};

export default Home; 