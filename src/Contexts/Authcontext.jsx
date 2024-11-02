import { createContext, useContext, useReducer } from "react";

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const AutenticaContext = createContext();
const initial = {
  user: null,
  isAuthenticated: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };

    case "logout":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };

    default:
      throw Error("unknow error ");
  }
};

const Authcontext = ({ children }) => {
  const [{ user, isAuthenticated }, dispatch] = useReducer(reducer, initial);
  // const [user, isAuthenticated] = state;
  const login = (email, password) => {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  };
  const logout = () => {
    dispatch({ type: "logout" });
  };
  return (
    <AutenticaContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AutenticaContext.Provider>
  );
};

const UseAuth = () => {
  const context = useContext(AutenticaContext);
  if (context === undefined)
    throw new Error("AutenticaContext is use out side Authcontext");
  return context;
};

export { Authcontext, UseAuth };
