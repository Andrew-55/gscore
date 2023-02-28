import React, { FC } from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

export const SkeletonCard: FC<IContentLoaderProps> = (
  props: IContentLoaderProps
) => (
  <ContentLoader
    speed={2}
    width={620}
    height={329}
    viewBox="0 0 620 329"
    backgroundColor="#272727"
    foregroundColor="#757575"
    {...props}
  >
    <rect x="0" y="0" rx="12" ry="12" width="617" height="329" />
  </ContentLoader>
);
