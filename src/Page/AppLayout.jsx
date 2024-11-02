import Map from "../Component/Map";
import Sidebar from "../Component/Sidebar";
import User from "../Component/User";
import styles from "./AppLayout.module.css";
const AppLayout = () => {
  return (
    <div className={styles.app}>
      <p>App</p>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
};

export default AppLayout;
