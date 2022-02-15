import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-01";
import HeroArea from "@containers/hero/layout-11";
import AboutArea from "@containers/about/layout-02";
import SkillArea from "@containers/skill/layout-03";
import ServicesArea from "@containers/service/layout-02";
import PortfolioArea from "@containers/portfolio/layout-06";
import ClientArea from "@containers/client/layout-03";
import TestimonialArea from "@containers/testimonial/layout-03";
import PricingArea from "@containers/pricing/layout-02";
import BlogArea from "@containers/blog/layout-01";
import ContactArea from "@containers/contact/layout-01";

const FeaturesPage = ({ data }) => {
    const content = normalizedData(data?.homePage?.content || []);
    return (
        <Layout pageTitle="Features">
            <Header
                data={{
                    ...data.header,
                    ...data.navigation,
                    socials: data.site.siteMetadata.socials,
                }}
            />
            <main className="main-page-wrapper">
                <HeroArea
                    data={{
                        ...content["hero-section"],
                        socials: data.site.siteMetadata.socials,
                    }}
                />
                <AboutArea data={content["about-section"]} />
                <SkillArea data={content["skill-section"]} />
                <ServicesArea data={content["service-section"]} />
            </main>
            <Footer
                data={{
                    ...data.footer,
                    socials: data.site.siteMetadata.socials,
                }}
                className="section-separator"
            />
        </Layout>
    );
};

export const query = graphql`
    query FeaturesPageQuery {
        site {
            ...Site
        }
        header: general(section: { eq: "header-1" }) {
            ...Header01
        }
        navigation: general(section: { eq: "menu-1" }) {
            menu {
                ...Menu01
            }
        }
        footer: general(section: { eq: "footer-1" }) {
            ...Footer01
        }
        homePage(title: { eq: "photographer-home" }) {
            content {
                ...Content01
            }
        }
        allArticle(limit: 3) {
            nodes {
                ...Article
            }
        }
    }
`;

FeaturesPage.propTypes = {
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

export default FeaturesPage;
