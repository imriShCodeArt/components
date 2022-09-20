import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`nocode-tabpanel-${index}`}
      aria-labelledby={`nocode-tab-${index}`}
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

const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `nocode-tabpanel-${index}`,
});

export default function BasicTabs({ ariaLabel, value, handleChange, tabs }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label={ariaLabel}>
          {tabs.map(({ label }, i) => (
            <Tab key={i} label={label} {...a11yProps(i)} />
          ))}
        </Tabs>
      </Box>
      {tabs.map(({ text, value }, i) => (
        <TabPanel value={value} index={i}>
          {text}
        </TabPanel>
      ))}
    </Box>
  );
}
