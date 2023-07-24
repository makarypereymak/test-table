export enum AppRoutes {
  POSTS = "posts"
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.POSTS]: "/posts/"
};

export type LinkItem = {
  path: string;
  localeKey: string;
};

export const linksInfo: Record<AppRoutes, LinkItem> = {
  [AppRoutes.POSTS]: {
    path: `${routePath.posts}:page`,
    localeKey: "Posts"
  }
};
