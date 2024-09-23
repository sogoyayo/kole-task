'use client';

import Link from 'next/link';
import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import { Title } from '@/components/ui/text';

import cn from '@/utils/class-names';
import SimpleBar from '@/components/ui/simplebar';
import { lowerMenuItems, menuItems } from './menu-items';
import Logo from '@/components/logo';

export default function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();
  return (
    <aside
      className={cn(
        'fixed bottom-0 start-0 z-50 h-full w-[270px] border-e-2 border-gray-100 bg-white dark:bg-gray-100/50 2xl:w-72',
        className
      )}
    >
      <div className="sticky top-0 z-40 bg-gray-0/10 px-6 pb-5 pt-5 dark:bg-gray-100/5 2xl:px-8 2xl:pt-6">
        <Link href={'/'} aria-label="Site Logo" className='text-center'>
          <Logo className="size-36 max-w-[255px]" />
        </Link>
      </div>

      <SimpleBar className="h-[calc(100%-80px)]">
        <div className="mt-4 pb-3 3xl:mt-6">
          {menuItems.map((item, index) => {
            const isActive = pathname === (item?.href as string);
            
            return (
              <Fragment key={item.name + '-' + index}>
                {item?.href ? (
                  <>
                      <Link
                        href={item?.href}
                        className={cn(
                          'group relative mx-3 my-0.5 flex items-center justify-between rounded-md px-6 py-6 font-medium capitalize lg:my-1 2xl:mx-5 2xl:my-2',
                          isActive
                            ? 'text-[#551FFF] bg-[#F3F0FF] rounded-full'
                            : 'text-gray-700 transition-colors duration-200 hover:bg-[#F3F0FF] hover:text-[#551FFF]/50 dark:text-[#551FFF]/50 rounded-full'
                        )}
                      >
                        <div className='flex items-center truncate'>
                          {item?.icon && (
                            <span
                              className={cn(
                                'me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[20px] [&>svg]:w-[20px]',
                                isActive
                                  ? 'text-[#551FFF]'
                                  : 'text-gray-500 dark:text-gray-500 group-hover:text-[#551FFF]/50'
                              )}
                            >
                              {item?.icon}
                            </span>
                          )}
                          <span className='truncate'>{item.name}</span>
                        </div>
                      </Link>
                  </>
                ) : (
                  <Title
                    as="h6"
                    className={cn(
                      'mb-2 truncate px-6 text-xs font-normal uppercase tracking-widest text-gray-500 2xl:px-8',
                      index !== 0 && 'mt-6 3xl:mt-7'
                    )}
                  >
                    {item.name}
                  </Title>
                )}
              </Fragment>
            );
          })}
        </div>
        
        <div className='border-b w-[50%] my-3 mx-auto' />

        <div className="mt-4 pb-3 3xl:mt-6">
          {lowerMenuItems.map((item, index) => {
            const isActive = pathname === (item?.href as string);
            
            return (
              <Fragment key={item.name + '-' + index}>
                {item?.href ? (
                  <>
                      <Link
                        href={item?.href}
                        className={cn(
                          'group relative mx-3 my-0.5 flex items-center justify-between rounded-md px-6 py-6 font-medium capitalize lg:my-1 2xl:mx-5 2xl:my-2',
                          isActive
                            ? 'text-[#551FFF] bg-[#F3F0FF] rounded-full'
                            : 'text-gray-700 transition-colors duration-200 hover:bg-[#F3F0FF] hover:text-[#551FFF]/50 dark:text-[#551FFF]/50 rounded-full'
                        )}
                      >
                        <div className='flex items-center truncate'>
                          {item?.icon && (
                            <span
                              className={cn(
                                'me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[20px] [&>svg]:w-[20px]',
                                isActive
                                  ? 'text-[#551FFF]'
                                  : 'text-gray-500 dark:text-gray-500 group-hover:text-[#551FFF]/50'
                              )}
                            >
                              {item?.icon}
                            </span>
                          )}
                          <span className='truncate'>{item.name}</span>
                        </div>
                      </Link>
                  </>
                ) : (
                  <Title
                    as="h6"
                    className={cn(
                      'mb-2 truncate px-6 text-xs font-normal uppercase tracking-widest text-gray-500 2xl:px-8',
                      index !== 0 && 'mt-6 3xl:mt-7'
                    )}
                  >
                    {item.name}
                  </Title>
                )}
              </Fragment>
            );
          })}
        </div>
      </SimpleBar>
    </aside>
  );
}
