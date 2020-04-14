import React from "react";
import { Accordion, List } from "antd-mobile";
import style from "./style.module.css";
import PageWrapper from "../../../components/pageWrapper";

class AccordionComponent extends React.Component {
  onChange = (key) => {
    console.log(key);
  };
  render() {
    return (
      <PageWrapper navBarText="Accordion 手风琴" {...this.props}>
        <h3>基本</h3>
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <Accordion
            defaultActiveKey="0"
            className={style["my-accordion"]}
            onChange={this.onChange}
          >
            <Accordion.Panel header="Title 1">
              <List className={style["my-list"]}>
                <List.Item>content 1</List.Item>
                <List.Item>content 2</List.Item>
                <List.Item>content 3</List.Item>
              </List>
            </Accordion.Panel>
            <Accordion.Panel header="Title 2" className={style["pad"]}>
              this is panel content2 or other
            </Accordion.Panel>
            <Accordion.Panel header="Title 3" className={style["pad"]}>
              text text text text text text text text text text text text text
              text text
            </Accordion.Panel>
          </Accordion>
        </div>
        <h3>手风琴</h3>
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <Accordion
            accordion
            openAnimation={{}}
            className="my-accordion"
            onChange={this.onChange}
          >
            <Accordion.Panel header="Title 1">
              <List className="my-list">
                <List.Item>content 1</List.Item>
                <List.Item>content 2</List.Item>
                <List.Item>content 3</List.Item>
              </List>
            </Accordion.Panel>
            <Accordion.Panel header="Title 2" className="pad">
              this is panel content2 or other
            </Accordion.Panel>
            <Accordion.Panel header="Title 3" className="pad">
              text text text text text text text text text text text text text
              text text
            </Accordion.Panel>
          </Accordion>
        </div>
      </PageWrapper>
    );
  }
}

export default AccordionComponent;
