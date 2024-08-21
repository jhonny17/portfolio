import { FeatureFlag } from '@/utils';
import { MaintenanceMode } from '@/domains/site-management';
import { USE_MAINTENANCE_MODE } from '@/constants/feature-flags';

export default async function Home() {
  const useMaintenanceMode = await FeatureFlag.isEnabled(USE_MAINTENANCE_MODE);

  if (useMaintenanceMode) {
    return <MaintenanceMode />;
  }

  return <div>Home</div>;
}
