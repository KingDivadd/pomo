'use client';
import React, { useRef, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const BuildingPerformanceBarOne: React.FC = () => {
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

    const labels = Array.from({ length: 20 }, (_, i) => `Building ${String.fromCharCode(65 + i)}`);
    const dataPoints = Array.from({ length: 20 }, () => Math.floor(Math.random() * 200));

    return (
        <div
            style={{ width: "100%", height: "100%" }}
            ref={chartRef}
        >
            <Bar
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Energy Use Intensity (EUI)',
                            data: dataPoints,
                            backgroundColor: "#E2E8F0", // Corresponds to bg-slate-200
                            borderColor: "#E2E8F0", // Make border same color to blend
                            borderWidth: 0, // Remove border width
                        },
                    ],
                }}
                options={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return `EUI: ${tooltipItem.raw} kWh/ft²`;
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
                }}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};

export default BuildingPerformanceBarOne;