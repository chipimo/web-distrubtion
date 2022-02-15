import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "@components/section-title";
import PricingCard from "@components/pricing-card/layout-02";
import { SectionTitleType, InnerType, TextType } from "@utils/types";

const PricingArea = ({ data, id }) => {
    return (
        <div
            id={id}
            className="rn-pricing-area pricing-style-2 section-separator"
            style={{ paddingTop: 20, marginBottom: 30 }}
        >
            <div className="container">
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                    data-aos-once="true"
                    className="col-lg-4 col-sm-12"
                >
                    <div className="row">
                        <div
                            className="col-lg-12 "
                            style={{
                                fontSize: 28,
                                textAlign: "center",
                                marginBottom: 20,
                            }}
                        >
                            Pick a plan to suit you
                            {/* {data?.section_title && (
                                <SectionTitle
                                    align="center"
                                    {...data.section_title}
                                />
                            )} */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    {data?.inner?.map((pricing) => (
                        <div
                            key={pricing.id}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="300"
                            data-aos-once="true"
                            className="col-lg-4 col-md-6 col-sm-12"
                        >
                            <PricingCard
                                title={pricing.title}
                                subtitle={pricing.subtitle}
                                price={pricing.price}
                                features={pricing.items}
                                orderLink={pricing.orderLink}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

PricingArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        inner: PropTypes.arrayOf(PropTypes.shape(InnerType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
    }),
};

PricingArea.defaultProps = {
    id: "pricing",
};

export default PricingArea;
