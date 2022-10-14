import React, { useState, useEffect } from "react";
import { Amplify, Auth } from "aws-amplify";
import awsmobile from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import {
  createAsadTaskManager,
  deleteAsadTaskManager,
} from "./graphql/mutations";

import { listAsadTaskManagers } from "./graphql/queries";
import { onUpdateAsadTaskCount } from "./graphql/subscriptions";

Amplify.configure(awsmobile);
const App = () => {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [userDetails, setUserDetails] = useState({ name: "", count: 0 });

  useEffect(() => {
    console.log("user ID is", Auth.user.username);
    (async () => {
      const list = await API.graphql(
        graphqlOperation(listAsadTaskManagers, {
          filter: {
            user: {
              eq: Auth.user.username,
            },
          },
        })
      );
      console.log(list);
      setList(list.data.listAsadTaskManagers.items);
    })();

    (async () => {
      const subscription = API.graphql(
        graphqlOperation(onUpdateAsadTaskCount, {
          user: Auth.user.username,
        })
      ).subscribe({
        next: (data) => {
          console.log("data is", data);
          setUserDetails({
            name: data.value.data.onUpdateAsadTaskCount.user,
            count: data.value.data.onUpdateAsadTaskCount.count,
          });
        },
      });
      return () => subscription.unsubscribe();
    })();
  }, []);

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
        graphqlOperation(createAsadTaskManager, { input: taskObj })
      );
      console.log(result);
      setList([...list, result.data.createAsadTaskManager]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const result = await API.graphql(
        graphqlOperation(deleteAsadTaskManager, { input: { id } })
      );
      console.log(result);
      setList(list.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <h3>{"User Name :\t" + userDetails.name + "\t"}</h3>
        <h4>{"Count is :\t" + userDetails.count}</h4>
      </div>
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
