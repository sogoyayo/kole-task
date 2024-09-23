'use client';

import { Text, Title } from '@/components/ui/text';
import {
  PiDotsThreeOutlineVerticalFill,
} from 'react-icons/pi';
import { ActionIcon } from '@/components/ui/action-icon';
import Image from 'next/image';
import WidgetCard from '@/components/cards/widget-card';
import SimpleBar from 'simplebar-react';

const activityData = [
  {
    name: "James Anderson",
    avatar: 'https://randomuser.me/api/portraits/men/81.jpg',
    comment: "Called 'Books-API' with the JavaScript webhook and commented. 'Books-API was readily available with proper documentation and reliability of a proper API. It was just a webhook away from application.'",
    isActive: true
  },
  {
    name: "Vector Sam",
    avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
    comment: "Called 'Books-API' with the JavaScript webhook and commented. 'Books-API was readily available with proper documentation and reliability of a proper API. It was just a webhook away from application.'",
    isActive: false
  },
  {
    name: "Nether Stone",
    avatar: 'https://randomuser.me/api/portraits/men/51.jpg',
    comment: "Called 'Books-API' with the JavaScript webhook and commented. 'Books-API was readily available with proper documentation and reliability of a proper API. It was just a webhook away from application.'",
    isActive: false
  },
  {
    name: "Vector Sam",
    avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    comment: "Called 'Books-API' with the JavaScript webhook and commented. 'Books-API was readily available with proper documentation and reliability of a proper API. It was just a webhook away from application.'",
    isActive: false
  },
  {
    name: "Nether leave",
    avatar: 'https://randomuser.me/api/portraits/men/51.jpg',
    comment: "Called 'Books-API' with the JavaScript webhook and commented. 'Books-API was readily available with proper documentation and reliability of a proper API. It was just a webhook away from application.'",
    isActive: false
  },
  {
    name: "Jeff Sox",
    avatar: 'https://randomuser.me/api/portraits/men/81.jpg',
    comment: "Called 'Books-API' with the JavaScript webhook and commented. 'Books-API was readily available with proper documentation and reliability of a proper API. It was just a webhook away from application.'",
    isActive: false
  }
];

interface ActivityThreadProps {
  name: string;
  comment: string;
  avatar: string;
  isActive: boolean;
}


function ActivityThreads({ name, comment, avatar, isActive }: ActivityThreadProps) {
  const itemStyle = isActive ? '' : 'opacity-50';
  const textStyle = isActive ? 'text-gray-900' : 'text-gray-500';

  return (
    <div className={`flex items-start gap-x-2.5 pb-8 border-b last:border-b-0 mt-5 first:mt-0 ${itemStyle}`}>
      <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-full">
        <Image
          src={avatar}
          alt={`${name}'s avatar`}
          layout="fill"
          objectFit="cover" 
          className="rounded-full"
        />
      </div>
      <div className='space-y-3'>
        <Text className={`text-sm font-normal ${textStyle}`}>
          {name}
        </Text>
        <Text className={`text-xs font-normal ${textStyle}`}>
          {comment}
        </Text>
      </div>
    </div>
  );
}


function Activity() {
  return (
    <div className="pb-5">
      <WidgetCard 
        title="Activity" 
        action={
          <ActionIcon title={'More Options'} variant="text">
            <PiDotsThreeOutlineVerticalFill className="h-5 w-5 text-gray-500" />
          </ActionIcon>
        }
        className='mb-5'
      >
        <SimpleBar className="h-full max-h-[730px]">
        {/* flex-grow h-full p-4 max-h-[calc(85vh-10rem)] */}
          {activityData.map((activity, index) => (
            <ActivityThreads
              key={`thread-${index}`}
              name={activity.name}
              comment={activity.comment}
              avatar={activity.avatar}
              isActive={activity.isActive}
            />
          ))}
        </SimpleBar>
        
      </WidgetCard>
    </div>
  );
}

export default Activity;
