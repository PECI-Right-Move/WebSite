import {
    START_YEAR,
    NUM_OF_YEARS,
    MONTH_NAMES,
    MONTHS_PER_YEAR,
    QUARTERS_PER_YEAR,
    MONTHS_PER_QUARTER,
    NUM_OF_MONTHS,
    MAX_TRACK_START_GAP,
    MAX_ELEMENT_GAP,
    MAX_MONTH_SPAN,
    MIN_MONTH_SPAN,
    MAX_NUM_OF_SUBTRACKS,
} from "./constants";

import {
    fill,
    hexToRgb,
    colourIsLight,
    addMonthsToYear,
    addMonthsToYearAsDate,
    nextColor,
} from "./utils";

import roadmapMilestones from "./Data/RoadmapMilestones";
import roadmapElements from "./Data/RoadmapElements";

let SUBTRACK_ID = 0;

export const buildMonthCells = () => {
    const v = [];
    for (let i = 0; i < MONTHS_PER_YEAR * NUM_OF_YEARS; i += 1) {
        const startMonth = i;
        const start = addMonthsToYearAsDate(START_YEAR, startMonth);
        const end = addMonthsToYearAsDate(START_YEAR, startMonth + 1);
        v.push({
            id: `m${startMonth}`,
            title: MONTH_NAMES[i % 12],
            start,
            end,
        });
    }
    return v;
};

export const buildTimebar = () => [{
    id: "months",
    title: "Months",
    cells: buildMonthCells(),
    useAsGrid: true,
    style: {},
}, ];

export const buildElement = ({ trackId, start, end, i, title, data }) => {
    const bgColor = nextColor();
    const color = colourIsLight(...hexToRgb(bgColor)) ? "#000000" : "#ffffff";
    return {
        id: `t-${trackId}-el-${i}`,
        title: title,
        start,
        end,
        style: {
            backgroundColor: `#${bgColor}`,
            color,
            borderRadius: "4px",
            boxShadow: "1px 1px 0px rgba(0, 0, 0, 0.25)",
            textTransform: "capitalize",
        },
        data,
    };
};

export const buildMilestone = (trackId) => {
    const v = [];

    const element = roadmapMilestones.find((e) => e.id === trackId);
    const start = element.start;
    const end = element.end;
    const i = element.id;
    const title = "Milestone" + i;
    let data = {
        milestone: i,
        groupMembers: "Assigned to all"
    };
    v.push(
        buildElement({
            trackId,
            start,
            end,
            i,
            title,
            data,
        })
    );

    return v;
};

export const buildMilestoneElements = (trackId) => {
    const v = [];

    const element = roadmapElements.find((e) => e.id === trackId);
    const start = element.start;
    const end = element.end;
    const i = element.id;
    const title = element.title;
    let data = {
        milestone: element.milestone,
        groupMembers: element.buttons,
    };
    SUBTRACK_ID++;
    v.push(
        buildElement({
            trackId,
            start,
            end,
            i,
            title,
            data,
        })
    );

    return v;
};

export const buildSubtrack = (trackId, subtrackId) => ({
    id: `track-${trackId}-${subtrackId}`,
    title: `Subtrack ${subtrackId}`,
    elements: buildMilestoneElements(subtrackId),
});

export const buildTrack = (trackId) => {
    let noSubTracks = 0;
    roadmapElements.forEach((element) => {
        if (element.milestone === trackId) {
            noSubTracks++;
        }
    });
    console.log(SUBTRACK_ID);
    const tracks = fill(noSubTracks).map((i) =>
        buildSubtrack(trackId, SUBTRACK_ID)
    );
    return {
        id: `track-${trackId}`,
        title: `Milestone ${trackId}`,
        elements: buildMilestone(trackId),
        tracks,
        // hasButton: true,
        // link: 'www.google.com',
        isOpen: false,
    };
};