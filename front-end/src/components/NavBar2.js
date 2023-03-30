import { memo, useMemo } from "react";

const NavBar2 = memo(
  ({ rectangle29, rectangle29Height, rectangle29ObjectFit }) => {
    const rectangleIconStyle = useMemo(() => {
      return {
        height: rectangle29Height,
        objectFit: rectangle29ObjectFit,
      };
    }, [rectangle29Height, rectangle29ObjectFit]);

    return (
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[493px] object-cover"
        alt=""
        src={rectangle29}
        style={rectangleIconStyle}
      />
    );
  }
);

export default NavBar2;
