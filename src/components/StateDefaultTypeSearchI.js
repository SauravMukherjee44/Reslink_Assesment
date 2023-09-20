import { useMemo } from "react";
import styles from "./StateDefaultTypeSearchI.module.css";

const StateDefaultTypeSearchI = ({
  searchIcon,
  stateDefaultTypeSearchIWidth,
  stateDefaultTypeSearchIPosition,
  stateDefaultTypeSearchITop,
  stateDefaultTypeSearchILeft,
  rectangleDivBorderRadius,
  rectangleDivBackgroundColor,
  textWidth,
  searchFontFamily,
  searchColor,
  searchOpacity,
}) => {
  const stateDefaultTypeSearchIStyle = useMemo(() => {
    return {
      width: stateDefaultTypeSearchIWidth,
      position: stateDefaultTypeSearchIPosition,
      top: stateDefaultTypeSearchITop,
      left: stateDefaultTypeSearchILeft,
    };
  }, [
    stateDefaultTypeSearchIWidth,
    stateDefaultTypeSearchIPosition,
    stateDefaultTypeSearchITop,
    stateDefaultTypeSearchILeft,
  ]);

  const rectangleDivStyle = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius,
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBorderRadius, rectangleDivBackgroundColor]);

  const text2Style = useMemo(() => {
    return {
      width: textWidth,
    };
  }, [textWidth]);

  const searchStyle = useMemo(() => {
    return {
      fontFamily: searchFontFamily,
      color: searchColor,
      opacity: searchOpacity,
    };
  }, [searchFontFamily, searchColor, searchOpacity]);

  return (
    <div
      className={styles.statedefaultTypesearchI}
      style={stateDefaultTypeSearchIStyle}
    >
      <div className={styles.background}>
        <div className={styles.backgroundChild} style={rectangleDivStyle} />
      </div>
      <div className={styles.text} style={text2Style}>
        <div className={styles.search} style={searchStyle}>
          Search
        </div>
      </div>
      <img className={styles.searchIcon} alt="" src={searchIcon} />
    </div>
  );
};

export default StateDefaultTypeSearchI;
