import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
    small: 1,
    medium: 2,
    large: 3,
};

const positionVariant = {
    top: "marginTop",
    left: "marginLeft",
    right: "marginRight",
    bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
    const sizeIndex = sizeVariant[size];
    const property = positionVariant[position];
    const value = theme.space[sizeIndex];
    return `${property}:${value}`;
};

const SpaceView = styled.View`
    ${({ variant }) => variant}
`;
export const Spacer = ({ position, size, children }) => {
    const theme = useTheme();
    const variant = getVariant(position, size, theme);

    return <SpaceView variant={variant}>{children}</SpaceView>;
};

Spacer.defaultProps = {
    position: "top",
    size: "small",
};

// this statement not working in android
// export const Spacer = styled.View`
//     ${({ position, size, theme }) => getVariant(position, size, theme)}
// `;

// this is the equivalent of above code
// const TopSmall = styled.View`
//     margin-top: ${(props) => props.theme.space[1]};
// `;
// const TopMedium = styled.View`
//     margin-top: ${(props) => props.theme.space[2]};
// `;
// const TopLarge = styled.View`
//     margin-top: ${(props) => props.theme.space[3]};
// `;
// const LeftSmall = styled.View`
//     margin-left: ${(props) => props.theme.space[1]};
// `;

// const LeftMedium = styled.View`
//     margin-left: ${(props) => props.theme.space[2]};
// `;

// const LeftLarge = styled.View`
//     margin-left: ${(props) => props.theme.space[3]};
// `;

// export const Spacer = ({ variant }) => {
//     if (variant === "top.small") return <TopSmall />;
//     if (variant === "top.medium") return <TopMedium />;
//     if (variant === "top.large") return <TopLarge />;

//     if (variant === "left.small") return <LeftSmall />;
//     if (variant === "left.medium") return <LeftMedium />;
//     if (variant === "left.large") return <LeftLarge />;

//     return <TopSmall />;
// };
