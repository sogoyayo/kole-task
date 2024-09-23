
'use client';

import { Text, Title } from '@/components/ui/text';
import {
  PiDotsThreeOutlineVerticalFill,
} from 'react-icons/pi';
import { ActionIcon } from '@/components/ui/action-icon';
import Image from 'next/image';
import WidgetCard from '@/components/cards/widget-card';

const activityData = [
  {
    name: "James Anderson",
    avatar: 'https://randomuser.me/api/portraits/men/81.jpg',
    comment: "Called 'Books-API' with the JavaScript webhook and commented. 'Books-API was readily available with proper documentation and reliability of a proper API. It was just a webhook away from application.'"
  },
  {
    name: "Nether Stone",
    avatar: 'https://randomuser.me/api/portraits/men/51.jpg',
    comment: "Called 'Books-API' with the JavaScript webhook and commented. 'Books-API was readily available with proper documentation and reliability of a proper API. It was just a webhook away from application.'"
  },
];

function IntegrationsThreads({
  name,
  comment,
  avatar,
}: {
  name: string;
  comment: string;
  avatar: string
}) {
  return (
    <div className="flex items-start gap-x-2.5 pb-8">
      <div className="h-9 w-9 flex-shrink-0 overflow-hidden rounded-full bg-slate-400">
        {/* <Image
          className="aspect-square object-cover"
          src={avatar}
          alt={"avatar"}
          fill
          sizes="(max-width: 768px) 100vw"
        /> */}
      </div>
      <div className='space-y-3'>
        <Text className="text-sm font-normal text-gray-500">
          {name}
        </Text>
        <Text className="text-xs font-normal text-gray-500">
          {comment}
        </Text>
      </div>
    </div>
  );
}


function Integrations() {
  return (
    <div className="pb-5">
      <WidgetCard 
        title="Integrations" 
        action={
          <ActionIcon title={'More Options'} variant="text">
            <PiDotsThreeOutlineVerticalFill className="h-5 w-5 text-gray-500" />
          </ActionIcon>
        }
        className='mb-5'
      >
        <div className=''>
          {activityData.map((activity, index) => (
            <IntegrationsThreads
              key={`thread-${index}`}
              name={activity.name}
              comment={activity.comment}
              avatar={activity.avatar}
            />
          ))}
        </div>
        
      </WidgetCard>
    </div>
  );
}

export default Integrations;
