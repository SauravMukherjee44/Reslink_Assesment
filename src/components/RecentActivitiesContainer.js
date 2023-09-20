import styles from "./RecentActivitiesContainer.module.css";

const RecentActivitiesContainer = () => {
  return (
    <div className={styles.metricItem}>
      <div className={styles.heading}>Recent Activities</div>
      <div className={styles.metricItemChild} />
      <div className={styles.frameParent}>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <div className={styles.interviewIsScheduled}>
            Interview is scheduled for 12PM
          </div>
          <div className={styles.pmWrapper}>
            <div className={styles.pm}>6:29PM</div>
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.frameItem} />
          <div className={styles.interviewIsScheduled}>
            Applicant applied on Technical researcher
          </div>
          <div className={styles.pmWrapper}>
            <div className={styles.pm}>8:21PM</div>
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.frameInner} />
          <div className={styles.interviewIsScheduled}>
            Interview is cancelled
          </div>
          <div className={styles.pmWrapper}>
            <div className={styles.pm}>7:10PM</div>
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.frameItem} />
          <div className={styles.interviewIsScheduled}>
            Applicant applied on Technical researcher
          </div>
          <div className={styles.pmWrapper}>
            <div className={styles.pm}>6:29PM</div>
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild1} />
          <div className={styles.interviewIsScheduled}>Recieved Proposal</div>
          <div className={styles.pmWrapper}>
            <div className={styles.pm}>6:29PM</div>
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <div className={styles.interviewIsScheduled}>
            Interview is scheduled for 12PM
          </div>
          <div className={styles.pmWrapper}>
            <div className={styles.pm}>6:29PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivitiesContainer;
