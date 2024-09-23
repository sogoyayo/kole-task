'use client';

import { useState } from 'react';
import Image from 'next/image';
import WidgetCard from '@/components/cards/widget-card';
import { ActionIcon } from '../chart-widgets/simple-area-chart';
import { Badge } from '@/components/ui/badge';
import cn from '@/utils/class-names';


const currentDate = new Date();
const previousMonthDate = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth() - 1,
  currentDate.getDate()
);

export default function ProfitLoss({ className }: { className?: string }) {
  const [starRangeDate, setStartRangeDate] = useState<Date>(previousMonthDate);
  const [endRangeDate, setEndRangeDate] = useState<Date>(currentDate);
  const handleRangeChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartRangeDate(start);
    setEndRangeDate(end);
  };

  return (
    <WidgetCard
      title={'P&L'}
      description={"Total profit growth of 25%"}
      action={<ActionIcon className='size-6 cursor-pointer' />}
      descriptionClassName="mt-1 flex items-center text-xs"
      className={cn("shadow-sm", className)}
    >
      <div className="custom-scrollbar -me-2 mt-[18px] grid max-h-[460px] gap-4 overflow-y-auto @sm:gap-5">
        <div className='flex items-start gap-2 '>
            <Badge renderAsDot className={cn('bg-[#FD2254] mt-1')} />
            <div className='space-y-2'>
                <p>Re-used APIs</p>
                <p className='text-lg'>36%</p>
            </div>
        </div>

        <div className='flex items-start gap-2 '>
            <Badge renderAsDot className={cn('bg-[#00B7FE] mt-1')} />
            <div className='space-y-2'>
                <p>Webhooks</p>
                <p className='text-lg'>38%</p>
            </div>
        </div>

        <div className='flex items-start gap-2 '>
            <Badge renderAsDot className={cn('bg-gray mt-1')} />
            <div className='space-y-2'>
                <p>API Calls</p>
                <p className='text-lg'>25%</p>
            </div>
        </div>
      </div>
    </WidgetCard>
  );
}

