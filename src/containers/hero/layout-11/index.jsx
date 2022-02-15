import React from "react";
import PropTypes from "prop-types";
import Icon from "@ui/icon";
import Image from "@ui/image";
import Social, { SocialLink } from "@ui/social";
import { ImageType, HeadingType, TextType, SocialType } from "@utils/types";
import { ArrowRight } from "react-feather";

import Button from "@ui/button";

const HeroArea = ({ data, id, useButton }) => {
    return (
        <div id={id} className="rn-slider-area">
            <div className="slide slider-style-4">
                {data?.images?.[0]?.src && (
                    <div className="hero-img">
                        <Image
                            src={data.images[0].src}
                            alt={data.images[0]?.alt || "Hero Bg"}
                        />
                    </div>
                )}
                <div className="container">
                    <div className="row">
                        <div className="order-2 order-lg-1 col-lg-9 col-xl-7">
                            <div className="content">
                                <div
                                    className="inner mb_sm--40"
                                    style={{ marginTop: 120 }}
                                >
                                    {data?.headings?.[0] && (
                                        <h1
                                            className="title slide-title"
                                            dangerouslySetInnerHTML={{
                                                __html: data.headings[0]
                                                    ?.content,
                                            }}
                                        />
                                    )}
                                    {data?.texts?.[0] && (
                                        <div>
                                            <p className="description">
                                                {data.texts[0].content}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                                    {useButton && (
                                        <div style={{ marginTop: 20 }}>
                                            <Button>
                                                <span>JOIN KMP</span>
                                                <ArrowRight />
                                            </Button>
                                        </div>
                                    )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

HeroArea.propTypes = {
    id: PropTypes.string,
    useButton: PropTypes.string,
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

HeroArea.defaultProps = {
    id: "home",
};

export default HeroArea;
