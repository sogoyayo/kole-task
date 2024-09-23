'use client';
import { useLayout } from '@/hooks/use-layout';
import HydrogenLayout from '@/layouts/hydrogen/layout';
import { useIsMounted } from '@/hooks/use-is-mounted';
import Dashboard from '../shared/dashboard';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { layout } = useLayout();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }
  return <HydrogenLayout>
    <div className="@container mt-4">
      <Dashboard className="mb-6" />
    </div>
  </HydrogenLayout>;
}
