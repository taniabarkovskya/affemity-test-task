import "./Chart.css";
import { ImplicitLabelType } from "recharts/types/component/Label";
import {
  ComposedChart,
  Line,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import { LineDot } from "recharts/types/cartesian/Line";
import { ChartData } from "../../types/ChartData";

const data: ChartData[] = [
  { name: "Week 1", fill: "#A9DEF4", value: 275, lineValue: 270 },
  { name: "", fill: "#9CC9DC", value: 400, lineValue: 330 },
  { name: "", fill: "#69A8C2", value: 525, lineValue: 425 },
  { name: "", fill: "#5190AA", value: 650, lineValue: 575 },
  { name: "Week 4", fill: "#31728D", value: 800, lineValue: 801 },
];

type CustomDotProps = {
  cx?: number;
  cy?: number;
  index?: number;
};

const CustomDot: React.FC<CustomDotProps> = ({ cx = 0, cy = 0, index = 0 }) => {
  if (index === 0)
    return (
      <circle
        cx={cx}
        cy={cy}
        r={12}
        fill="#A9DEF4"
        stroke="#fff"
        strokeWidth={5}
      />
    );
  if (index === data.length - 1)
    return (
      <circle
        cx={cx}
        cy={cy}
        r={12}
        fill="#31728D"
        stroke="#fff"
        strokeWidth={5}
      />
    );
  return <circle cx={cx} cy={cy} r={0} />;
};

type CustomLabelProps = {
  x?: number;
  y?: number;
  width?: number;
  index?: number;
};

const CustomLabel: React.FC<CustomLabelProps> = ({
  x = 0,
  y = 0,
  width = 0,
  index = 0,
}) => {
  const windowInnerWidth = window.innerWidth;

  let labelWidth = 45;
  let labelHeight = 28;
  let yValueFirst = y - labelHeight - 15;
  let yValueSecond = y - labelHeight - 10;
  
  if (windowInnerWidth > 480) {
    labelWidth = 60;
    labelHeight = 38;
    yValueFirst = y - labelHeight - 25;
    yValueSecond = y - labelHeight - 20;
  }

  if (index === 0) {
    return (
      <g>
        <foreignObject
          x={x + width / 2 - labelWidth / 2}
          y={yValueFirst}
          width={labelWidth}
          height={labelHeight}
          className="chart__label"
        >
          <div className="chart__label-text">You</div>
        </foreignObject>
      </g>
    );
  }

  if (index === data.length - 1)
    return (
      <g>
        <foreignObject
          x={x + width / 2 - labelWidth / 2}
          y={yValueSecond}
          width={labelWidth}
          height={labelHeight}
          className="chart__label"
        >
          <div className="chart__label-text">Goal</div>
        </foreignObject>
      </g>
    );
  return <g></g>;
};

type CustomXAxisLabelProps = {
  x?: number;
  y?: number;
  payload: { value: string };
};

const CustomXAxisLabel: React.FC<CustomXAxisLabelProps> = ({
  x = 0,
  y = 0,
  payload,
}) => {
  return (
    <text
      x={x}
      y={y + 10}
      textAnchor="middle"
      fill="#111111"
      className="chart__xaxis"
    >
      {payload.value}
    </text>
  );
};

export const Chart = () => {
  return (
    <div className="chart">
      <span className="chart__text">
        Take a quiz to get a personalized plan
      </span>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid
            stroke="#D2CFDF"
            vertical={false}
            horizontalValues={[250, 500, 750]}
          />
          <Bar
            dataKey="value"
            fill="fill"
            radius={[5, 5, 5, 5]}
            label={CustomLabel as ImplicitLabelType}
          />
          <XAxis
            dataKey="name"
            axisLine={{ stroke: "#D2CFDF" }}
            tickLine={false}
            tick={CustomXAxisLabel as React.SVGProps<SVGTextElement>}
          />
          <Line
            type="monotone"
            dataKey="lineValue"
            stroke="#111111"
            strokeWidth={3}
            dot={CustomDot as LineDot}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
