import React, { useState, useEffect } from 'react';
import { Button, Container, Grid, Typography, TextField, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import { Home, Person, Receipt } from '@mui/icons-material'; // Importing icons from Material-UI
import styled from 'styled-components';

// Styled components for Sidebar and Buttons
const Sidebar = styled.div`
  width: 240px;
  height: 100vh;
  background-color: #000; /* Black background */
  color: #fff; /* White text */
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-image: url('background-image: url("https://img.freepik.com/premium-photo/red-minimalist-tech-finance-thumbnail-background-9_769134-342.jpg"); ');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const SidebarButton = styled(Button)`
  width: 100%;
  margin-bottom: 10px;
  color: #fff; /* White text */
  background-color: #f1c40f; /* Yellow */
  background-image: url("https://img.freepik.com/premium-photo/red-minimalist-tech-finance-thumbnail-background-9_769134-342.jpg"); 
  text-align: left;
  &:hover {
    background-color: #f39c12; /* Darker yellow on hover */
    background-image: url("https://img.freepik.com/premium-photo/red-minimalist-tech-finance-thumbnail-background-9_769134-342.jpg"); 
  }
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 20px;
`;

const IconContainer = styled.div`
  margin-right: 15px;
`;

const ContentContainer = styled(Container)`
  margin-left: 260px; /* Offset for the sidebar */
  padding: 20px;
  min-height: 100vh;
  background-color: #AAA; /* Yellow background for content */
  background-image: url("https://www.shutterstock.com/image-illustration/thailand-stock-exchange-streaming-trade-260nw-1630926589.jpg"); 
  background-size: cover;
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
  background-image: url("https://www.shutterstock.com/image-illustration/financial-chart-down-trend-line-260nw-1701336523.jpg"); 
  background-size: cover;
  color: #fff; /* White text */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Stronger shadow for contrast */
`;

const Admin = () => {
  const [activeSection, setActiveSection] = useState('user');
  const [users, setUsers] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [newExpense, setNewExpense] = useState({ description: '', amount: '' });

  useEffect(() => {
    const fetchUsers = async () => {
      // Mock API call
      setUsers([{ id: 1, name: 'John Doe', email: 'john@example.com' }]);
    };

    const fetchExpenses = async () => {
      // Mock API call
      setExpenses([{ id: 1, description: 'Office Supplies', amount: '$200' }]);
    };

    fetchUsers();
    fetchExpenses();
  }, []);

  const handleAddUser = () => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ name: '', email: '' });
  };

  const handleAddExpense = () => {
    setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
    setNewExpense({ description: '', amount: '' });
  };

  return (
    <>
      <Sidebar>
        <SidebarButton variant="contained" onClick={() => setActiveSection('user')}>
          <IconContainer><Person /></IconContainer>
          User Management
        </SidebarButton>
        <SidebarButton variant="contained" onClick={() => setActiveSection('expense')}>
          <IconContainer><Receipt /></IconContainer>
          Expense Management
        </SidebarButton>
      </Sidebar>

      <ContentContainer>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {activeSection === 'user' && (
            <Grid item xs={12} sm={8} md={6}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    User Management
                  </Typography>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    InputProps={{ style: { color: '#AAA' } }} // TextField text color
                    InputLabelProps={{ style: { color: '#AAA' } }} // TextField label color
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    InputProps={{ style: { color: '#AAA' } }} // TextField text color
                    InputLabelProps={{ style: { color: '#AAA' } }} // TextField label color
                  />
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleAddUser}
                    fullWidth
                  >
                    Add User
                  </Button>
                  <List>
                    {users.map((user) => (
                      <ListItem key={user.id}>
                        <ListItemText primary={`${user.name} (${user.email})`} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </StyledCard>
            </Grid>
          )}

          {activeSection === 'expense' && (
            <Grid item xs={12} sm={8} md={6}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Expense Management
                  </Typography>
                  <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={newExpense.description}
                    onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
                    InputProps={{ style: { color: '#AAA' } }} // TextField text color
                    InputLabelProps={{ style: { color: '#AAA' } }} // TextField label color
                  />
                  <TextField
                    label="Amount"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={newExpense.amount}
                    onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                    InputProps={{ style: { color: '#AAA' } }} // TextField text color
                    InputLabelProps={{ style: { color: '#AAA' } }} // TextField label color
                  />
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleAddExpense}
                    fullWidth
                  >
                    Add Expense
                  </Button>
                  <List>
                    {expenses.map((expense) => (
                      <ListItem key={expense.id}>
                        <ListItemText primary={`${expense.description}: ${expense.amount}`} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </StyledCard>
            </Grid>
          )}
        </Grid>
      </ContentContainer>
    </>
  );
};

export default Admin;
