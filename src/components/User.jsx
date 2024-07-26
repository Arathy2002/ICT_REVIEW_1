import React, { useState } from 'react';
import { Button, Container, Grid, Typography, TextField, List, ListItem, ListItemText, Card, CardContent } from '@mui/material';
import styled from 'styled-components';

// Styled components for consistent appearance
const ContentContainer = styled(Container)`
  margin-left: 260px; /* Offset for the sidebar */
  padding: 20px;
  min-height: 100vh;
  background-color: #AAA; /* Yellow background for content */
  background-image: url("https://img.freepik.com/premium-photo/red-minimalist-tech-finance-thumbnail-background-9_769134-342.jpg"); 
  color: #fff; /* White text */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  margin: 20px;
  max-width: 600px;
  width: 100%;
  background-color: #AAA; /* Darker grey for the card */
  background-image: url("https://www.zmo.ai/wp-content/uploads/2023/09/abstract-white-background-geometric-texture.jpg"); 
  color: #fff; /* White text */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Stronger shadow for contrast */
`;

const User = () => {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTransaction = () => {
    if (amount && category && date && description) {
      setTransactions([
        ...transactions,
        { id: transactions.length + 1, amount, category, date, description }
      ]);
      setAmount('');
      setCategory('');
      setDate('');
      setDescription('');
    }
  };

  return (
    <ContentContainer>
      <Typography variant="h4" gutterBottom>
        User Dashboard
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Log Transaction
              </Typography>
              <TextField
                label="Amount"
                variant="outlined"
                fullWidth
                margin="normal"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                InputProps={{ style: { color: '#AAA' } }} // TextField text color
                InputLabelProps={{ style: { color: '#AAA' } }} // TextField label color
              />
              <TextField
                label="Category"
                variant="outlined"
                fullWidth
                margin="normal"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                InputProps={{ style: { color: '#AAA' } }} // TextField text color
                InputLabelProps={{ style: { color: '#AAA' } }} // TextField label color
              />
              <TextField
                label="Date"
                variant="outlined"
                fullWidth
                margin="normal"
                type="date"
                InputLabelProps={{ shrink: true, style: { color: '#AAA' } }} // TextField label color
                value={date}
                onChange={(e) => setDate(e.target.value)}
                InputProps={{ style: { color: '#AAA' } }} // TextField text color
              />
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                margin="normal"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                InputProps={{ style: { color: '#AAA' } }} // TextField text color
                InputLabelProps={{ style: { color: '#AAA' } }} // TextField label color
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={handleAddTransaction}
                fullWidth
                style={{ marginTop: '20px' }}
              >
                Add Transaction
              </Button>
            </CardContent>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Transaction History
              </Typography>
              <List>
                {transactions.map((transaction) => (
                  <ListItem key={transaction.id}>
                    <ListItemText 
                      primary={`Amount: ${transaction.amount} | Category: ${transaction.category} | Date: ${transaction.date}`}
                      secondary={`Description: ${transaction.description}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </ContentContainer>
  );
};

export default User;
