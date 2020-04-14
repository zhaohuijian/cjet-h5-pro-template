import React from "react";
import { Carousel, WingBlank } from "antd-mobile";
import style from "./style.module.css";
import PageWrapper from "../../../components/pageWrapper";

const CarouseVertical = (props) => {
  return (
    <PageWrapper navBarText="Carousel 走马灯 竖向" {...props}>
      <WingBlank>
        <Carousel
          className={style["my-carousel"]}
          vertical
          dots={false}
          dragging={false}
          swiping={false}
          autoplay
          infinite
        >
          <div className={style["v-item"]}>carousel 1</div>
          <div className={style["v-item"]}>carousel 2</div>
          <div className={style["v-item"]}>carousel 3</div>
        </Carousel>
      </WingBlank>
    </PageWrapper>
  );
};

export default CarouseVertical;
