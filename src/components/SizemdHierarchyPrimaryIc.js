import { useMemo } from "react";
import styles from "./SizemdHierarchyPrimaryIc.module.css";

const SizemdHierarchyPrimaryIc = ({
  circle,
  text,
  sizemdHierarchyPrimaryIcPosition,
  sizemdHierarchyPrimaryIcTop,
  sizemdHierarchyPrimaryIcRight,
  buttonBaseBorderRadius,
  buttonBaseBackgroundColor,
  buttonBaseBorder,
  buttonBasePadding,
  textFontFamily,
  textColor,
}) => {
  const sizemdHierarchyPrimaryIcStyle = useMemo(() => {
    return {
      position: sizemdHierarchyPrimaryIcPosition,
      top: sizemdHierarchyPrimaryIcTop,
      right: sizemdHierarchyPrimaryIcRight,
    };
  }, [
    sizemdHierarchyPrimaryIcPosition,
    sizemdHierarchyPrimaryIcTop,
    sizemdHierarchyPrimaryIcRight,
  ]);

  const buttonBaseStyle = useMemo(() => {
    return {
      borderRadius: buttonBaseBorderRadius,
      backgroundColor: buttonBaseBackgroundColor,
      border: buttonBaseBorder,
      padding: buttonBasePadding,
    };
  }, [
    buttonBaseBorderRadius,
    buttonBaseBackgroundColor,
    buttonBaseBorder,
    buttonBasePadding,
  ]);

  const text1Style = useMemo(() => {
    return {
      fontFamily: textFontFamily,
      color: textColor,
    };
  }, [textFontFamily, textColor]);

  return (
    <div
      className={styles.sizemdHierarchyprimaryIc}
      style={sizemdHierarchyPrimaryIcStyle}
    >
      <div className={styles.buttonBase} style={buttonBaseStyle}>
        <img className={styles.circleIcon} alt="" src={circle} />
        <div className={styles.text} style={text1Style}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default SizemdHierarchyPrimaryIc;
