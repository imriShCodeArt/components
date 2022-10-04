import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Root from "@mui/material/Card";
import loadable from "@loadable/component";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

const CardHeader = loadable(() => import("@mui/material/CardHeader"));
const CardContent = loadable(() => import("@mui/material/CardContent"));
const CardActions = loadable(() => import("@mui/material/CardActions"));
const CardMedia = loadable(() => import("@mui/material/CardMedia"));
const Collapse = loadable(() => import("../Collapse/Collapse"));
const IconButton = loadable(() => import("shared/io/IconButton"));
const Button = loadable(() => import("shared/io/Button"));

const Card = ({
  items,
  actionsProps,
  headerProps,
  contentProps,
  mediaProps,
  expandText,
  collapseText,
  ...rest
}) => {
  const [elementsToRender, setElementsToRender] = useState([]);
  const [expanded, setExpanded] = useState(false);

  function toggleExpanded() {
    setExpanded((val) => !val);
  }

  const { header, media, content, actions, collapse } = items || {};
  const keys = Object.keys(items);

  useEffect(() => {
    keys.map((k, i) => {
      switch (k) {
        case "header":
          return setElementsToRender((arr) => [
            ...arr,
            () => <CardHeader {...headerProps} key={k + i} {...header} />,
          ]);
        case "content":
          return setElementsToRender((arr) => [
            ...arr,
            () => (
              <CardContent {...contentProps} key={k + i}>
                {content}
              </CardContent>
            ),
          ]);
        case "actions":
          return setElementsToRender((arr) => [
            ...arr,
            (myExpanded) => (
              <CardActions
                sx={{ justifyContent: "space-between" }}
                {...actionsProps}
                key={k + i}
              >
                <Box>{actions.map((a, j) => ({ ...a, key: j }))}</Box>
                {collapse !== undefined && expandText === undefined && (
                  <IconButton
                    title={myExpanded ? "collapse" : "expand"}
                    onClick={toggleExpanded}
                    sx={{ justifySelf: "right" }}
                  >
                    <ExpandMore
                      sx={{
                        transition: "transform ease-in-out .3s",
                        transform: myExpanded ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </IconButton>
                )}
              </CardActions>
            ),
          ]);
        case "media":
          return setElementsToRender((arr) => [
            ...arr,
            () => (
              <CardMedia
                component={media["component"] || "img"}
                {...mediaProps}
                key={k + i}
                {...media}
              />
            ),
          ]);

        case "collapse":
          return setElementsToRender((arr) => [
            ...arr,
            (myExpanded) => (
              <CardContent {...contentProps} key={k + i}>
                {content}
                {collapse !== undefined && expandText && (
                  <Button onClick={toggleExpanded}>
                    {myExpanded ? collapseText : expandText}
                  </Button>
                )}
                <Collapse open={myExpanded}>{collapse}</Collapse>
              </CardContent>
            ),
          ]);

        default:
          throw new Error(
            "items object may have only 'header', 'content', 'actions' or 'media' objects"
          );
      }
    });
  }, []);

  return <Root {...rest}>{elementsToRender.map((r) => r(expanded))}</Root>;
};

Card.propTypes = {
  actionsProps: PropTypes.object,
  headerProps: PropTypes.object,
  contentProps: PropTypes.object,
  items: PropTypes.shape({
    header: PropTypes.shape({
      avatar: PropTypes.element,
      action: PropTypes.element,
      title: PropTypes.string,
      subheader: PropTypes.string,
    }),
    actions: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]),
    content: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.string,
    ]),
    media: PropTypes.shape({
      component: PropTypes.elementType,
      height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      image: PropTypes.string,
      alt: PropTypes.string,
    }),
  }),
  expandText: PropTypes.string,
  collapseText: PropTypes.string,
};

Card.defaultProps = {};

export default Card;
