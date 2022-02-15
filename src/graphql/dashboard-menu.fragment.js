import { graphql } from "gatsby";

export const query = graphql`
    fragment dashboardmenu on Menu {
        id
        text
        path
    }
`;
