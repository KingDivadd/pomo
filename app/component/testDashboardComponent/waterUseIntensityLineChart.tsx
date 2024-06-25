'use client'
import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement);

const WaterUseIntensityLineChart: React.FC = () => {
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

    return (
        <div
            style={{ width: "100%", height: "100%" }}
            ref={chartRef}
        >
            <Line
                data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Adjust the labels as per the actual data
                    datasets: [
                        {
                            label: 'Water Use Intensity Over Time',
                            data: [50, 45, 60, 55, 70, 65, 75], // Example data points
                            backgroundColor: "rgba(66, 135, 245, 0.2)", // Light blue background
                            borderColor: "rgba(66, 135, 245, 1)", // Dark blue border
                            borderWidth: 1,
                            fill: true,
                            tension: 0.4,
                        }
                    ],
                }}
                options={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                        },
                        tooltip: {
                            callbacks: {
                                label: function(tooltipItem) {
                                    return `Water Use Intensity: ${tooltipItem.raw} gallons/ft²`;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Months'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Water Use Intensity (gallons/ft²)'
                            },
                            beginAtZero: false,
                            min: 40,
                            max: 80,
                        }
                    }
                }}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};

export default WaterUseIntensityLineChart;
