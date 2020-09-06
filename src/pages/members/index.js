import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import GalleryViewer from "../../components/GalleryViewer";

const MembersPage = ({ data }) => {
  const {
    allFile: { edges: images },
  } = data;
  return (
    <Layout>
      <section className="section">
        <Helmet title={`Members`} />
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: "6rem" }}
            >
              <h1 className="title is-size-2 is-bold-light">Members</h1>
              <GalleryViewer images={images} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MembersPage;

export const pageQuery = graphql`
  query ImagesForGallery {
    allFile(filter: { sourceInstanceName: { eq: "members" } }) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
            full: fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
