import React from "react";
import ButtonTab from "../ButtonTab/ButtonTab";
import { threeButtonData } from "../../utils/constants/constants";
import styles from "./TermsAndCondition.module.css";
const TermsAndCondition = () => {
  return (
    <div className={styles.tcContainer}>
      <div>
        <ButtonTab data={threeButtonData} />
      </div>
    </div>
  );
};

export default TermsAndCondition;
