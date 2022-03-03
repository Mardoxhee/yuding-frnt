import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from './Menu';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
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
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} className="box">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="MENU" {...a11yProps(0)} />
          <Tab label="INFORMATIONS" {...a11yProps(1)} />
          <Tab label="AVIS" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <p>
          Mei at intellegat reprehendunt, te facilisis definiebas dissentiunt usu. Choro delicata
          voluptatum cu vix. Sea error splendide at. Te sed facilisi persequeris definitiones, ad
          per scriptorem instructior, vim latine adipiscing no. Cu tacimates salutandi his, mel te
          dicant quodsi aperiri. Unum timeam his eu. An malorum ornatus nostrum vel, graece
          iracundia laboramus cu ius. No pro mazim blandit instructior, sumo voluptaria has et, vide
          persecuti abhorreant ne est.
          <Menu />
        </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        INFORMATIONS
      </TabPanel>
      <TabPanel value={value} index={2}>
        AVIS
      </TabPanel>
    </Box>
  );
}