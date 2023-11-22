import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";




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

      <Img fluid={data.file.childImageSharp.fluid} />

  );
};

export default Image;
