import React from "react";
import { Carousel, WingBlank } from "antd-mobile";
import style from "./style.module.css";
import PageWrapper from "../../../components/pageWrapper";

const CarouselDraw = (props) => {
  return (
    <PageWrapper navBarText="Carousel 走马灯 抽奖" {...props}>
      <WingBlank>
        <Carousel
          vertical
          dots={false}
          dragging={false}
          swiping={false}
          autoplay
          infinite
          speed={200}
          autoplayInterval={300}
          resetAutoplay={false}
        >
          {[
            "ring",
            "ruby",
            "iPhone",
            "iPod",
            "sorry",
            "tourism",
            "coke",
            "ticket",
            "note",
          ].map((type) => (
            <div className={style["v-item"]} key={type}>
              {type}
            </div>
          ))}
        </Carousel>
      </WingBlank>
    </PageWrapper>
  );
};

export default CarouselDraw;
