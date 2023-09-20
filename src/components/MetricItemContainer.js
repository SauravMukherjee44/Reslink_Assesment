import styles from "./MetricItemContainer.module.css";

const MetricItemContainer = ({ projectNumber, listIcon, imageIconUrl }) => {
  return (
    <div className={styles.metricItem}>
      <div className={styles.numberAndChartParent}>
        <div className={styles.numberAndChart}>
          <div className={styles.numberAndBadge}>
            <div className={styles.number}>{projectNumber}</div>
          </div>
        </div>
        <div className={styles.headingAndDropdown}>
          <div className={styles.heading}>{listIcon}</div>
        </div>
      </div>
      <img className={styles.metricItemChild} alt="" src={imageIconUrl} />
    </div>
  );
};

export default MetricItemContainer;
