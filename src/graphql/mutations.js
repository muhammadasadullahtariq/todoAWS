/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAsadTodo = /* GraphQL */ `
  mutation CreateAsadTodo(
    $input: CreateAsadTodoInput!
    $condition: ModelAsadTodoConditionInput
  ) {
    createAsadTodo(input: $input, condition: $condition) {
      id
      name
      task
      user
      createdAt
      updatedAt
    }
  }
`;
export const updateAsadTodo = /* GraphQL */ `
  mutation UpdateAsadTodo(
    $input: UpdateAsadTodoInput!
    $condition: ModelAsadTodoConditionInput
  ) {
    updateAsadTodo(input: $input, condition: $condition) {
      id
      name
      task
      user
      createdAt
      updatedAt
    }
  }
`;
export const deleteAsadTodo = /* GraphQL */ `
  mutation DeleteAsadTodo(
    $input: DeleteAsadTodoInput!
    $condition: ModelAsadTodoConditionInput
  ) {
    deleteAsadTodo(input: $input, condition: $condition) {
      id
      name
      task
      user
      createdAt
      updatedAt
    }
  }
`;
export const createAsadCountTask = /* GraphQL */ `
  mutation CreateAsadCountTask(
    $input: CreateAsadCountTaskInput!
    $condition: ModelAsadCountTaskConditionInput
  ) {
    createAsadCountTask(input: $input, condition: $condition) {
      count
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateAsadCountTask = /* GraphQL */ `
  mutation UpdateAsadCountTask(
    $input: UpdateAsadCountTaskInput!
    $condition: ModelAsadCountTaskConditionInput
  ) {
    updateAsadCountTask(input: $input, condition: $condition) {
      count
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteAsadCountTask = /* GraphQL */ `
  mutation DeleteAsadCountTask(
    $input: DeleteAsadCountTaskInput!
    $condition: ModelAsadCountTaskConditionInput
  ) {
    deleteAsadCountTask(input: $input, condition: $condition) {
      count
      id
      createdAt
      updatedAt
    }
  }
`;
export const createAsadUserImage = /* GraphQL */ `
  mutation CreateAsadUserImage(
    $input: CreateAsadUserImageInput!
    $condition: ModelAsadUserImageConditionInput
  ) {
    createAsadUserImage(input: $input, condition: $condition) {
      id
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateAsadUserImage = /* GraphQL */ `
  mutation UpdateAsadUserImage(
    $input: UpdateAsadUserImageInput!
    $condition: ModelAsadUserImageConditionInput
  ) {
    updateAsadUserImage(input: $input, condition: $condition) {
      id
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteAsadUserImage = /* GraphQL */ `
  mutation DeleteAsadUserImage(
    $input: DeleteAsadUserImageInput!
    $condition: ModelAsadUserImageConditionInput
  ) {
    deleteAsadUserImage(input: $input, condition: $condition) {
      id
      image
      createdAt
      updatedAt
    }
  }
`;
