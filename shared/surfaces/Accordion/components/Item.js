import React from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import loadable from "@loadable/component";

const ExpandMoreIcon = loadable(() => import("@mui/icons-material/ExpandMore"));

function Item({ name, summary, details, itemID, expanded, handleChange, prefix, icon }) {
  return (
    <Root
      name={name}
      expanded={expanded === `${prefix}-panel${itemID}`}
      onChange={handleChange(`${prefix}-panel${itemID}`)}
    >
      <AccordionSummary
        expandIcon={
          icon || (
            <React.Suspense fallback={<div />}>
              <ExpandMoreIcon />
            </React.Suspense>
          )
        }
        aria-controls={`${prefix}-panel${itemID}bh-content`}
        id={`${prefix}-panel${itemID}bh-header`}
      >
        {summary}
      </AccordionSummary>
      <AccordionDetails>{details}</AccordionDetails>
    </Root>
  );
}

Item.propTypes = {
  summary: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  details: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  itemID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  expanded: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  handleChange: PropTypes.func,
  prefix: PropTypes.string,
  icon: PropTypes.element,
};

export default Item;
