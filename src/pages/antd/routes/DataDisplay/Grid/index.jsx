import React from "react";
import { Grid } from "antd-mobile";
import PageWrapper from "../../../components/pageWrapper";

import style from "./style.module.css";

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: "https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
  text: `name${i}`,
}));

const data1 = Array.from(new Array(9)).map(() => ({
  icon: "https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png",
}));

const GridComponent = (props) => (
  <PageWrapper navBarText="Grid 宫格" {...props}>
    <div className={style["sub-title"]}>Always square grid item </div>
    <Grid data={data} activeStyle={false} />

    <div className={style["sub-title"]}>
      Grid item adjust accroiding to img size{" "}
    </div>
    <Grid data={data} square={false} className="not-square-grid" />

    <div className={style["sub-title"]}>ColumnNum=3 </div>
    <Grid data={data} columnNum={3} />

    <div className={style["sub-title"]}>No border</div>
    <Grid data={data} hasLine={false} />

    <div className={style["sub-title"]}>Carousel</div>
    <Grid data={data} isCarousel onClick={(_el) => console.log(_el)} />

    <div className={style["sub-title"]}>Custom content</div>
    <Grid
      data={data1}
      columnNum={3}
      renderItem={(dataItem) => (
        <div style={{ padding: "12.5px" }}>
          <img
            src={dataItem.icon}
            style={{ width: "75px", height: "75px" }}
            alt=""
          />
          <div style={{ color: "#888", fontSize: "14px", marginTop: "12px" }}>
            <span>I am title..</span>
          </div>
        </div>
      )}
    />
    <div className={style["sub-title"]}>Custom GridCell Style</div>
    <Grid
      data={data1}
      columnNum={3}
      itemStyle={{ height: "150px", background: "rgba(0,0,0,.05)" }}
    />
  </PageWrapper>
);

export default GridComponent;
