import { useMemo } from "react";
import styles from "./SizemdIconLeading.module.css";

const SizemdIconLeading = ({
  buttonText,
  buttonIcon,
  sizemdIconLeadingBorderRadius,
  sizemdIconLeadingBackgroundColor,
  sizemdIconLeadingBorder,
  sizemdIconLeadingPadding,
  textFontFamily,
  textColor,
}) => {
  const sizemdIconLeadingStyle = useMemo(() => {
    return {
      borderRadius: sizemdIconLeadingBorderRadius,
      backgroundColor: sizemdIconLeadingBackgroundColor,
      border: sizemdIconLeadingBorder,
      padding: sizemdIconLeadingPadding,
    };
  }, [
    sizemdIconLeadingBorderRadius,
    sizemdIconLeadingBackgroundColor,
    sizemdIconLeadingBorder,
    sizemdIconLeadingPadding,
  ]);

  const textStyle = useMemo(() => {
    return {
      fontFamily: textFontFamily,
      color: textColor,
    };
  }, [textFontFamily, textColor]);

  return (
    <div className={styles.sizemdIconleading} style={sizemdIconLeadingStyle}>
      <img className={styles.circleIcon} alt="" src={buttonText} />
      <div className={styles.text} style={textStyle}>
        {buttonIcon}
      </div>
    </div>
  );
};

export default SizemdIconLeading;
