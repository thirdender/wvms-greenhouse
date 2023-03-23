import React, { useState } from 'react';
import {
  AreaChart, Area, CartesianGrid, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';

function Chart({
  className,
  startColor = '#8884d8',
  stopColor = '#82ca9d',
}) {
  const now = new Date();
  const [data, setData] = useState(
    Array(10).fill().map((x, i) => ({
      date: new Date(now - (24 * 60 * 60 * 1000 * i)),
      temperature: Number((Math.random() * 5) + 18).toFixed(1),
      humidity: Number((Math.random() * 20) + 70).toFixed(1),
    })).reverse(),
  );

  const temperatureValues = data.map(({ temperature }) => temperature);
  return (
    <ResponsiveContainer
      minHeight={250}
      maxHeight={300}
      className={className}
    >
      <AreaChart
        width={1745}
        height={350}
        data={data}
        margin={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <defs>
          <linearGradient id="colorHumidity" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={startColor} stopOpacity={0.8}/>
            <stop offset="95%" stopColor={startColor} stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={stopColor} stopOpacity={0.8}/>
            <stop offset="95%" stopColor={stopColor} stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <YAxis
          dataKey="temperature"
          type="number"
          domain={[
            Math.min.apply(null, temperatureValues),
            Math.max.apply(null, temperatureValues),
          ]}
        />
        <Area
          type="monotone"
          dataKey="temperature"
          name="Temperature"
          isAnimationActive={false}
          stroke={startColor}
          strokeWidth={2}
          fill="url(#colorHumidity)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Chart;
