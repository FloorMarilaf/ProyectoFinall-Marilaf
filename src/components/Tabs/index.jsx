import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



const TabsMenu = ({current ,items}) => {
    const navigate = useNavigate();

  const handleChange = (_, newValue) => {
    navigate('/products/' + newValue)
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={current} onChange={handleChange} aria-label="basic tabs example">
          {
            items.map((item, index) => <Tab key={item.id + index} label={item.title} value={item.id}  />    
            )
          
          }
        </Tabs>
      </Box>
     
    </Box>
  );
}

export default TabsMenu;