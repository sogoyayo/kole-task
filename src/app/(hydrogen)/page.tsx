import { metaObject } from '@/config/site.config';
import Dashboard from '../shared/dashboard';

export const metadata = {
  ...metaObject(),
};

export default function DashboardPage() {
  <div className="">
    <Dashboard className="mb-6" />
</div>
}
