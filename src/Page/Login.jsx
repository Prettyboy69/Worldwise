import styles from "./Login.module.css";
import { useState, useEffect } from "react";
import Button from "../Component/Button";
import { UseAuth } from "../Contexts/Authcontext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, isAuthenticated } = UseAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) login(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/app", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <main className={styles.login}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
};

export default Login;

// import styles from "./Login.module.css";
// import { useState, useEffect } from "react";
// import Button from "../Component/Button";
// import { UseAuth } from "../Contexts/Authcontext";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const { login, isAuthenticated } = UseAuth();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("jack@example.com");
//   const [password, setPassword] = useState("qwerty");
//   const handleSubmite = (e) => {
//     e.PreventDault();
//     if (email && password) login(email, password);
//   };
//   useEffect(() => {
//     if (isAuthenticated) navigate("/app");
//   }, [isAuthenticated, navigate]);

//   return (
//     <main className={styles.login}>
//       <form className={styles.form} onSubmit={handleSubmite}>
//         <div className={styles.row}>
//           <label htmlFor="email">Email address</label>
//           <input
//             type="email"
//             id="email"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//           />
//         </div>

//         <div className={styles.row}>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//           />
//         </div>

//         <div>
//           <Button type="primary">Login</Button>
//         </div>
//       </form>
//     </main>
//   );
// };

// export default Login;
