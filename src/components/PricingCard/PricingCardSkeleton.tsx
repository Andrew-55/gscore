import React, { FC } from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

export const PricingCardSkeleton: FC<IContentLoaderProps> = (
  props: IContentLoaderProps
) => (
  <ContentLoader
    speed={2}
    width={404}
    height={612}
    viewBox="0 0 404 612"
    backgroundColor="#272727"
    foregroundColor="#757575"
    {...props}
  >
    <rect x="0" y="0" rx="12" ry="12" width="400" height="594" />
  </ContentLoader>
);
