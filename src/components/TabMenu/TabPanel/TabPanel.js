import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './TabPanel.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{  borderColor: 'divider' }}
      >
        
        <Tab className='TabsNumber' label="Qadriyatlarga asoslangan biznesni boshqarish kursi" {...a11yProps(0)} />
        <Tab className='TabsNumber' label="HR meneger kim?" {...a11yProps(1)} />
        <Tab className='TabsNumber' label="Yaponiyaning KAIZEN sistemasi" {...a11yProps(2)} />
        <Tab className='TabsNumber' label="Moliya boshqaruvi" {...a11yProps(3)} />
        <Tab className='TabsNumber' label="Ko‘p yillik tajribaga ega ustoz" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <iframe className='firstVideo' src="https://www.youtube.com/embed/fW2BZDxDlIM"/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <iframe className='firstVideo' src="https://www.youtube.com/embed/Ua5shXolDD0"/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <iframe className='firstVideo' src="https://www.youtube.com/embed/nDcO6UOVd6A"/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <iframe className='firstVideo' src="https://www.youtube.com/embed/jvrDXVNEHwQ"/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <iframe className='firstVideo' src="https://www.youtube.com/embed/nDcO6UOVd6A"/>
      </TabPanel>
    </Box>
  );
}
