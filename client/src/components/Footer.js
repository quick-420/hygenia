import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocalHospitalIcon sx={{ mr: 1 }} />
              <Typography variant="h6">Hygenia</Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Your trusted partner in healthcare. We connect patients with the best doctors in their area.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link
              component={RouterLink}
              to="/"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              Home
            </Link>
            <Link
              component={RouterLink}
              to="/book-appointment"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              Book Appointment
            </Link>
            <Link
              component={RouterLink}
              to="/request-services"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              Request Services
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Email: contact@hygenia.com
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Phone: +1 (555) 123-4567
            </Typography>
            <Typography variant="body2">
              Address: 123 Healthcare Street, Medical City, MC 12345
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Hygenia. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 