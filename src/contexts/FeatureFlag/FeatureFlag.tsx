'use client';

import { ReactNode, useEffect, useState } from 'react';
import {
  GrowthBook,
  GrowthBookProvider,
  JSONValue,
  useFeatureValue,
} from '@growthbook/growthbook-react';

export type FeatureFlagProviderProps = {
  children?: ReactNode;
};

export const useFeature = <T extends JSONValue>(
  key: string,
  defaultValue: T,
): T => {
  const value = useFeatureValue<T>(key, defaultValue);
  return value as T;
};

export const FeatureFlagProvider = ({ children }: FeatureFlagProviderProps) => {
  const [client, setClient] = useState<GrowthBook<Record<string, any>> | null>(
    null,
  );

  useEffect(() => {
    const initFeatureFlag = async () => {
      const growthbook = new GrowthBook({
        apiHost: process.env.NEXT_PUBLIC_FEATURE_FLAG_HOST,
        clientKey: process.env.NEXT_PUBLIC_FEATURE_FLAG_CLIENT_KEY,
        enableDevMode: true,
      });

      await growthbook.init();

      setClient(growthbook);
    };

    initFeatureFlag();
  }, []);

  if (!client) {
    return null;
  }

  return (
    <GrowthBookProvider growthbook={client}>{children}</GrowthBookProvider>
  );
};
