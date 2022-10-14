/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAsadTaskManager = /* GraphQL */ `
  mutation CreateAsadTaskManager(
    $input: CreateAsadTaskManagerInput!
    $condition: ModelAsadTaskManagerConditionInput
  ) {
    createAsadTaskManager(input: $input, condition: $condition) {
      id
      user
      name
      task
      createdAt
      updatedAt
    }
  }
`;
export const updateAsadTaskManager = /* GraphQL */ `
  mutation UpdateAsadTaskManager(
    $input: UpdateAsadTaskManagerInput!
    $condition: ModelAsadTaskManagerConditionInput
  ) {
    updateAsadTaskManager(input: $input, condition: $condition) {
      id
      user
      name
      task
      createdAt
      updatedAt
    }
  }
`;
export const deleteAsadTaskManager = /* GraphQL */ `
  mutation DeleteAsadTaskManager(
    $input: DeleteAsadTaskManagerInput!
    $condition: ModelAsadTaskManagerConditionInput
  ) {
    deleteAsadTaskManager(input: $input, condition: $condition) {
      id
      user
      name
      task
      createdAt
      updatedAt
    }
  }
`;
export const createAsadTaskCount = /* GraphQL */ `
  mutation CreateAsadTaskCount(
    $input: CreateAsadTaskCountInput!
    $condition: ModelAsadTaskCountConditionInput
  ) {
    createAsadTaskCount(input: $input, condition: $condition) {
      id
      user
      count
      createdAt
      updatedAt
    }
  }
`;
export const updateAsadTaskCount = /* GraphQL */ `
  mutation UpdateAsadTaskCount(
    $input: UpdateAsadTaskCountInput!
    $condition: ModelAsadTaskCountConditionInput
  ) {
    updateAsadTaskCount(input: $input, condition: $condition) {
      id
      user
      count
      createdAt
      updatedAt
    }
  }
`;
export const deleteAsadTaskCount = /* GraphQL */ `
  mutation DeleteAsadTaskCount(
    $input: DeleteAsadTaskCountInput!
    $condition: ModelAsadTaskCountConditionInput
  ) {
    deleteAsadTaskCount(input: $input, condition: $condition) {
      id
      user
      count
      createdAt
      updatedAt
    }
  }
`;
