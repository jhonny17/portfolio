import { MaintenanceMode } from '@/domains/management';
import { FeatureFlagProvider } from '@/contexts';

export default function Home() {
  return (
    <FeatureFlagProvider>
      <MaintenanceMode>
        <div>
          <h1>Hey this is the content</h1>
        </div>
      </MaintenanceMode>
    </FeatureFlagProvider>
  );
}
