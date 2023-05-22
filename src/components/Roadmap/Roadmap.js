import "./Roadmap.css";
import React from "react";

import { ReactComponent as DevelopmentIcon } from "../../assets/img/icons/common/github.svg";
import { ReactComponent as ResearchIcon } from "../../assets/img/icons/common/google.svg";

import roadmapELements from "./RoadmapElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

class Roadmap extends React.Component {
  state = {};
  render() {
    const getMilestoneColor = (milestone) => {
      switch (milestone) {
        case "1":
          return "#4947cf23";
        case "2":
          return "#f500561c";
        case "3":
          return "#038ea118";
        default:
          return "#4947cf50";
      }
    };
    let developmentIconStyles = {
      color: "#172b4d",
      background: "white",
    };
    let researchIconStyles = {
      color: "#172b4d",
      background: "white",
    };
    return (
      <>
        <main>
          <h1 className="roadmapTitle">WORKPLAN</h1>
          <VerticalTimeline lineColor={"#172b4d"} animate={true}>
            {roadmapELements.map((element) => {
              let isDevelopmentIcon = element.icon === "development";

              return (
                <VerticalTimelineElement
                  key={element.id}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={
                    isDevelopmentIcon
                      ? developmentIconStyles
                      : researchIconStyles
                  }
                  icon={
                    isDevelopmentIcon ? <DevelopmentIcon /> : <ResearchIcon />
                  }
                  className={`milestone-${element.milestone}`}
                  contentStyle={{
                    background: getMilestoneColor(element.milestone),
                  }}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {element.location}
                  </h5>
                  <p id="description">{element.description}</p>
                  {element.buttons.map((button) => {
                    return (
                      button.buttonText !== undefined &&
                      button.buttonText !== null &&
                      button.buttonText !== "" && (
                        <a
                          className={`mybutton ${
                            isDevelopmentIcon
                              ? "developmentButton"
                              : "researchButton"
                          }`}
                          href="/"
                        >
                          {button.buttonText}
                        </a>
                      )
                    );
                  })}
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </main>
      </>
    );
  }
}

export default Roadmap;
