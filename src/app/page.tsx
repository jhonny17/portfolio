import { MaintenanceMode } from '@/domains/management';
import { FeatureFlagProvider } from '@/contexts';

export default function Home() {
  return (
    <FeatureFlagProvider>
      <MaintenanceMode>
        <div>
          <h1>Real Content</h1>
        </div>
      </MaintenanceMode>
    </FeatureFlagProvider>
  );
}
