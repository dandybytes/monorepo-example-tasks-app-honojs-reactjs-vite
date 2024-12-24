/* eslint-disable eslint-comments/no-unlimited-disable */

/* eslint-disable */

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/~__root'
import { Route as IndexImport } from './routes/~index'
import { Route as TaskIdEditImport } from './routes/~task/~$id/~edit'
import { Route as TaskIdIndexImport } from './routes/~task/~$id/~index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const TaskIdEditRoute = TaskIdEditImport.update({
  id: '/task/$id/edit',
  path: '/task/$id/edit',
  getParentRoute: () => rootRoute,
} as any)

const TaskIdIndexRoute = TaskIdIndexImport.update({
  id: '/task/$id/',
  path: '/task/$id/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/task/$id/': {
      id: '/task/$id/'
      path: '/task/$id'
      fullPath: '/task/$id'
      preLoaderRoute: typeof TaskIdIndexImport
      parentRoute: typeof rootRoute
    }
    '/task/$id/edit': {
      id: '/task/$id/edit'
      path: '/task/$id/edit'
      fullPath: '/task/$id/edit'
      preLoaderRoute: typeof TaskIdEditImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/task/$id': typeof TaskIdIndexRoute
  '/task/$id/edit': typeof TaskIdEditRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/task/$id': typeof TaskIdIndexRoute
  '/task/$id/edit': typeof TaskIdEditRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/task/$id/': typeof TaskIdIndexRoute
  '/task/$id/edit': typeof TaskIdEditRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/task/$id' | '/task/$id/edit'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/task/$id' | '/task/$id/edit'
  id: '__root__' | '/' | '/task/$id/' | '/task/$id/edit'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  TaskIdIndexRoute: typeof TaskIdIndexRoute
  TaskIdEditRoute: typeof TaskIdEditRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  TaskIdIndexRoute: TaskIdIndexRoute,
  TaskIdEditRoute: TaskIdEditRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "~__root.tsx",
      "children": [
        "/",
        "/task/$id/",
        "/task/$id/edit"
      ]
    },
    "/": {
      "filePath": "~index.tsx"
    },
    "/task/$id/": {
      "filePath": "~task/~$id/~index.tsx"
    },
    "/task/$id/edit": {
      "filePath": "~task/~$id/~edit.tsx"
    }
  }
}
ROUTE_MANIFEST_END */