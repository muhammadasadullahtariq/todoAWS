// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TaskModel } = initSchema(schema);

export {
  TaskModel
};