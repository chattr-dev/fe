import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/user/120`).then((res) => {
      setUser(res.data);
      setLoading(false);
    });
  }, [loading]);

  if (loading) return <h4>Loading...</h4>;

  if (user)
    return (
      <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
    );
};
