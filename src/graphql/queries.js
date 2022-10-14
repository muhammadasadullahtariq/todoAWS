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
