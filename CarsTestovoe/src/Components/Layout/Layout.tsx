import LeftSideBar from "@components/Layout/LeftSidebar/LeftSideBar.tsx";
import styles from "./Layout.module.css";
import type { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className={styles.wrapper_layout}>
      <div className={styles.leftbar}>
        <LeftSideBar />
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
}

export default Layout;
