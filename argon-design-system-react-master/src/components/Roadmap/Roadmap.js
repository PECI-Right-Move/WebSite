import "./Roadmap.css"
import React from "react";

import { ReactComponent as DevelopmentIcon } from "../../assets/img/icons/common/github.svg";
import { ReactComponent as ResearchIcon } from "../../assets/img/icons/common/google.svg";   

import roadmapELements from "./RoadmapElements" ;

import { 
    VerticalTimeline, 
    VerticalTimelineElement 
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

class Roadmap extends React.Component {
    state = {};
    render() {
    let developmentIconStyles = {background: "#06D6A0"};
    let researchIconStyles = {background: "#f9c74f"};
      return (
        <>
        <main>
            <h1 className="roadmapTitle">WORKPLAN</h1>
            <VerticalTimeline
                lineColor={ 'indigo' }
                animate={ true }>
                {roadmapELements.map(element => {
                    let isDevelopmentIcon = element.icon === "development";
                    let showButton = 
                        element.buttonText !== undefined &&
                        element.buttonText !== null && 
                        element.buttonText !== "";

                    return (
                        <VerticalTimelineElement 
                            key={element.id}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={isDevelopmentIcon ? developmentIconStyles : researchIconStyles}
                            icon={isDevelopmentIcon ? <DevelopmentIcon/> : <ResearchIcon/> }>
                            
                            <h3  className="vertical-timeline-element-title">
                                {element.title}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                                {element.location}
                            </h5>
                            <p id="description">{element.description}</p> 
                            {showButton && (
                                <a 
                                    className={`mybutton ${
                                        isDevelopmentIcon ? "developmentButton" : "researchButton"
                                    }`} 
                                    href="/">
                                    {element.buttonText}
                                </a>
                            )}

                            </VerticalTimelineElement>
                        );
                    })
                }
            </VerticalTimeline>
        </main>
        </>
        );
    }
}

export default Roadmap;