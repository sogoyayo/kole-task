'use client';

import cn from '@/utils/class-names';
import { MetricsStat } from './metric-stats';
import Activity from './activity'
import SimpleAreaChart from '../chart-widgets/simple-area-chart';
import Integrations from './integrations';
import ProfitLoss from './profit-loss';
import CurrentPlan from './current-plan';

export default function Dashboard({ className }: { className?: string }) {

  return (
    <div className={cn('grid grid-cols-12 gap-5 @7xl:gap-10', className)}>
      <div className="col-span-full @5xl:col-span-8 space-y-8">
        <MetricsStat />
        <SimpleAreaChart />
        <div className='grid md:grid-cols-2 gap-4'>
          <ProfitLoss className="" />
          <CurrentPlan />
        </div>
      </div>

      <div className="col-span-full divide-y @5xl:col-span-4">
        <Activity />
        <Integrations />
      </div>
    </div>
  );
}
