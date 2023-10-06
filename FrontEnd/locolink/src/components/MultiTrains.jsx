import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TableContainer, Table, Paper, TableCell, TableRow, TableHead, TableBody, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Trains() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/trains')
      .then((response) => {
        setTrains(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching train data:', error);
      });
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom style={{ color: '#F26C24' }}>
        Trains Schedule
      </Typography>
      <TableContainer component={Paper} style={{ backgroundColor: '#FFFFFF' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: '#FFFFFF', backgroundColor: '#e8071a' }}>Train Name</TableCell>
              <TableCell align="right" style={{ color: '#FFFFFF', backgroundColor: '#e8071a' }}>Train Number</TableCell>
              <TableCell align="right" style={{ color: '#FFFFFF', backgroundColor: '#e8071a' }}>Departure Time</TableCell>
              <TableCell align="right" style={{ color: '#FFFFFF', backgroundColor: '#e8071a' }}>Seats Available</TableCell>
              <TableCell align="right" style={{ color: '#FFFFFF', backgroundColor: '#e8071a' }}>Price (Sleeper)</TableCell>
              <TableCell align="right" style={{ color: '#FFFFFF', backgroundColor: '#e8071a' }}>Price (AC)</TableCell>
              <TableCell align="center" style={{ color: '#FFFFFF', backgroundColor: '#e8071a' }}>Show more</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trains?.map((train) => (
              <TableRow key={train.trainNumber}>
                <TableCell>{train.trainName}</TableCell>
                <TableCell align="right">{train.trainNumber}</TableCell>
                <TableCell align="right">{train.departureTime}</TableCell>
                <TableCell align="right">{train.seatsAvailable}</TableCell>
                <TableCell align="right">{train.price.sleeper}</TableCell>
                <TableCell align="right">{train.price.AC}</TableCell>
                <TableCell align="center">
                  <Button
                    component={Link}
                    to={`/trains/${train.trainNumber}`}
                    variant="contained"
                    color="primary"
                    style={{ backgroundColor: '#16f20f' }}
                  >
                    Show more
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Trains;