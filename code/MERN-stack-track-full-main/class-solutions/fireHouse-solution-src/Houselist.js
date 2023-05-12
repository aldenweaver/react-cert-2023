import Box from '@mui/material/Box';
import List from '@mui/material/List';
import React, { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


function Houselist({data, setCurrentHouse}) {
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        setCurrentHouse(data[index])
    };

    return (  
        <>
            <Box sx={{ width: '100%', height: '600px', maxWidth: 360, bgcolor: 'background.paper', overflow: 'scroll' }} >
                <List component="nav" aria-label="main mailbox folders">
                    {data.map((house, index) => (
                      <ListItemButton
                        selected={selectedIndex === index}
                        onClick={(event) => handleListItemClick(event, index)}
                      >
                        <ListItemText primary={house.FacilityName} />
                      </ListItemButton>
                    ))}
                </List>
            </Box>
        </>
    );
}

export default Houselist;