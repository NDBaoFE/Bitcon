import React from "react";
import AnimatedNumbers from "react-animated-numbers";
function Number({ num, ...props }) {
    return (
        <AnimatedNumbers
            includeComma
            animateToNumber={num}
            fontStyle={{ fontSize: props.fontSize || "40px" }}
            locale="en-US"
            configs={[
                { mass: 1, tension: 220, friction: 100 },
                { mass: 1, tension: 180, friction: 130 },
                { mass: 1, tension: 280, friction: 90 },
                { mass: 1, tension: 180, friction: 135 },
                { mass: 1, tension: 260, friction: 100 },
                { mass: 1, tension: 210, friction: 180 },
            ]}
        ></AnimatedNumbers>
    );
}

export default Number;
