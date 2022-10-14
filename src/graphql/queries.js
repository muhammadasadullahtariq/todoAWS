/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAsadTaskManager = /* GraphQL */ `
  query GetAsadTaskManager($id: ID!) {
    getAsadTaskManager(id: $id) {
      id
      user
      name
      task
      createdAt
      updatedAt
    }
  }
`;
export const listAsadTaskManagers = /* GraphQL */ `
  query ListAsadTaskManagers(
    $filter: ModelAsadTaskManagerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAsadTaskManagers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user
        name
        task
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAsadTaskCount = /* GraphQL */ `
  query GetAsadTaskCount($id: ID!) {
    getAsadTaskCount(id: $id) {
      id
      user
      count
      createdAt
      updatedAt
    }
  }
`;
export const listAsadTaskCounts = /* GraphQL */ `
  query ListAsadTaskCounts(
    $filter: ModelAsadTaskCountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAsadTaskCounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        count
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
