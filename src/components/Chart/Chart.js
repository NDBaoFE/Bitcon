import React, { useState, useEffect, useRef } from "react";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ReferenceArea,
    ResponsiveContainer,
} from "recharts";
import { ChartContainer } from "../style";

import DropDown from "../DropDown";
function ChartComponent({ bitcoinPrices, coins }) {
    const [zoomGraph, setZoomGraph] = useState({
        left: "dataMin",
        right: "dataMax",
        refAreaLeft: "",
        data: [],
        refAreaRight: "",
        top: "dataMax+1",
        bottom: "dataMin-1",
        top2: "dataMax+20",
        bottom2: "dataMin-20",
        animation: true,
    });

    const getAxisYDomain = (from, to, ref, offset) => {
        console.log(from, to, ref, offset);
        const refData = bitcoinPrices.slice(from - 1, to);
        console.log(refData);
        let [bottom, top] = [refData[0], refData[0]];
        refData.forEach((d) => {
            if (d[ref] > top) top = d;
            if (d[ref] < bottom) bottom = d;
        });

        return [(bottom | 0) - offset, (top | 0) + offset];
    };
    // Zoom in the chart
    const zoom = () => {
        let { refAreaLeft, refAreaRight } = zoomGraph;
        const data = bitcoinPrices;

        if (refAreaLeft === refAreaRight || refAreaRight === "") {
            setZoomGraph((prev) => ({
                ...prev,
                refAreaLeft: "",
                refAreaRight: "",
            }));
            return;
        }

        // xAxis domain
        if (refAreaLeft && refAreaRight && refAreaLeft > refAreaRight)
            [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

        // yAxis domain
        const [bottom, top] = getAxisYDomain(
            refAreaLeft,
            refAreaRight,
            "cost",
            2
        );
        console.log(` bottom: ${bottom},top: ${top}`);

        setZoomGraph((prev) => ({
            ...prev,
            refAreaLeft: "",
            refAreaRight: "",
            data: data?.slice(),
            left: refAreaLeft,
            right: refAreaRight,
            bottom,
            top,
        }));
    };

    //zoom out
    const zoomOut = () => {
        const { data } = zoomGraph;
        setZoomGraph((prev) => ({
            ...prev,
            data: data?.slice(),
            refAreaLeft: "",
            refAreaRight: "",
            left: "dataMin",
            right: "dataMax",
            top: "dataMax+1",
            bottom: "dataMin",
            top2: "dataMax+50",
            bottom2: "dataMin+50",
        }));
    };
    const { left, right, refAreaLeft, refAreaRight, top, bottom } = zoomGraph;

    return (
        <>
            <button
                type="button"
                className="btn update"
                onClick={() => zoomOut()}
            >
                Zoom Out
            </button>
            {/* //    <DropDown item={coins} /> */}
            <ChartContainer>
                <ResponsiveContainer>
                    <LineChart
                        width={800}
                        height={400}
                        data={bitcoinPrices}
                        margin={{ top: 50, right: 30, left: 0, bottom: 0 }}
                        onMouseDown={(e) =>
                            setZoomGraph((prev) => ({
                                ...prev,
                                refAreaLeft: e.activeLabel,
                            }))
                        }
                        onMouseMove={(e) =>
                            zoomGraph.refAreaLeft &&
                            setZoomGraph((prev) => ({
                                ...prev,
                                refAreaRight: e.activeLabel,
                            }))
                        }
                        // eslint-disable-next-line react/jsx-no-bind
                        onMouseUp={() => zoom()}
                    >
                        <Line
                            type="monotone"
                            dataKey="price"
                            stroke="#A2A1FF"
                            strokeWidth={3}
                            dot={false}
                            animationDuration={300}
                        />
                        {refAreaLeft && refAreaRight ? (
                            <ReferenceArea
                                yAxisId="1"
                                x1={refAreaLeft}
                                x2={refAreaRight}
                                strokeOpacity={0.3}
                            />
                        ) : null}
                        <CartesianGrid
                            stroke="#F8F8F8"
                            strokeDasharray="5 5"
                            yAxis={null}
                            xAxis={null}
                            opacity={0.04}
                        ></CartesianGrid>
                        <XAxis
                            dataKey="time"
                            stroke="#ccc"
                            tick={{ fontSize: 14 }}
                            strokeOpacity={0}
                            domain={left && right ? [left, right] : undefined}
                            interval={1}
                        />
                        <YAxis
                            domain={[bottom, top]}
                            stroke="#ccc"
                            tick={{ fontSize: 14 }}
                            width={80}
                            strokeOpacity={0}
                        />

                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </ChartContainer>
        </>
    );
}

export default ChartComponent;
