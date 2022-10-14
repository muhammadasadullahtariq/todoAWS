import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type TaskModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class TaskModel {
  readonly id: string;
  readonly name?: string | null;
  readonly task?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TaskModel, TaskModelMetaData>);
  static copyOf(source: TaskModel, mutator: (draft: MutableModel<TaskModel, TaskModelMetaData>) => MutableModel<TaskModel, TaskModelMetaData> | void): TaskModel;
}