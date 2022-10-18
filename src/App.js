import React, { useState, useEffect } from "react";
import { Amplify, Auth } from "aws-amplify";
import awsmobile from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { createAsadTodo, deleteAsadTodo } from "./graphql/mutations";

import {
  listAsadTodos,
  getAsadCountTask,
  listAsadCountTasks,
} from "./graphql/queries";
import { onDeleteAsadTodo, onCreateAsadTodo } from "./graphql/subscriptions";

Amplify.configure(awsmobile);
const App = () => {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        var list = await API.graphql(
          graphqlOperation(listAsadTodos, {
            filter: {
              user: {
                eq: Auth.user.username,
              },
            },
          })
        );
      } catch (error) {
        console.log("error is", error);
      }
      console.log("list is ", list);
      setList(list.data.listAsadTodos.items);
    })();
    getCount();
    sunscribeToDeleteTask();
    sunscribeToCreateTask();
  }, []);

  const getCount = async () => {
    try {
      var count = await API.graphql(
        graphqlOperation(getAsadCountTask, {
          id: Auth.user.username,
        })
      );
    } catch (error) {
      console.log("error is", error.errors[0].message);
    }
    console.log("count is ", count);
    setCount(count.data.getAsadCountTask.count);
  };

  const sunscribeToDeleteTask = async () => {
    try {
      console.log("subscribing to count task" + Auth.user.username);
      API.graphql(
        graphqlOperation(onDeleteAsadTodo, {
          filter: {
            user: {
              eq: Auth.user.username,
            },
          },
        })
      ).subscribe({
        next: (eventData) => {
          getCount();
        },
        error: (error) => {
          console.log("error is", error);
        },
      });
    } catch (error) {
      console.log("error is", error);
    }
  };

  const sunscribeToCreateTask = async () => {
    try {
      const subscription = API.graphql(
        graphqlOperation(onCreateAsadTodo, {
          filter: {
            user: {
              eq: Auth.user.username,
            },
          },
        })
      );
      console.log("subscription is", subscription);
      subscription.subscribe({
        next: (eventData) => {
          getCount();
        },
      });
    } catch (error) {
      console.log("error is", error);
    }
  };

  const addTask = async () => {
    try {
      const taskObj = {
        name,
        task,
        user: Auth.user.username,
      };
      setName("");
      setTask("");
      const result = await API.graphql(
        graphqlOperation(createAsadTodo, { input: taskObj })
      );
      console.log(result);
      setList([...list, result.data.createAsadTodo]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const result = await API.graphql(
        graphqlOperation(deleteAsadTodo, { input: { id } })
      );
      console.log(result);
      setList(list.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div style={{ alignItems: "center" }}>
        <h3>{"User Name :\t" + Auth.user.username}</h3>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <h4>{"Count is :\t" + count}</h4>
          <img
            src={preview}
            alt={image?.name}
            style={{ widht: 100, height: 100 }}
          />
        </div>
      </div>
      <input
        type={"file"}
        onChange={(e) => {
          setImage(e.target.files[0]);
          try {
            Storage.put(Auth.user.username, e.target.files[0], {
              contentType: e.target.files[0].type,
            });
          } catch (error) {
            console.log("error is", error);
          }
          setPreview(URL.createObjectURL(e.target.files[0]));
        }}
      />
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          height: 48,
          alignItems: "center",
        }}
      >
        <h4>Enter Name</h4>
        <input
          value={name}
          style={{
            display: "flex",
            height: 20,
            marginLeft: 20,
          }}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          height: 48,
          alignItems: "center",
        }}
      >
        <h4>Enter Task</h4>
        <input
          value={task}
          style={{
            display: "flex",
            height: 20,
            marginLeft: 20,
          }}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          addTask();
        }}
        style={{
          width: 100,
          height: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 40,
          marginTop: 20,
          backgroundColor: "skyblue",
          marginBottom: 2,
        }}
      >
        <h4>Add</h4>
      </button>
      {list.map((item, index) => (
        <div
          key={index}
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            marginBottom: 1,
            backgroundColor: "lightgrey",
            height: 40,
          }}
        >
          <h5>{item.name}</h5>
          <h5 style={{ marginRight: 20, marginLeft: 20 }}>{item.task}</h5>
          <div>
            <button
              onClick={() => {
                deleteTask(item.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <div style={{ display: "flex", height: 20, width: "100%" }} />
    </div>
  );
};

export default withAuthenticator(App);
