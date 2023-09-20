import { useMemo } from "react";
import styles from "./SizesmIconOnly.module.css";

const SizesmIconOnly = ({
  dimensionCode,
  sizesmIconOnlyBackgroundColor,
  sizesmIconOnlyBoxShadow,
  sizesmIconOnlyBorder,
  sizesmIconOnlyBoxSizing,
}) => {
  const sizesmIconOnlyStyle = useMemo(() => {
    return {
      backgroundColor: sizesmIconOnlyBackgroundColor,
      boxShadow: sizesmIconOnlyBoxShadow,
      border: sizesmIconOnlyBorder,
      boxSizing: sizesmIconOnlyBoxSizing,
    };
  }, [
    sizesmIconOnlyBackgroundColor,
    sizesmIconOnlyBoxShadow,
    sizesmIconOnlyBorder,
    sizesmIconOnlyBoxSizing,
  ]);

  return (
    <div className={styles.sizesmIcononly} style={sizesmIconOnlyStyle}>
      <img className={styles.circleIcon} alt="" src={dimensionCode} />
    </div>
  );
};

export default SizesmIconOnly;
