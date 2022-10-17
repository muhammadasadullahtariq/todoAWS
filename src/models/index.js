// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { asadTodo, asadCountTask } = initSchema(schema);

export {
  asadTodo,
  asadCountTask
};