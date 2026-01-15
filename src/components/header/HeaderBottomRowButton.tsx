import * as React from "react";
import {useState} from "react";

type HeaderButtonProps = React.ComponentProps<'button'>

const HeaderTopRowButton = (props: HeaderButtonProps)=> {

    const [isHovered, setIsHovered] = useState(false);

    const defaultStyle: React.CSSProperties = {
        padding: "3px 8px 4px 8px",
        cursor: "pointer",
    };

    const hoverStyle: React.CSSProperties = {
        background: "#ffdb84",
        color: "#00394d",
    };

    const currentStyle = { ...defaultStyle, ...(isHovered && hoverStyle) };

    return (
        <button {...props} onClick={props.onClick}
            style={currentStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
        >
            {props.content}
        </button>
    );
};

export default HeaderTopRowButton;
