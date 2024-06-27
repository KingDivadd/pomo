'use client';
import React, { useRef, useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

const DoughnutChart: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);
    const [chartDimensions, setChartDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

    useEffect(() => {
        const resizeHandler = () => {
            const parentWidth = (chartRef.current?.parentNode as HTMLElement)?.clientWidth || 0;
            const parentHeight = (chartRef.current?.parentNode as HTMLElement)?.clientHeight || 0;
            setChartDimensions({ width: parentWidth, height: parentHeight });
        };

        window.addEventListener("resize", resizeHandler);

        // Call resizeHandler once to set initial size
        resizeHandler();

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return (
        <div style={{ height: '105px', width: '105px', minWidth: '20rem', overflowX: 'auto', display: 'flex', justifyContent: 'center' }}>
            <Doughnut
                data={{
                    labels: [
                        'Other Services',
                        'Suspension Inspection and replacement',
                    ],
                    datasets: [{
                        data: [50, 50],
                        backgroundColor: [
                            '#6B7280',
                            '#E5E7EB',
                        ],
                        hoverOffset: 4
                    }]
                }}

                options={{
                    maintainAspectRatio: false, // Set to false to prevent maintaining aspect ratio
                    cutout: '75%', // Adjust this value to reduce the hole in the middle
                    plugins: {
                        legend: {
                            display: false, // Hide the legend
                        },
                    },
                }}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};

export default DoughnutChart;


export const DoughnutChartThree: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);
    const [chartDimensions, setChartDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

    useEffect(() => {
        const resizeHandler = () => {
            const parentWidth = (chartRef.current?.parentNode as HTMLElement)?.clientWidth || 0;
            const parentHeight = (chartRef.current?.parentNode as HTMLElement)?.clientHeight || 0;
            setChartDimensions({ width: parentWidth, height: parentHeight });
        };

        window.addEventListener("resize", resizeHandler);

        // Call resizeHandler once to set initial size
        resizeHandler();

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return (
        <div style={{ height: '105px', width: '105px', minWidth: '20rem', overflowX: 'auto', display: 'flex', justifyContent: 'center' }}>
            <Doughnut
                data={{
                    labels: [
                        'Other Services',
                        'Suspension Inspection and replacement',
                    ],
                    datasets: [{
                        data: [65, 35],
                        backgroundColor: [
                            '#6B7280',
                            '#E5E7EB',
                        ],
                        hoverOffset: 4
                    }]
                }}

                options={{
                    maintainAspectRatio: false, // Set to false to prevent maintaining aspect ratio
                    cutout: '75%', // Adjust this value to reduce the hole in the middle
                    plugins: {
                        legend: {
                            display: false, // Hide the legend
                        },
                    },
                }}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};

export const DoughnutChartFour: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);
    const [chartDimensions, setChartDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

    useEffect(() => {
        const resizeHandler = () => {
            const parentWidth = (chartRef.current?.parentNode as HTMLElement)?.clientWidth || 0;
            const parentHeight = (chartRef.current?.parentNode as HTMLElement)?.clientHeight || 0;
            setChartDimensions({ width: parentWidth, height: parentHeight });
        };

        window.addEventListener("resize", resizeHandler);

        // Call resizeHandler once to set initial size
        resizeHandler();

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return (
        <div style={{ height: '105px', width: '105px', overflowX: 'auto', display: 'flex', justifyContent: 'center' }}>
            <Doughnut
                data={{
                    labels: [
                        'Other Services',
                        'Suspension Inspection and replacement',
                    ],
                    datasets: [{
                        data: [30, 70],
                        backgroundColor: [
                            '#FFFFFF',
                            '#6B7280',
                        ],
                        hoverOffset: 4
                    }]
                }}

                options={{
                    maintainAspectRatio: false, // Set to false to prevent maintaining aspect ratio
                    cutout: '90%', // Adjust this value to reduce the hole in the middle
                    rotation: Math.PI / 2, // Adjust rotation to start at 3 o'clock (90 degrees)
                    plugins: {
                        legend: {
                            display: false, // Hide the legend
                        },
                    },
                }}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};

export const DoughnutChartFive: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);
    const [chartDimensions, setChartDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

    useEffect(() => {
        const resizeHandler = () => {
            const parentWidth = (chartRef.current?.parentNode as HTMLElement)?.clientWidth || 0;
            const parentHeight = (chartRef.current?.parentNode as HTMLElement)?.clientHeight || 0;
            setChartDimensions({ width: parentWidth, height: parentHeight });
        };

        window.addEventListener("resize", resizeHandler);

        // Call resizeHandler once to set initial size
        resizeHandler();

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return (
        <div style={{ height: '105px', width: '105px', overflowX: 'auto', display: 'flex', justifyContent: 'center' }}>
            <Doughnut
                data={{
                    labels: [
                        'Other Services',
                        'Suspension Inspection and replacement',
                    ],
                    datasets: [{
                        data: [100],
                        backgroundColor: [
                            '#FEE2E2',
                        ],
                        hoverOffset: 4
                    }]
                }}

                options={{
                    maintainAspectRatio: false, // Set to false to prevent maintaining aspect ratio
                    cutout: '75%', // Adjust this value to reduce the hole in the middle
                    rotation: Math.PI / 2, // Adjust rotation to start at 3 o'clock (90 degrees)
                    plugins: {
                        legend: {
                            display: false, // Hide the legend
                        },
                    },
                }}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};

export const DoughnutChartSix: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);
    const [chartDimensions, setChartDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

    useEffect(() => {
        const resizeHandler = () => {
            const parentWidth = (chartRef.current?.parentNode as HTMLElement)?.clientWidth || 0;
            const parentHeight = (chartRef.current?.parentNode as HTMLElement)?.clientHeight || 0;
            setChartDimensions({ width: parentWidth, height: parentHeight });
        };

        window.addEventListener("resize", resizeHandler);

        // Call resizeHandler once to set initial size
        resizeHandler();

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return (
        <div style={{ height: '105px', width: '105px', overflowX: 'auto', display: 'flex', justifyContent: 'center' }}>
            <Doughnut
                data={{
                    labels: [
                        'Other Services',
                        'Suspension Inspection and replacement',
                    ],
                    datasets: [{
                        data: [20, 20, 60],
                        backgroundColor: [
                            '#FFFFFF',
                            '#475569',
                            '#FFFFFF',
                        ],
                        borderWidth: 0, // Remove the border
                        hoverOffset: 4
                    }]
                }}
                options={{
                    maintainAspectRatio: false, // Set to false to prevent maintaining aspect ratio
                    cutout: '80%', // Adjust this value to reduce the hole in the middle
                    rotation: Math.PI / 2, // Adjust rotation to start at 3 o'clock (90 degrees)
                    plugins: {
                        legend: {
                            display: false, // Hide the legend
                        },
                    },
                }}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};

export const DoughnutChartSeven: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);
    const [chartDimensions, setChartDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

    useEffect(() => {
        const resizeHandler = () => {
            const parentWidth = (chartRef.current?.parentNode as HTMLElement)?.clientWidth || 0;
            const parentHeight = (chartRef.current?.parentNode as HTMLElement)?.clientHeight || 0;
            setChartDimensions({ width: parentWidth, height: parentHeight });
        };

        window.addEventListener("resize", resizeHandler);

        // Call resizeHandler once to set initial size
        resizeHandler();

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return (
        <div style={{ height: '80px', width: '80px', overflowX: 'auto', display: 'flex', justifyContent: 'center' }}>
            <Doughnut
                data={{
                    labels: [
                        'Other Services',
                        'Suspension Inspection and replacement',
                    ],
                    datasets: [{
                        data: [10, 30, 60],
                        backgroundColor: [
                            '#FFFFFF',
                            '#475569',
                            '#FFFFFF',
                        ],
                        borderWidth: 0, // Remove the border
                        hoverOffset: 4
                    }]
                }}
                options={{
                    maintainAspectRatio: false, // Set to false to prevent maintaining aspect ratio
                    cutout: '80%', // Adjust this value to reduce the hole in the middle
                    rotation: Math.PI / 2, // Adjust rotation to start at 3 o'clock (90 degrees)
                    plugins: {
                        legend: {
                            display: false, // Hide the legend
                        },
                    },
                }}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};

export const DoughnutChartEight: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);
    const [chartDimensions, setChartDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

    useEffect(() => {
        const resizeHandler = () => {
            const parentWidth = (chartRef.current?.parentNode as HTMLElement)?.clientWidth || 0;
            const parentHeight = (chartRef.current?.parentNode as HTMLElement)?.clientHeight || 0;
            setChartDimensions({ width: parentWidth, height: parentHeight });
        };

        window.addEventListener("resize", resizeHandler);

        // Call resizeHandler once to set initial size
        resizeHandler();

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return (
        <div style={{ height: '55px', width: '55px', overflowX: 'auto', display: 'flex', justifyContent: 'center' }}>
            <Doughnut
                data={{
                    labels: [
                        'Other Services',
                        'Suspension Inspection and replacement',
                    ],
                    datasets: [{
                        data: [10, 35, 20, 35],
                        backgroundColor: [
                            '#475569',
                            '#475569',
                            '#FFFFFF',
                            '#475569',
                        ],
                        borderWidth: 0, // Remove the border
                        hoverOffset: 4
                    }]
                }}
                options={{
                    maintainAspectRatio: false, // Set to false to prevent maintaining aspect ratio
                    cutout: '80%', // Adjust this value to reduce the hole in the middle
                    rotation: Math.PI / 2, // Adjust rotation to start at 3 o'clock (90 degrees)
                    plugins: {
                        legend: {
                            display: false, // Hide the legend
                        },
                    },
                }}
                width={chartDimensions.width}
                height={chartDimensions.height}
            />
        </div>
    );
};
