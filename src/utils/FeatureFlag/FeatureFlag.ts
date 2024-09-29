'use server';
import { GrowthBook, WidenPrimitives } from '@growthbook/growthbook';

const getInstance = async () => {
  const client = new GrowthBook({
    apiHost: process.env.FEATURE_FLAG_HOST,
    clientKey: process.env.FEATURE_FLAG_CLIENT_KEY,
  });

  await client.init();

  return client;
};

export const getFeatureFlag = async <T extends boolean | string | number>(
  key: string,
  defaultValue?: T,
): Promise<WidenPrimitives<T>> => {
  const client = await getInstance();
  const value = client.getFeatureValue(key, defaultValue) ?? defaultValue;
  client.destroy();
  return value as WidenPrimitives<T>;
};
