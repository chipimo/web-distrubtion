import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const SectionTitle = ({
    title,
    subtitle,
    align,
    className,
    titleClass,
    ...rest
}) => {
    return (
        <div
            className={cn(`section-title text-${align}`, className)}
            {...rest}
            style={{ marginTop: -90 }}
        >
            {title && <h2 className={cn("title", titleClass)}>{title}</h2>}
            {subtitle && <span className="subtitle">{subtitle}</span>}
            {/* <div>Tools to build your audience</div>
            <div>Don't just release music — get noticed!</div> */}
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    align: PropTypes.oneOf(["left", "right", "center"]),
    className: PropTypes.string,
    titleClass: PropTypes.string,
};

SectionTitle.defaultProps = {
    align: "left",
};

export default SectionTitle;
