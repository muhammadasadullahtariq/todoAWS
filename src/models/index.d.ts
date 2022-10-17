import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type asadTodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type asadCountTaskMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class asadTodo {
  readonly id: string;
  readonly name: string;
  readonly task: string;
  readonly user?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<asadTodo, asadTodoMetaData>);
  static copyOf(source: asadTodo, mutator: (draft: MutableModel<asadTodo, asadTodoMetaData>) => MutableModel<asadTodo, asadTodoMetaData> | void): asadTodo;
}

export declare class asadCountTask {
  readonly id: string;
  readonly count: number;
  readonly user?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<asadCountTask, asadCountTaskMetaData>);
  static copyOf(source: asadCountTask, mutator: (draft: MutableModel<asadCountTask, asadCountTaskMetaData>) => MutableModel<asadCountTask, asadCountTaskMetaData> | void): asadCountTask;
}