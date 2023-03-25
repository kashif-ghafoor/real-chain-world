import { memo, useMemo } from "react";

const Footer2 = memo(
  ({
    rectangle68Top,
    rectangle68BorderRadius,
    rectangle68BoxShadow,
    rectangle68Width,
    rectangle68Height,
    rectangle68BorderTop,
    rectangle68BoxSizing,
  }) => {
    const rectangleDivStyle = useMemo(() => {
      return {
        top: rectangle68Top,
        borderRadius: rectangle68BorderRadius,
        boxShadow: rectangle68BoxShadow,
        width: rectangle68Width,
        height: rectangle68Height,
        borderTop: rectangle68BorderTop,
        boxSizing: rectangle68BoxSizing,
      };
    }, [
      rectangle68Top,
      rectangle68BorderRadius,
      rectangle68BoxShadow,
      rectangle68Width,
      rectangle68Height,
      rectangle68BorderTop,
      rectangle68BoxSizing,
    ]);

    return (
      <div
        className="absolute top-[54px] left-[0px] rounded-mini bg-white shadow-[0px_2px_2px_2px_rgba(71,_142,_117,_0.3)] w-[531px] h-[758px]"
        style={rectangleDivStyle}
      />
    );
  }
);

export default Footer2;
