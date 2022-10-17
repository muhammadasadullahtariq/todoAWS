/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAsadTodo = /* GraphQL */ `
  query GetAsadTodo($id: ID!) {
    getAsadTodo(id: $id) {
      id
      name
      task
      user
      createdAt
      updatedAt
    }
  }
`;
export const listAsadTodos = /* GraphQL */ `
  query ListAsadTodos(
    $filter: ModelAsadTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAsadTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        task
        user
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAsadCountTask = /* GraphQL */ `
  query GetAsadCountTask($id: ID!) {
    getAsadCountTask(id: $id) {
      count
      id
      createdAt
      updatedAt
    }
  }
`;
export const listAsadCountTasks = /* GraphQL */ `
  query ListAsadCountTasks(
    $filter: ModelAsadCountTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAsadCountTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        count
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
