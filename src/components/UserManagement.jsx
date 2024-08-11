import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Typography, Grid, Card, Avatar, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components';

// Define a function to generate colorful avatars
const generateAvatarUrl = (userId) => {
  const baseUrl = 'https://api.adorable.io/avatars/150/';
  return `${baseUrl}${userId}.png`;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #AAA;  /* Changed to black */
  background-image: url("https://png.pngtree.com/thumb_back/fh260/background/20210326/pngtree-light-blue-cute-striped-baby-blue-background-image_594858.jpg");
  background-size: cover;
  padding: 20px;
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 1200px;
  margin: 20px;
  background-color: #faf3dd;
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 20px;
`;

const UserCard = styled(Card)`
  display: flex;
  align-items: center;
  background-color: #9370db; /* Purple color */
  background-image: url("https://media.istockphoto.com/id/1353577301/vector/horizontal-vector-illustration-of-an-empty-pastel-light-sky-blue-coloured-grunge-textured.jpg?s=612x612&w=0&k=20&c=7Rf-nfcOsMJgeYRZNp2u9NzhplDMXh5-zaq4FF0MaW4=");
  background-size: cover;
  color: #fff;
  padding: 20px; /* Increased padding */
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

const UserAvatar = styled(Avatar)`
  margin-right: 20px;
  width: 80px; /* Increased size for better visibility */
  height: 80px;
  background-image: url(${props => props.src});
  background-size: cover;
`;

const UserDetails = styled.div`
  flex: 1;
`;

const ViewTransactionsButton = styled(Button)`
  background-color: #000 !important;
  color: #fff !important;
  &:hover {
    background-color: #333 !important;
  }
`;

const HighlightedHeading = styled(Typography)`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  background-color: #000; /* Changed to black */
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  width: 100%;
`;

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [userExpenses, setUserExpenses] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get('http://localhost:3002/userview');
        setUsers(usersResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const fetchExpenses = async (userId) => {
    try {
      const response = await axios.get('http://localhost:3002/expenses', {
        params: { userId },
      });

      if (response.data.status === 'success') {
        setUserExpenses((prev) => ({
          ...prev,
          [userId]: response.data.expenses,
        }));
      } else {
        console.error('Error fetching expenses:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const handleViewTransactions = (userId) => {
    setSelectedUser(users.find(user => user._id === userId));
    fetchExpenses(userId);
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3002/remove/${userId}`);
      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <Container>
      <StyledCard>
        <HighlightedHeading variant="h6" gutterBottom>
          User Management
        </HighlightedHeading>
        <Grid container spacing={3}>
          {users.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user._id}>
              <UserCard>
                <UserAvatar 
                  src={generateAvatarUrl(user._id)} 
                  alt={user.name} 
                />
                <UserDetails>
                  <Typography variant="h5">{user.name}</Typography>
                  <br /><br />
                  <ViewTransactionsButton
                    variant="contained"
                    onClick={() => handleViewTransactions(user._id)}
                    style={{ marginTop: '10px' }}
                  >
                    View Transactions
                  </ViewTransactionsButton>
                </UserDetails>
                <IconButton 
                  aria-label="delete" 
                  onClick={() => handleDeleteUser(user._id)}
                  style={{ marginLeft: 'auto' }}
                >
                  <DeleteIcon style={{ color: 'white' }} />
                </IconButton>
              </UserCard>
            </Grid>
          ))}
        </Grid>
      </StyledCard>
      {selectedUser && (
        <StyledCard>
          <Typography variant="h6" gutterBottom>
            Transactions for {selectedUser.name}
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Amount</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userExpenses[selectedUser._id]?.map((transaction) => (
                <TableRow key={transaction._id}>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>{transaction.category}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledCard>
      )}
    </Container>
  );
};

export default UserManagement;
