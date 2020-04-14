import React from "react";
import { Result, Icon, WhiteSpace } from "antd-mobile";
import PageWrapper from "../../../components/pageWrapper";

import styles from "./style.module.css";

const myImg = (src) => (
  <img src={src} className="spe am-icon am-icon-md" alt="" />
);

const ResultComponent = (props) => {
  return (
    <PageWrapper navBarText="Result 结果页" {...props}>
      <div className={styles["result-example"]}>
        <div className={styles["sub-title"]}>支付成功</div>
        <Result
          img={myImg(
            "https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg"
          )}
          title="支付成功"
          message={
            <div>
              998.00元 <del>1098元</del>
            </div>
          }
        />
        <WhiteSpace />
        <div className={styles["sub-title"]}>验证成功</div>
        <Result
          img={
            <Icon
              type="check-circle"
              className="spe"
              style={{ fill: "#1F90E6" }}
            />
          }
          title="验证成功"
          message="所提交内容已成功完成验证"
        />
        <WhiteSpace />
        <div className={styles["sub-title"]}>支付失败</div>
        <Result
          img={
            <Icon
              type="cross-circle-o"
              className="spe"
              style={{ fill: "#F13642" }}
            />
          }
          title="支付失败"
          message="所选银行卡余额不足"
        />
        <WhiteSpace />
        <div className={styles["sub-title"]}>等待处理</div>
        <Result
          img={myImg(
            "https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg"
          )}
          title="等待处理"
          message="已提交申请，等待银行处理"
        />
        <WhiteSpace />
        <div className={styles["sub-title"]}>操作失败</div>
        <Result
          img={myImg(
            "https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg"
          )}
          title="无法完成操作"
          message="由于你的支付宝账户还未绑定淘宝账户请登请登录www.taobao.com"
        />
      </div>
    </PageWrapper>
  );
};

export default ResultComponent;
