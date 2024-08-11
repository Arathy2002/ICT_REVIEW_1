import React from 'react';
import { Button, Avatar, Typography, Card } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = styled.div`
  width: 240px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SidebarButton = styled(Button)`
  width: 100%;
  margin-bottom: 15px;
  color: #000 !important; /* Black text */
  background-color: #fff !important; /* White background */
  background-image: url("https://png.pngtree.com/thumb_back/fh260/background/20210427/pngtree-ash-color-texture-paper-image_669420.jpg");
  text-align: left;
  &:hover {
    background-color: #FFFDD0 !important; /* Light grey background on hover */
  }
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 20px;
`;

const IconContainer = styled.div`
  margin-right: 15px;
`;

const ContentContainer = styled.div`
  margin-left: 260px;
  padding: 20px;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  background-image: url("https://img.freepik.com/premium-vector/hand-painted-watercolor-abstract-background_889452-27198.jpg");
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AdminProfileContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fce4ec; /* Light pink background for profile section */
  background-image: url("https://png.pngtree.com/background/20220715/original/pngtree-light-blue-background-picture-picture-image_1626628.jpg");
  background-size: cover;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 370px; /* Adjust width */
  margin-top: 20px; /* Margin to space from heading */
`;

const AdminAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  background-image: url('https://i.pinimg.com/736x/f5/5f/a1/f55fa19b37cc114e08b7ac757a1e13c7.jpg'); /* Replace with actual URL */
  background-size: cover;
  background-position: center;
`;

const DashboardHeading = styled(Typography)`
  font-size: 2rem;
  font-weight: bold;
  color: #000; /* Black font color */
  margin: 25px;
  text-align: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 360px;
  padding: 10px;
`;

const Admin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, id, name } = location.state || {};

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <>
      <Sidebar>
        <br /><br />
        <SidebarButton variant="contained" onClick={() => navigate('/admin/user-management')}>
          <IconContainer>
            {/* Removed the PersonIcon */}
          </IconContainer>
          User Management
        </SidebarButton>
        <br /><br />
        <SidebarButton variant="contained" onClick={handleLogout}>
          <IconContainer>
            <ExitToAppIcon />
          </IconContainer>
          Logout
        </SidebarButton>
      </Sidebar>
      <ContentContainer>
        <DashboardHeading>
          Admin Dashboard
        </DashboardHeading>
        <AdminProfileContainer>
          <AdminAvatar />
          <Typography variant="h5" gutterBottom>
            Admin
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {name}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {email}
          </Typography>
        </AdminProfileContainer>
      </ContentContainer>
    </>
  );
};

export default Admin;
