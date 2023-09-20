import { useMemo } from "react";
import styles from "./SizemdStatusIconFalseSt.module.css";

const SizemdStatusIconFalseSt = ({
  textFontFamily,
  textColor,
  supportingTextFontFamily,
  supportingTextColor,
}) => {
  const text3Style = useMemo(() => {
    return {
      fontFamily: textFontFamily,
      color: textColor,
    };
  }, [textFontFamily, textColor]);

  const supportingTextStyle = useMemo(() => {
    return {
      fontFamily: supportingTextFontFamily,
      color: supportingTextColor,
    };
  }, [supportingTextFontFamily, supportingTextColor]);

  return (
    <div className={styles.sizemdStatusIconfalseSt}>
      <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
      <div className={styles.textAndSupportingText}>
        <div className={styles.text} style={text3Style}>
          Olivia Rhye
        </div>
        <div className={styles.supportingText} style={supportingTextStyle}>
          olivia@untitledui.com
        </div>
      </div>
    </div>
  );
};

export default SizemdStatusIconFalseSt;
