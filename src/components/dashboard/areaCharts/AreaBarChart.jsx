import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../../../context/ThemeContext";
import { FaArrowUpLong } from "react-icons/fa6";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import "./AreaCharts.scss";

const data = [
  { Broker_Name: 'Miller', GWP: 528491.5777, 'Planned GWP': 792737.3665, 'Market Type': 'Open Market' },
  { Broker_Name: 'Howden', GWP: 181322.5075, 'Planned GWP': 271983.7612, 'Market Type': 'Open Market' },
  { Broker_Name: 'Aon', GWP: 84163.92827, 'Planned GWP': 126245.8924, 'Market Type': 'Open Market' },
  { Broker_Name: 'Besso', GWP: 81961.47385, 'Planned GWP': 122942.2108, 'Market Type': 'Open Market' },
  { Broker_Name: 'Croton Stokes', GWP: 988720.6725, 'Planned GWP': 1483081.009, 'Market Type': 'Open Market' },
  { Broker_Name: 'Balance', GWP: 492444.4544, 'Planned GWP': 738666.6816, 'Market Type': 'Open Market' },
  { Broker_Name: 'BMS', GWP: 322499.6381, 'Planned GWP': 483749.4572, 'Market Type': 'Open Market' },
  { Broker_Name: 'JLT', GWP: 335889.4383, 'Planned GWP': 503834.1575, 'Market Type': 'Facilities' },
  { Broker_Name: 'Willis', GWP: 227841.5319, 'Planned GWP': 341762.2979, 'Market Type': 'Facilities' },
  { Broker_Name: 'Aon', GWP: 820441.1325, 'Planned GWP': 1230661.699, 'Market Type': 'Facilities' },
  { Broker_Name: 'Miller', GWP: 121473.8711, 'Planned GWP': 182210.8067, 'Market Type': 'Facilities' },
  { Broker_Name: 'Balance', GWP: 703405.8872, 'Planned GWP': 1055108.831, 'Market Type': 'Facilities' },
  { Broker_Name: 'BMS', GWP: 971255.3747, 'Planned GWP': 1456883.062, 'Market Type': 'Facilities' },
  { Broker_Name: 'Convex', GWP: 79609.14792, 'Planned GWP': 119413.7219, 'Market Type': 'Facilities' },
  { Broker_Name: 'Tysers', GWP: 177177.8924, 'Planned GWP': 265766.8386, 'Market Type': 'Facilities' },
  { Broker_Name: 'McGill', GWP: 872954.7097, 'Planned GWP': 1309432.064, 'Market Type': 'Facilities' },
  { Broker_Name: 'Marsh', GWP: 120539.9394, 'Planned GWP': 180809.9091, 'Market Type': 'Facilities' },
  { Broker_Name: 'Gallagher', GWP: 108111.4883, 'Planned GWP': 162167.2325, 'Market Type': 'Facilities' },
  { Broker_Name: 'Kentro', GWP: 760445.0796, 'Planned GWP': 1140667.619, 'Market Type': 'Facilities' },
  { Broker_Name: 'Hendersons', GWP: 810428.7894, 'Planned GWP': 1215643.184, 'Market Type': 'Facilities' },
  { Broker_Name: 'Gallagher', GWP: 540784.5368, 'Planned GWP': 811176.8053, 'Market Type': 'Open Market' },
  { Broker_Name: 'Hendersons', GWP: 405770.5523, 'Planned GWP': 608655.8284, 'Market Type': 'Open Market' },
  { Broker_Name: 'Kentro', GWP: 96860.17905, 'Planned GWP': 145290.2686, 'Market Type': 'Open Market' },
  { Broker_Name: 'Convex', GWP: 99861.56797, 'Planned GWP': 149792.352, 'Market Type': 'Open Market' },
  { Broker_Name: 'Tysers', GWP: 240378.8173, 'Planned GWP': 360568.226, 'Market Type': 'Open Market' },
  { Broker_Name: 'McGill', GWP: 673146.5883, 'Planned GWP': 1009719.882, 'Market Type': 'Open Market' },
  { Broker_Name: 'Marsh', GWP: 838710.3449, 'Planned GWP': 1258065.517, 'Market Type': 'Open Market' },
  { Broker_Name: 'Miller', GWP: 255148.3673, 'Planned GWP': 382722.5509, 'Market Type': 'Open Market' },
  { Broker_Name: 'Howden', GWP: 985050.2897, 'Planned GWP': 1477575.435, 'Market Type': 'Open Market' },
  { Broker_Name: 'Aon', GWP: 794263.14, 'Planned GWP': 1191394.71, 'Market Type': 'Open Market' },
  { Broker_Name: 'Besso', GWP: 704360.7992, 'Planned GWP': 1056541.199, 'Market Type': 'Open Market' },
  { Broker_Name: 'Croton Stokes', GWP: 279452.7275, 'Planned GWP': 419179.0912, 'Market Type': 'Open Market' },
  { Broker_Name: 'Balance', GWP: 15948.38589, 'Planned GWP': 23922.57883, 'Market Type': 'Open Market' },
  { Broker_Name: 'BMS', GWP: 8139.847271, 'Planned GWP': 12209.77091, 'Market Type': 'Open Market' },
  { Broker_Name: 'JLT', GWP: 804270.8117, 'Planned GWP': 1206406.218, 'Market Type': 'Facilities' },
  { Broker_Name: 'Willis', GWP: 400479.2259, 'Planned GWP': 600718.8389, 'Market Type': 'Facilities' },
  { Broker_Name: 'Aon', GWP: 590964.5555, 'Planned GWP': 886446.8333, 'Market Type': 'Facilities'},
  { Broker_Name: 'Miller', GWP: 520522.583, 'Planned GWP': 780783.8745, 'Market Type': 'Facilities' },
    { Broker_Name: 'Balance', GWP: 818040.2356, 'Planned GWP': 1227060.353, 'Market Type': 'Facilities' },
    { Broker_Name: 'BMS', GWP: 700721.6978, 'Planned GWP': 1051082.547, 'Market Type': 'Facilities' },
    { Broker_Name: 'Convex', GWP: 579046.2041, 'Planned GWP': 868569.3062, 'Market Type': 'Facilities' },
    { Broker_Name: 'Tysers', GWP: 261495.6655, 'Planned GWP': 392243.4983, 'Market Type': 'Facilities' },
    { Broker_Name: 'McGill', GWP: 670246.5034, 'Planned GWP': 1005369.755, 'Market Type': 'Facilities' },
    { Broker_Name: 'Marsh', GWP: 497828.908, 'Planned GWP': 746743.3619, 'Market Type': 'Facilities' },
    { Broker_Name: 'Gallagher', GWP: 573310.2748, 'Planned GWP': 859965.4122, 'Market Type': 'Facilities' },
    { Broker_Name: 'Kentro', GWP: 405060.608, 'Planned GWP': 607590.912, 'Market Type': 'Facilities' },
    { Broker_Name: 'Hendersons', GWP: 64439.62016, 'Planned GWP': 96659.43024, 'Market Type': 'Facilities' },
    { Broker_Name: 'Gallagher', GWP: 115333.5274, 'Planned GWP': 173000.2911, 'Market Type': 'Open Market' },
    { Broker_Name: 'Hendersons', GWP: 501300.819, 'Planned GWP': 751951.2285, 'Market Type': 'Open Market' },
    { Broker_Name: 'Kentro', GWP: 997785.3564, 'Planned GWP': 1496678.035, 'Market Type': 'Open Market' },
    { Broker_Name: 'Convex', GWP: 831935.5456, 'Planned GWP': 1247903.318, 'Market Type': 'Open Market' },
    { Broker_Name: 'Tysers', GWP: 912122.6381, 'Planned GWP': 1368183.957, 'Market Type': 'Open Market' },
    { Broker_Name: 'McGill', GWP: 575548.7145, 'Planned GWP': 863323.0717, 'Market Type': 'Open Market' },
    { Broker_Name: 'Marsh', GWP: 191502.1827, 'Planned GWP': 287253.274, 'Market Type': 'Open Market' }
 ];

 
 const AreaBarChart = () => {
  const { theme } = useContext(ThemeContext);

  const formatTooltipValue = (value) => {
    return `${value}`;
  };

  const formatYAxisLabel = (value) => {
    return `${value / 1000}k`; // Convert GWP to k
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  // Filter open market and facilities data
  const openMarketData = data.filter(item => item['Market Type'] === 'Open Market');
  const facilitiesData = data.filter(item => item['Market Type'] === 'Facilities');

  // Sort open market and facilities data separately
  openMarketData.sort((a, b) => b.GWP - a.GWP);
  facilitiesData.sort((a, b) => b.GWP - a.GWP);

  // Take the top 10 from each market type
  const top10OpenMarketData = openMarketData.slice(0, 10);
  const top10FacilitiesData = facilitiesData.slice(0, 10);

  return (
    <div className="bar-chart">
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={200}
            data={top10OpenMarketData} // Use top 10 open market data
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis
              dataKey="Broker_Name" // Use broker's name as X-axis
              tickSize={0}
              axisLine={false}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
                fontSize: 14,
              }}
            />
            <YAxis
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="GWP"
              fill="#475be8"
              activeBar={false}
              isAnimationActive={false}
              barSize={50}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={200}
            data={top10FacilitiesData} // Use top 10 facilities data
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis
              dataKey="Broker_Name" // Use broker's name as X-axis
              tickSize={0}
              axisLine={false}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
                fontSize: 14,
              }}
            />
            <YAxis
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="GWP"
              fill="#475be8"
              activeBar={false}
              isAnimationActive={false}
              barSize={50}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChart;