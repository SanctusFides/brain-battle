import * as React from "react";
import {useState} from "react";

type HeaderButtonProps = React.ComponentProps<'button'>

const HeaderTopRowButton = (props: HeaderButtonProps)=> {

    const [isHovered, setIsHovered] = useState(false);

    const defaultStyle: React.CSSProperties = {
        background: isHovered ? "#008dbf" : "#005573",
        padding: "6px 8px 6px 8px",
        cursor: "pointer",
    };

    const hoverStyle: React.CSSProperties = {

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
