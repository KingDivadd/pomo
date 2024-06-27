'use client';
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
        labels: [100, 100, 100, 100,100, 100,100, 100,100, 105, 120, 140, 160, 180, 200,220,240,220,200,180,160,140,160,180,200, 220,240,260,280,300,280, 260,240,260,280,300,320,340, 360,380,400,420,440],
        datasets: [
            {
                label: 'CO2 Levels Over Time',
                data: [100, 100, 100, 100,100, 100,100, 100,100, 105, 120, 140, 160, 180, 200,220,240,220,200,180,160,140,160,180,200, 220,240,260,280,300,280, 260,240,260,280,300,320,340, 360,380,400,420,440 ],
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
        labels: [100, 100, 100, 100,100, 100,100, 100,100, 105, 120, 140, 160, 180, 200,220,240,220,200,180,160,140,160,180,200, 220,240,260,280,300,280, 260,240,260,280,300,320,340, 360,380,400,420,440],
        datasets: [
            {
                label: 'CO2 Levels Over Time',
                data: [100, 100, 100, 100,100, 100,100, 100,100, 105, 120, 140, 160, 180, 200,220,240,220,200,180,160,140,160,180,200, 220,240,260,280,300,280, 260,240,260,280,300,320,340, 360,380,400,420,440 ],
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
