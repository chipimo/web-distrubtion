import React from "react";
import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import Social, { SocialLink } from "@ui/social";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "@ui/offcanvas";
import Icon from "@ui/icon";
import { MenuType, SocialType, ImageType } from "@utils/types";

const PopupMenu = ({ isOpen, onClick, menus, socials, slogan, logo }) => {
    return (
        <Offcanvas isOpen={isOpen} onClick={onClick}>
            <OffcanvasHeader logo={logo} desc={slogan} onClick={onClick} />
            <OffcanvasBody>
                {menus && (
                    <ul className="primary-menu nav nav-pills">
                        {menus.map(({ id, text, path }) => (
                            <li className="nav-item" key={id}>
                                <a
                                    activeclass="active"
                                    className="nav-link smoth-animation"
                                    href={`${path}`}
                                    to={path}
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                >
                                    {text}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </OffcanvasBody>
        </Offcanvas>
    );
};

PopupMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    menus: PropTypes.arrayOf(PropTypes.shape(MenuType)).isRequired,
    socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
    slogan: PropTypes.string,
    logo: PropTypes.shape(ImageType),
};

export default PopupMenu;
