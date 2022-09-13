import React, { useEffect } from "react";
import PropTypes from "prop-types";

import loadable from "@loadable/component";

import TContainer from "@mui/material/TableContainer";
import Root from "@mui/material/Table";
import Paper from "@mui/material/Paper";

const Head = loadable(() => import("@mui/material/TableHead"));
const Body = loadable(() => import("@mui/material/TableBody"));
const Footer = loadable(() => import("@mui/material/TableFooter"));

import Row from "./components/Row";

function Table({ rows, elevation, colors }) {
  const { h, b, f } = { ...rows }; // Data for: h=Header cells. b=Body cells. f=Footer cells.

  const colorProps = (name) => ({
    sx: { bgcolor: colors && colors[`${name}`] },
  });

  function buildBodyRowsCells(cellsRows) {
    const nestedArr = typeof cellsRows[0] === "object";
    return !nestedArr ? (
      <Row cells={cellsRows} />
    ) : (
      cellsRows.map((arr, i) => <Row key={i} cells={[...arr]} />)
    );
  }

  useEffect(() => {}, []);
  return (
    <TContainer component={Paper} elevation={elevation} {...colorProps("body")}>
      <Root>
        {rows["h"] && (
          <Head {...colorProps("head")}>
            <Row cells={h} />
          </Head>
        )}

        {rows["b"] && <Body>{buildBodyRowsCells(b)}</Body>}
        {rows["f"] && (
          <Footer {...colorProps("footer")}>
            <Row cells={f} />
          </Footer>
        )}
      </Root>
    </TContainer>
  );
}

Table.propTypes = {
  rows: PropTypes.shape({
    h: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element])
    ),
    b: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
        PropTypes.array,
      ])
    ),
    f: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element])
    ),
  }),
  colors: PropTypes.shape({
    body: PropTypes.string,
    head: PropTypes.string,
    footer: PropTypes.string,
  }),
  elevation: PropTypes.number,
};

Table.defaultProps = {
  rows: {
    // h: ["Heading-1", "Heading-2", "Heading-3", "Heading-4"],
    // b: [
    //   ["Body-1", "Body-2", "Body-3", "Body-4"],
    //   ["Body-5", "Body-6", "Body-7", "Body-8"],
    //   ["Body-9", "Body-10", "Body-11", "Body-12"],
    // ],
    // f: ["Footer-1", "Footer-2", "Footer-3", "Footer-4"],
  },
};

export default Table;
