import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { X } from "react-feather";
import Logo from "@components/logo";
import MainMenu from "@components/main-menu";
import PopupMenu from "@components/popup-menu";
import BurgerButton from "@ui/burger-button";
import Button from "@ui/button";
import { useSticky, useOffcanvas } from "@hooks";
import { ImageType, ButtonType, MenuType, SocialType } from "@utils/types";

const DashboardHeader = ({ className, data }) => {
    const sticky = useSticky();
    const { offcanvas, offcanvasHandler } = useOffcanvas();
    
    return (
        <>
            <header
                className={cn(
                    "rn-header haeder-default black-logo-version header--fixed header--sticky sticky",
                    className
                )}
            >
                <div className="dashboard-header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
                    <div style={{ marginRight: 50 }}>
                        {data?.logo?.[0]?.src && (
                            <div
                                className="header-left"
                                style={{
                                    marginTop: -18,
                                }}
                            >
                                <Logo
                                    image={data.logo[0]}
                                    className="dashboardLogo"
                                />
                            </div>
                        )}
                    </div>

                    <div className="col-lg-8 col-4">
                        <div className="header-cente">
                            {data?.menu && (
                                <MainMenu
                                    className="d-none d-xl-block"
                                    menus={data.menu}
                                />
                            )}
                            <div className="header-right">
                                {/* {data?.button && (
                                    <Button
                                        path={data.button?.path}
                                        className={data.button?.className}
                                    >
                                        <span>{data.button?.content}</span>
                                    </Button>
                                )} */}

                                <BurgerButton
                                    className="d-block d-xl-none"
                                    onClick={offcanvasHandler}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <PopupMenu
                isOpen={offcanvas}
                onClick={offcanvasHandler}
                menus={data?.menu}
                socials={data?.socials}
                slogan={data?.slogan}
                logo={data?.logo?.[1]}
            />
        </>
    );
};

DashboardHeader.propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape({
        logo: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        button: PropTypes.shape(ButtonType),
        menu: PropTypes.arrayOf(PropTypes.shape(MenuType)),
        socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
        slogan: PropTypes.string,
    }),
};

export default DashboardHeader;
