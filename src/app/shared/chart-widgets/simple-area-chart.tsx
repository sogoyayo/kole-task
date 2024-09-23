'use client';

import WidgetCard from '@/components/cards/widget-card';
import { CustomTooltip } from '@/components/charts/custom-tooltip';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    time: '10:30 AM',
    calls: 3000
  },
  {
    time: '11:30 AM',
    calls: 4500
  },
  {
    time: '12:30 PM',
    calls: 6200
  },
  {
    time: '01:30 PM',
    calls: 5400
  },
  {
    time: '02:30 PM',
    calls: 5800
  },
  {
    time: '03:30 PM',
    calls: 3600
  }
];


export function ActionIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
      <svg
          viewBox="0 0 17 18" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          {...props}
      >
          <path d="M7.33771 12.0802H2.90277" stroke="#92959E" strokeWidth="1.05582" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.31583 5.25778H13.7508" stroke="#92959E" strokeWidth="1.05582" strokeLinecap="round" strokeLinejoin="round"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M6.20878 5.21968C6.20878 4.3077 5.46397 3.56821 4.54542 3.56821C3.62687 3.56821 2.88205 4.3077 2.88205 5.21968C2.88205 6.13167 3.62687 6.87116 4.54542 6.87116C5.46397 6.87116 6.20878 6.13167 6.20878 5.21968Z" stroke="#92959E" strokeWidth="1.05582" strokeLinecap="round" strokeLinejoin="round"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M14.1441 12.0526C14.1441 11.1406 13.3998 10.4011 12.4813 10.4011C11.5622 10.4011 10.8174 11.1406 10.8174 12.0526C10.8174 12.9646 11.5622 13.7041 12.4813 13.7041C13.3998 13.7041 14.1441 12.9646 14.1441 12.0526Z" stroke="#92959E" strokeWidth="1.05582" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
  );
}




export default function SimpleAreaChart() {
  return (
    <WidgetCard title={'API Calls in last 6 hours'} action={<ActionIcon className='size-6 cursor-pointer' />} className="max-h-[600px]">
      <div className="mt-5 aspect-[1060/660] w-full lg:mt-7">
        <ResponsiveContainer width="100%" height="85%">
          <AreaChart
            data={data}
            margin={{
              left: -20,
            }}
            className="[&_.recharts-cartesian-grid-vertical]:opacity-0"
          >
            <defs>
              <linearGradient id="simpleAreaChart" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  // stopColor="#3872FA"
                  stopColor="#7549FF"
                  className="[stop-opacity:0.3] dark:[stop-opacity:0.2]"
                />
                <stop offset="95%" stopColor={'#7549FF'} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time"/>
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="calls"
              stroke="#7549FF"
              fill="url(#simpleAreaChart)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </WidgetCard>
  );
}
