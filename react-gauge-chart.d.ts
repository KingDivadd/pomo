declare module 'react-gauge-chart' {
    import { Component } from 'react';

interface GaugeChartProps {
    id: string;
    nrOfLevels?: number;
    percent?: number;
    colors?: string[];
    arcWidth?: number;
    arcPadding?: number;
    needleColor?: string;
    textColor?: string;
}

class GaugeChart extends Component<GaugeChartProps> {}

export default GaugeChart;
}
