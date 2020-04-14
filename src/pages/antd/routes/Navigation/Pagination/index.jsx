import React from "react";
import { Pagination, Icon } from "antd-mobile";
import style from "./style.module.css";
import PageWrapper from "../../../components/pageWrapper";

const locale = {
  prevText: "Prev",
  nextText: "Next",
};

const PaginationComponent = (props) => (
  <PageWrapper navBarText="Pagination 分页器" {...props}>
    <div className={style["pagination-container"]}>
      <p className={style["sub-title"]}>Button with text</p>
      <Pagination total={5} current={1} locale={locale} />

      <p className={style["sub-title"]}>Button with text and icon</p>
      <Pagination
        total={5}
        className={style["custom-pagination-with-icon"]}
        current={1}
        locale={{
          prevText: (
            <span className={style["arrow-align"]}>
              <Icon type="left" />
              上一步
            </span>
          ),
          nextText: (
            <span className={style["arrow-align"]}>
              下一步
              <Icon type="right" />
            </span>
          ),
        }}
      />

      <p className={style["sub-title"]}>Hide number</p>
      <Pagination simple total={5} current={1} locale={locale} />

      <p className={style["sub-title"]}>Show number only</p>
      <Pagination mode="number" total={5} current={3} />

      <p className={style["sub-title"]}>Point style</p>
      <Pagination
        mode="pointer"
        total={5}
        current={2}
        style={{ marginBottom: "16px" }}
      />
    </div>
  </PageWrapper>
);

export default PaginationComponent;
