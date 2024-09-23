import { ProjectIcon, RequestsIcon, UsersIcon, StorageIcon } from '@/components/icons/custom-icons';
import cn from '@/utils/class-names';

const statData = [
  {
    id: '1',
    title: 'Projects',
    icon: <ProjectIcon className="size-5" />,
    iconbgcolor: '#FFF2E9',
    metric: 3,
  },
  {
    id: '2',
    title: 'Requests',
    icon: <RequestsIcon className="size-5" />,
    iconbgcolor: '#EDE8FF',
    metric: 3456
  },
  {
    id: '3',
    title: 'Users',
    icon: <UsersIcon className="size-5" />,
    iconbgcolor: '#EAF9FF',
    metric: 3
  },
  {
    id: '4',
    title: 'Storage',
    icon: <StorageIcon className="size-5" />,
    iconbgcolor: '#FFEBEF',
    metric: '128/500 GB'
  }
];

export function MetricsStat() {
  return (
    <div className="bg-white rounded-xl grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 shadow p-8">
      {statData.map(metric => (
        <div key={metric.id} className="flex items-center justify-center gap-3 py-4">
          <div 
            style={{ backgroundColor: metric.iconbgcolor }} 
            className="h-12 w-12 flex items-center justify-center rounded-lg"
          >
            {metric.icon}
          </div>
          <div className='space-y-1'>
            <p className="text-xs text-gray-500 font-semibold">{metric.title}</p>
            <p className="text-sm">{metric.metric}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
