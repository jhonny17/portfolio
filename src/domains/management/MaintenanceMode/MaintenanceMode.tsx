'use client';

import { ReactNode } from 'react';

import { useFeatureFlag } from '@/contexts/FeatureFlag';
import { USE_MAINTENANCE_MODE } from '@/constants/feature-flags';

export type MaintenanceModeProps = {
  children?: ReactNode;
};

export const MaintenanceMode = ({ children }: MaintenanceModeProps) => {
  const isMaintenanceModeOn = useFeatureFlag(USE_MAINTENANCE_MODE, false);

  if (!isMaintenanceModeOn) {
    return <>{children}</>;
  }

  return (
    <main className="h-dvh grid justify-items-center items-center">
      <div className="relative p-6 min-w-max aspect-video">
        <div className="absolute inset-0 filter blur-3xl rounded-full bg-gradient-to-r from-emerald-500 from-20% via-teal-800 via-50% to-emerald-500 to-90% animate-pulse" />
        <div className="p-8 bg-slate-950 bg-opacity-30 rounded-lg backdrop-blur">
          <div className="grid justify-items-center">
            <h1 className="text-2xl font-serif">Jhonny Vargas Arias</h1>
            <span className="text-sm tracking-wide">Portfolio</span>
            <div className="border-t border-gray-300 w-2/4 my-4" />
            <p>This page is currently under development.</p>
            <p>Stay tuned for updates!</p>
          </div>
        </div>
      </div>
    </main>
  );
};
