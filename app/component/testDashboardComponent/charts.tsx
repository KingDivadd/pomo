// 'use client';
import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, ChartOptions, ChartData, Chart } from "chart.js";

ChartJS.register(LineElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement);

// Custom plugin to draw vertical lines
const verticalLinesPlugin = {
    id: 'verticalLines',
    afterDatasetsDraw: (chart: Chart) => {
        const ctx = chart.ctx;
        const xScale = chart.scales.x;
        const yScale = chart.scales.y;
        const dataset = chart.data.datasets[0].data as number[];

        if (!xScale || !yScale) return;

        ctx.save();
        ctx.strokeStyle = '#f1f5f9'; // Color of vertical lines

        dataset.forEach((value, index) => {
            const x = xScale.getPixelForValue(index);
            const y = yScale.getPixelForValue(value);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, yScale.getPixelForValue(0)); // Draw vertical line to x-axis
            ctx.stroke();
        });

        ctx.restore();
    }
};

ChartJS.register(verticalLinesPlugin);

export const BuildingBehaviourLineChartOne: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);
    const [chartDimensions, setChartDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

    useEffect(() => {
        const resizeHandler = () => {
            const parentWidth = (chartRef.current?.parentNode as HTMLElement)?.clientWidth || 0;
            const parentHeight = (chartRef.current?.parentNode as HTMLElement)?.clientHeight || 0;
            setChartDimensions({ width: parentWidth, height: parentHeight });
        };

        window.addEventListener("resize", resizeHandler);
        resizeHandler();

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    const data: ChartData<'line'> = {
        labels: Array.from({ length: 43 }, (_, i) => i + 1),
        datasets: [
            {
                label: 'CO2 Levels Over Time',
                data: [10,10,10,10,10,10,10,11,12,13,14,15,16,17,16,15,14,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,26,25,24,23,22,21,22,23,24,25,25],
                backgroundColor: "rgba(241, 245, 249, 0.2)",
                borderColor: "#f1f5f9", // Set border color to #f1f5f9
                borderWidth: 1,
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `CO2: ${tooltipItem.raw} ppm`;
                    }
                }
            }
        },
        scales: {
            x: {
                display: false, // Hide the x-axis
            },
            y: {
                display: false, // Hide the y-axis
                beginAtZero: true,
            }
        },
        elements: {
            point: {
                radius: 0 // Hide points
            }
        },
        animation: {
            duration: 0 // Disable animations for drawing lines
        }
    };

    return (
        <div
            style={{ width: "100%", height: "100%" }}
            ref={chartRef}
        >
            <Line
                data={data}
                options={options}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};

export const BuildingBehaviourLineChartTwo: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);
    const [chartDimensions, setChartDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

    useEffect(() => {
        const resizeHandler = () => {
            const parentWidth = (chartRef.current?.parentNode as HTMLElement)?.clientWidth || 0;
            const parentHeight = (chartRef.current?.parentNode as HTMLElement)?.clientHeight || 0;
            setChartDimensions({ width: parentWidth, height: parentHeight });
        };

        window.addEventListener("resize", resizeHandler);
        resizeHandler();

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    const data: ChartData<'line'> = {
        labels: Array.from({ length: 43 }, (_, i) => i + 1),
        datasets: [
            {
                label: 'CO2 Levels Over Time',
                data: [10,11,12,13,14,15,15.2,15.4,15.6,15.8,16,16.2,16.4,16.6,16.8,17,17,17,17,17,16.9,16.8,16.7,16.6,16.5,16.4,16.3,16.4,16.5,16.6,16.7,16.9,17,19,21,23,25,27,29,31,33,35,37],
                backgroundColor: "rgba(241, 245, 249, 0.2)",
                borderColor: "#f1f5f9", // Set border color to #f1f5f9
                borderWidth: 1,
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `CO2: ${tooltipItem.raw} ppm`;
                    }
                }
            }
        },
        scales: {
            x: {
                display: false, // Hide the x-axis
            },
            y: {
                display: false, // Hide the y-axis
                beginAtZero: true,
            }
        },
        elements: {
            point: {
                radius: 0 // Hide points
            }
        },
        animation: {
            duration: 0 // Disable animations for drawing lines
        }
    };

    return (
        <div
            style={{ width: "100%", height: "100%" }}
            ref={chartRef}
        >
            <Line
                data={data}
                options={options}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};