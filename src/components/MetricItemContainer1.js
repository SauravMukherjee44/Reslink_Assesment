import styles from "./MetricItemContainer1.module.css";

const MetricItemContainer1 = () => {
  return (
    <div className={styles.metricItem}>
      <div className={styles.heading}>Posted Projects</div>
      <div className={styles.text}>{`See All  `}</div>
      <div className={styles.metricItemChild} />
      <div className={styles.frameParent}>
        <div className={styles.thermalProtectivePerformanceParent}>
          <div className={styles.thermalProtectivePerformance}>
            Thermal protective performance and mult
          </div>
          <div className={styles.resumeReviewParent}>
            <div className={styles.resumeReview}>Resume review</div>
            <div className={styles.frameChild} />
          </div>
        </div>
        <div className={styles.thermalProtectivePerformanceParent}>
          <div className={styles.thermalProtectivePerformance}>
            Effect of heat flux and moisture content on the thermal protective
            performance of outer layer of fire pro
          </div>
          <div className={styles.resumeReviewParent}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameItem} />
              <div className={styles.interview}>Interview</div>
            </div>
          </div>
        </div>
        <div className={styles.thermalProtectivePerformanceParent}>
          <div className={styles.thermalProtectivePerformance}>
            Thermal protective performance and mult
          </div>
          <div className={styles.resumeReviewParent}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameInner} />
              <div className={styles.interview}>Task</div>
            </div>
          </div>
        </div>
        <div className={styles.thermalProtectivePerformanceParent}>
          <div className={styles.thermalProtectivePerformance}>
            Testing and evaluation of functional textiles
          </div>
          <div className={styles.resumeReviewParent}>
            <div className={styles.ellipseParent}>
              <div className={styles.ellipseDiv} />
              <div className={styles.interview}>Payment</div>
            </div>
          </div>
        </div>
        <div className={styles.thermalProtectivePerformanceParent}>
          <div className={styles.thermalProtectivePerformance}>
            Development of thermal liner for Extreme Heat Protective Clothing
          </div>
          <div className={styles.resumeReviewParent}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild1} />
              <div className={styles.interview}>Closed</div>
            </div>
          </div>
        </div>
        <div className={styles.thermalProtectivePerformanceParent}>
          <div className={styles.thermalProtectivePerformance}>
            Testing and evaluation of functional textiles
          </div>
          <div className={styles.resumeReviewParent}>
            <div className={styles.ellipseParent}>
              <div className={styles.ellipseDiv} />
              <div className={styles.interview}>Payment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricItemContainer1;
