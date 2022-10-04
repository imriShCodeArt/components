import React, { useState } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";

import Item from "./components/Item";

function Accordion({ items, name }) {
  const [expanded, setExpanded] = useState(false);
  const handleChange =
    (panel) =>
    ({}, isExpanded) =>
      setExpanded(isExpanded ? panel : false);

  return (
    <Box>
      {items.map(({ ...props }, i) => (
        <Item
          name={`${name}-i`}
          handleChange={handleChange}
          expanded={expanded}
          key={i}
          itemID={i}
          {...props}
        />
      ))}
    </Box>
  );
}

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      summary: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      details: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    })
  ),
  name: PropTypes.string.isRequired,
};

Accordion.defaultProps = {
  items: [
    {
      summary: "item-1",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hicblanditiis cupiditate nisi exercitationem illum fugiat enim. Sapiente,et aliquid.",
    },
    {
      summary: "item-2",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hic blanditiis cupiditate nisi exercitationem illum fugiat enim. Sapiente, et aliquid.",
    },
    {
      summary: "item-3",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hic blanditiis cupiditate nisi exercitationem illum fugiat enim. Sapiente, et aliquid.",
    },
    {
      summary: "item-4",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hic blanditiis cupiditate nisi exercitationem illum fugiat enim. Sapiente, et aliquid.",
    },
  ],
};

export default Accordion;
