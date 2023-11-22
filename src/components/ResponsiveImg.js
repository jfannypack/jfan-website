import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import ResponsiveImg from "../ResponsiveImg";

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Screenshot-TA.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <ResponsiveImg>
      <Img fluid={data.file.childImageSharp.fluid} />
    </ResponsiveImg>
  );
};

export default Image;
