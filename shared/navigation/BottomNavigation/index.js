import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useLocation, useNavigate } from "react-router-dom";

import Root from "@mui/material/BottomNavigation";

import Link from "./components/Link";

const BottomNavigation = ({ links, showLabels, ...rest }) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const [currentPathIndex, setCurrentPathIndex] = useState(updatePathIndex());
  function updatePathIndex() {
    const pathOptions = links.map((l) => "/" + l.href);
    return pathOptions
      .map((str, index) => (location === str ? index : undefined))
      .filter((f) => f !== undefined)[0];
  }
  useEffect(() => {
    setCurrentPathIndex(updatePathIndex());
  }, [location]);
  return (
    <Root {...rest} value={currentPathIndex}>
      {links.map(({ label, icon, href }, i) => {
        return (
          <Link
            key={href || `navigation_link_${i}`}
            {...{ label, icon }}
            showLabel={showLabels}
            action={() => navigate(href)}
            disabled={href === undefined}
          />
        );
      })}
    </Root>
  );
};

BottomNavigation.propTypes = {
  showLabels: PropTypes.bool,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.element,
      href: PropTypes.string,
    })
  ),
};

BottomNavigation.defaultProps = {
  links: [],
};

export default BottomNavigation;
