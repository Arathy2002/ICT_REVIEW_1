import React from 'react';
import { Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import { AccountBalance, ManageAccountsOutlined, Person2Outlined } from '@mui/icons-material';

const SidebarContainer = styled('div')({
  width: '240px',
  height: '100vh',
  backgroundColor: '#222', // Dark background for contrast
  color: '#FFD700', // Gold text color
  position: 'fixed',
  top: 0,
  left: 0,
  padding: '20px',
  boxShadow: '4px 0 8px rgba(0, 0, 0, 0.2)', // Shadow for depth
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const SidebarButton = styled(Button)({
  width: '100%',
  marginBottom: '15px', // Spacing between buttons
  color: '#FFD700', // Gold text color
  backgroundColor: '#000', // Black button background
  fontSize: '16px', // Font size for readability
  fontWeight: 'bold', // Bold text
  borderRadius: '8px', // Rounded corners
  padding: '10px', // Padding for button
  '&:hover': {
    backgroundColor: '#444', // Darker black on hover
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Shadow on hover
  },
});

const SidebarList = styled(List)({
  marginBottom: '20px', // Space before the logout button
});

const Sidebar = ({ onSelect }) => {
  const menuItems = [
    {
      title: "Profile",
      icon: <Person2Outlined />,
    },
    {
      title: "User Administration",
      icon: <ManageAccountsOutlined />,
    },
    {
      title: "Expense",
      icon: <AccountBalance />,
    },
  ];

  return (
    <SidebarContainer>
      <SidebarList>
        {menuItems.map((item, index) => (
          <ListItem button key={index} onClick={() => onSelect(item.title)}>
            <ListItemIcon style={{ color: '#FFD700' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </SidebarList>
      {/* Optional logout button or other footer elements can be placed here */}
    </SidebarContainer>
  );
};

export default Sidebar;
