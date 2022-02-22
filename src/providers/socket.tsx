import React, { createContext, useContext, useEffect, useState } from "react";
import { Socket } from "phoenix";
import { UserContext } from "./user";

export const SocketContext = createContext(null);

export const SocketProvider = (props) => {
  const user = useContext(UserContext);
  const socket = new Socket("ws://localhost:4000/socket", {
    logger: (action, msg, data) => {
      console.log(`${action}: ${msg}`, data);
    },
  });

  socket.connect();

  let channel = socket.channel("user:120", user);
  channel
    .join()
    .receive("ok", (resp) => {
      console.log("Connected:", resp);
    })
    .receive("error", (resp) => {
      console.log("Error connecting", resp);
    });

  return (
    <SocketContext.Provider value={channel}>
      {props.children}
    </SocketContext.Provider>
  );
};
