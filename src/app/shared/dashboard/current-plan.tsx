'use client';

import { useState } from 'react';
import WidgetCard from '@/components/cards/widget-card';
import { Title, Text } from '@/components/ui/text';
import cn from '@/utils/class-names';
import { ActionIcon } from '../chart-widgets/simple-area-chart';
import { Progressbar } from '@/components/ui/progressbar';
import { PiCaretRight } from 'react-icons/pi';


export function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg 
            viewBox="0 0 18 18" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            {...props}
        >
            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M10.4216 6.3757C10.4216 8.23659 8.89882 9.72786 6.99862 9.72786C5.09911 9.72786 3.57564 8.23659 3.57564 6.3757C3.57564 4.51482 5.09911 3.02354 6.99862 3.02354C8.89882 3.02354 10.4216 4.51482 10.4216 6.3757ZM1.82558 13.5236C1.82558 11.8009 4.20858 11.37 6.99861 11.37C9.8038 11.37 12.1717 11.8158 12.1717 13.5398C12.1717 15.2624 9.78865 15.6934 6.99861 15.6934C4.19342 15.6934 1.82558 15.2475 1.82558 13.5236ZM11.8019 6.43647C11.8019 7.38411 11.5113 8.26836 11.0016 9.00286C10.9486 9.0784 10.9954 9.18025 11.0877 9.19644C11.2158 9.21735 11.3474 9.23016 11.4817 9.23286C12.8178 9.26726 14.0169 8.42484 14.3482 7.15614C14.8392 5.27367 13.3984 3.58343 11.563 3.58343C11.3639 3.58343 11.1731 3.60366 10.9872 3.64076C10.9617 3.64615 10.9341 3.65829 10.9204 3.67988C10.9025 3.70753 10.9155 3.74328 10.9335 3.76689C11.4851 4.52432 11.8019 5.44634 11.8019 6.43647ZM14.0148 10.5567C14.9129 10.7287 15.5032 11.0787 15.7477 11.5893C15.955 12.0075 15.955 12.4931 15.7477 12.9113C15.3737 13.7018 14.167 13.956 13.698 14.0215C13.6009 14.035 13.5231 13.954 13.5334 13.8582C13.7731 11.6675 11.8674 10.6288 11.3742 10.3901C11.3536 10.3786 11.3488 10.3624 11.3508 10.3516C11.3522 10.3449 11.3612 10.3341 11.377 10.3321C12.4438 10.3118 13.5913 10.4555 14.0148 10.5567Z" 
                fill="#00B7FE"
            />
        </svg>
    );
}



export default function CurrentPlan() {
  
  return (
    <WidgetCard
      title={'Current Plan'}
      description="Information and usages of your current plan"
      descriptionClassName='text-xs text-gray-500'
      action={<ActionIcon className='size-6 cursor-pointer' />}
      className='shadow-sm'
    >
        <div className='mt-4 space-y-3'>
            <div className="flex justify-between items-center">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div
                            className={cn(
                                'flex h-11 w-11 items-center justify-center rounded-lg bg-[#F1FBFF] lg:h-12 lg:w-12',
                                
                            )}
                        >
                            <UsersIcon className='size-6' />
                        </div>

                        <div className={cn('ps-3')}>
                            <Text className={cn('mb-0.5 text-gray-500',)}>
                                Teams Plan
                            </Text>
                            <Text
                                className={cn(
                                    'font-lexend text-lg font-semibold text-gray-900 dark:text-gray-700 2xl:xl:text-xl',
                                )}
                            >
                                $99/mo
                            </Text>
                        </div>
                    </div>
                </div>

                <PiCaretRight 
                    strokeWidth={3}
                    className='h-3.5 w-3.5'
                />
            </div>
        

        <div>
            <div>
                <div className="mt-5">
                    <div className='flex items-center justify-between'>
                        <p className="text-sm">Projects</p>
                        <p className="text-sm">1/3</p>
                    </div>
                    <Progressbar
                        value={30}
                        rounded="md"
                        color="warning"
                        aria-label={'Progress bar'}
                        className="mt-2 h-2"
                    />
                    
                </div>
                <div className="mt-5">
                    <div className='flex items-center justify-between'>
                        <p className="text-sm">Users</p>
                        <p className="text-sm">1/5</p>
                    </div>
                    <Progressbar
                        value={85}
                        rounded="md"
                        color="primary"
                        aria-label={'Progress bar'}
                        className="mt-2 h-2"
                    />
                    
                </div>
                <div className="mt-5">
                    <div className='flex items-center justify-between'>
                        <p className="text-sm">Requests/day</p>
                        <p className="text-sm">7.5k/10k</p>
                    </div>
                    <Progressbar
                        value={65}
                        rounded="md"
                        color="danger"
                        aria-label={'Progress bar'}
                        className="mt-2 h-2"
                    />
                    
                </div>
            </div>
        </div>

      </div>
    </WidgetCard>
  );
}
