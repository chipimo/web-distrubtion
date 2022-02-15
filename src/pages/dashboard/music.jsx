import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import DashboardHeader from "../../layouts/header/dashboard";

const MusicPage = ({ data, url }) => {
    const content = normalizedData(data?.homePage?.content || []);

    React.useEffect(() => {
     console.log(data)
    }, [])
    

    return (
        <Layout pageTitle="Dashboard | Music" className="login-home">
            <DashboardHeader
                data={{
                    ...data.header,
                    ...data.navigation,
                    socials: data.site.siteMetadata.socials,
                }}
            
            />
            <div>

            </div>
        </Layout>
    );
};

export const query = graphql`
    query DashboardPageQuery {
        site {
            ...Site
        }
        header: general(section: { eq: "dashboard-header" }) {
            ...dashboardheader
        }
        navigation: general(section: { eq: "dashboard-menu" }) {
            menu {
                ...dashboardmenu
            }
        }
        footer: general(section: { eq: "footer-1" }) {
            ...Footer01
        }
        homePage(title: { eq: "Login" }) {
            content {
                ...Content01
            }
        }
        allArticle(limit: 6) {
            nodes {
                ...Article
            }
        }
    }
`;

MusicPage.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                socials: PropTypes.arrayOf(PropTypes.shape({})),
                contact: PropTypes.shape({
                    phone: PropTypes.string,
                    email: PropTypes.string,
                }),
                getform_url: PropTypes.string,
            }),
        }),
        homePage: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allArticle: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        navigation: PropTypes.shape({}),
        header: PropTypes.shape({}),
        footer: PropTypes.shape({}),
    }),
};

export default MusicPage;
