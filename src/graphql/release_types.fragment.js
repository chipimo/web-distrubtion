import { graphql } from "gatsby";

export const query = graphql`
    fragment ReleaseTypes on ReleaseTypes {
        id
        title
        image {
            src {
                childImageSharp {
                    gatsbyImageData(
                        quality: 100
                        formats: WEBP
                        placeholder: TRACED_SVG
                    )
                }
            }
            alt
        }
        info
    }
`;
