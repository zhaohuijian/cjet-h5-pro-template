import React from "react";
import { Tag } from "antd-mobile";
import PageWrapper from "../../../components/pageWrapper";

import styles from "./style.module.css";

function onChange(selected) {
  console.log(`tag selected: ${selected}`);
}

const TagComponent = (props) => {
  return (
    <PageWrapper navBarText="Tag 标签" {...props}>
      <div className={styles["tag-container"]}>
        <Tag data-seed="logId">Basic</Tag>
        <Tag selected>Selected</Tag>
        <Tag disabled>Disabled</Tag>
        <Tag onChange={onChange}>Callback</Tag>
        <Tag
          closable
          onClose={() => {
            console.log("onClose");
          }}
          afterClose={() => {
            console.log("afterClose");
          }}
        >
          Closable
        </Tag>
        <Tag small>Small and Readonly</Tag>
      </div>
    </PageWrapper>
  );
};

export default TagComponent;
