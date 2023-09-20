import SizemdStatusIconFalseSt from "../components/SizemdStatusIconFalseSt";
import SizesmHierarchyTertiaryGr from "../components/SizesmHierarchyTertiaryGr";
import StateDefaultTypeSearchI from "../components/StateDefaultTypeSearchI";
import SizemdHierarchyPrimaryIc from "../components/SizemdHierarchyPrimaryIc";
import MetricItemContainer from "../components/MetricItemContainer";
import MetricItemContainer1 from "../components/MetricItemContainer1";
import RecentActivitiesContainer from "../components/RecentActivitiesContainer";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.divheroBlurBg} />
      <div className={styles.sidebarNavigation}>
        <div className={styles.content}>
          <div className={styles.nav}>
            <div className={styles.header}>
              <img className={styles.logoIcon} alt="" src="/logo.svg" />
            </div>
            <div className={styles.navigation}>
              <div className={styles.navItemBase}>
                <div className={styles.content1}>
                  <img
                    className={styles.barChart2Icon}
                    alt=""
                    src="/barchart2.svg"
                  />
                  <div className={styles.text}>Dashboard</div>
                </div>
              </div>
              <div className={styles.navItemBase1}>
                <div className={styles.content1}>
                  <img
                    className={styles.barChart2Icon}
                    alt=""
                    src="/3layers.svg"
                  />
                  <div className={styles.text}>Projects</div>
                </div>
              </div>
              <div className={styles.navItemBase1}>
                <div className={styles.content1}>
                  <img
                    className={styles.barChart2Icon}
                    alt=""
                    src="/users.svg"
                  />
                  <div className={styles.text}>Staffing</div>
                </div>
              </div>
              <div className={styles.navItemBase1}>
                <div className={styles.content1}>
                  <img
                    className={styles.barChart2Icon}
                    alt=""
                    src="/solarchatlinebroken.svg"
                  />
                  <div className={styles.text}>Messages</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerParent}>
            <div className={styles.footer}>
              <div className={styles.navigation1}>
                <div className={styles.navItemBase4}>
                  <div className={styles.content1}>
                    <img
                      className={styles.barChart2Icon}
                      alt=""
                      src="/barchart2.svg"
                    />
                    <div className={styles.text}>Support</div>
                  </div>
                </div>
                <div className={styles.navItemBase4}>
                  <div className={styles.content1}>
                    <img
                      className={styles.barChart2Icon}
                      alt=""
                      src="/settings.svg"
                    />
                    <div className={styles.text}>Settings</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footer1}>
              <img className={styles.dividerIcon} alt="" src="/divider.svg" />
              <div className={styles.account}>
                <SizemdStatusIconFalseSt
                  textFontFamily="Poppins"
                  textColor="#fefefe"
                  supportingTextFontFamily="Poppins"
                  supportingTextColor="#f2f4f7"
                />
                <div className={styles.icon}>
                  <SizesmHierarchyTertiaryGr
                    dimensionCode="/logout.svg"
                    sizesmHierarchyTertiaryGrPosition="absolute"
                    sizesmHierarchyTertiaryGrTop="calc(50% - 18px)"
                    sizesmHierarchyTertiaryGrLeft="calc(50% - 18px)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divheroBlurBg1} />
      <StateDefaultTypeSearchI
        searchIcon="/search-icon1.svg"
        stateDefaultTypeSearchIWidth="341px"
        stateDefaultTypeSearchIPosition="absolute"
        stateDefaultTypeSearchITop="calc(50% - 448px)"
        stateDefaultTypeSearchILeft="332px"
        rectangleDivBorderRadius="26px"
        rectangleDivBackgroundColor="#101215"
        textWidth="48px"
        searchFontFamily="Poppins"
        searchColor="#fefefe"
        searchOpacity="0.8"
      />
      <div className={styles.vuesaxlinearnotificationWrapper}>
        <img
          className={styles.vuesaxlinearnotificationIcon}
          alt=""
          src="/vuesaxlinearnotification1.svg"
        />
      </div>
      <div className={styles.footer2}>
        <div className={styles.footerChild} />
        <div className={styles.copyright2023}>
          Copyright © 2023. Reslink. All rights reserved.
        </div>
      </div>
      <div className={styles.headerSection}>
        <div className={styles.container}>
          <div className={styles.pageHeader}>
            <div className={styles.content7}>
              <div className={styles.textAndSupportingText}>
                <div className={styles.text6}>Welcome back, Olivia</div>
                <div className={styles.supportingText}>
                  Track, manage researchers and submissions.
                </div>
              </div>
              <div className={styles.actions}>
                <div className={styles.button04}>
                  <div className={styles.buttonBase}>
                    <div className={styles.text7}>Tertiary</div>
                  </div>
                </div>
                <div className={styles.button03}>
                  <div className={styles.buttonBase1}>
                    <div className={styles.text7}>Secondary</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SizemdHierarchyPrimaryIc
        circle="/plus.svg"
        text="Create New Project"
        sizemdHierarchyPrimaryIcPosition="absolute"
        sizemdHierarchyPrimaryIcTop="32px"
        sizemdHierarchyPrimaryIcRight="53px"
        buttonBaseBorderRadius="25px"
        buttonBaseBackgroundColor="#3fa268"
        buttonBaseBorder="1px solid var(--primary-green)"
        buttonBasePadding="13px var(--padding-xl)"
        textFontFamily="Poppins"
        textColor="#fefefe"
      />
      <div className={styles.metricGroup}>
        <MetricItemContainer
          projectNumber="07"
          listIcon="Active Projects"
          imageIconUrl="/frame-1261152735.svg"
        />
        <MetricItemContainer
          projectNumber="04"
          listIcon="Proposals"
          imageIconUrl="/frame-12611527351.svg"
        />
        <MetricItemContainer
          projectNumber="03"
          listIcon="Active Jobs"
          imageIconUrl="/frame-12611527352.svg"
        />
        <MetricItemContainer
          projectNumber="240"
          listIcon="Application"
          imageIconUrl="/frame-12611527353.svg"
        />
      </div>
      <div className={styles.metricItemParent}>
        <MetricItemContainer1 />
        <RecentActivitiesContainer />
      </div>
    </div>
  );
};

export default Dashboard;
