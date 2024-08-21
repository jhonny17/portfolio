'use client';

import { useEffect, useState } from 'react';

import { MaintenanceMode } from '@/domains/site-management';
import { USE_MAINTENANCE_MODE } from '@/constants/feature-flags';

export default function Home() {
  const [useMaintenanceMode, setUseMaintenanceMode] = useState(false);

  useEffect(() => {
    const fetchMaintenanceMode = async () => {};

    fetchMaintenanceMode();
  });

  if (useMaintenanceMode) {
    return <MaintenanceMode />;
  }

  return <div>Home</div>;
}
