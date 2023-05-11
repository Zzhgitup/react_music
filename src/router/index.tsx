//配置所有路由
import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import {
  Discover,
  Download,
  Focus,
  Mymusic,
  AnchorRadioStation,
  Artist,
  Ranking,
  Recommend,
  Sing,
  NewSongitem
} from './modules/routes.js';
const routes: RouteObject[] = [
  {
    path: '/' /* 重定向 */,
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover/',
        element: <Navigate to="/discover/recommed" />
      },

      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/sing',
        element: <Sing />
      },
      {
        path: '/discover/anchorradiostation',
        element: <AnchorRadioStation />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/newsongitem',
        element: <NewSongitem />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      }
    ]
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mymusic />
  }
];
export default routes;
