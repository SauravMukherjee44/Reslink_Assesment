import { useMemo } from "react";
import styles from "./SizesmHierarchyTertiaryGr.module.css";

const SizesmHierarchyTertiaryGr = ({
  dimensionCode,
  sizesmHierarchyTertiaryGrPosition,
  sizesmHierarchyTertiaryGrTop,
  sizesmHierarchyTertiaryGrLeft,
}) => {
  const sizesmHierarchyTertiaryGrStyle = useMemo(() => {
    return {
      position: sizesmHierarchyTertiaryGrPosition,
      top: sizesmHierarchyTertiaryGrTop,
      left: sizesmHierarchyTertiaryGrLeft,
    };
  }, [
    sizesmHierarchyTertiaryGrPosition,
    sizesmHierarchyTertiaryGrTop,
    sizesmHierarchyTertiaryGrLeft,
  ]);

  return (
    <div
      className={styles.sizesmHierarchytertiaryGr}
      style={sizesmHierarchyTertiaryGrStyle}
    >
      <div className={styles.buttonBase}>
        <img className={styles.circleIcon} alt="" src={dimensionCode} />
      </div>
    </div>
  );
};

export default SizesmHierarchyTertiaryGr;
