import React, { Suspense, useEffect, useState } from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/List";

import Item from "../ListItem";

function List({ dense, subheader, padding, items, children, ...rest }) {
  const [renderItems, setRenderItems] = useState("");
  function addRenderItem(item, i) {
    setRenderItems((last) => [
      ...last,
      <Suspense fallback={<div />} key={i}>
        <Item {...item} />
      </Suspense>,
    ]);
  }
  const itemsIsNotEmpty = items && items.length > 0;

  useEffect(() => {
    itemsIsNotEmpty
      ? items.map(({ ...item }, i) => {
          return addRenderItem({ ...item }, i);
        })
      : "";
  }, []);

  return (
    <Root disablePadding={!padding} {...{ dense, subheader }} {...rest}>
      {children || renderItems}
    </Root>
  );
}

List.propTypes = {
  dense: PropTypes.bool,
  subheader: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  padding: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.number,
      ]),
      icon: PropTypes.element,
      avatar: PropTypes.element,
      button: PropTypes.shape({
        onClick: PropTypes.func,
        text: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.element,
          PropTypes.number,
        ]),
      }),
    })
  ),
};

export default List;
