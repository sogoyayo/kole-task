'use client';

import { DatePicker } from '@/components/ui/datepicker';
import cn from '@/utils/class-names';
import { useState } from 'react';
import { Title } from 'rizzui';

export default function Header() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  return (
    <header
      className={cn(
        '@container sticky top-0 z-50 flex items-center bg-transparent px-4 py-4 backdrop-blur-xl dark:bg-transparent md:px-5 lg:px-6 2xl:py-5 3xl:px-8 4xl:px-10', ''
      )}
    >
    {/* <header className={cn('mb-6 @container xs:-mt-2 lg:mb-7 px-4 py-4',)}> */}
      
      <div className="w-full flex flex-col @lg:flex-row @lg:items-center @lg:justify-between">
        <div>
          <Title
            as="h2"
            className="mb-2 text-[22px] lg:text-2xl 4xl:text-[26px]"
          >
            Dashboard
          </Title>

          <p
            className="flex-wrap"
          >
            Information about your current plan and usages
          </p>
        </div>
        <div className="">
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            dateFormat="eeee, dd MMMM yyyy"
            placeholderText="Select Month"
            showMonthYearPicker
            popperPlacement="bottom-end"
            inputProps={{
              variant: 'text',
              inputClassName: 'p-0 px-1 h-auto [&_input]:text-ellipsis',
            }}
            className="w-64"
          />
        </div>
      </div>

    </header>
  );
}
