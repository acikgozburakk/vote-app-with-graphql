// components/Container.tsx
import { ReactNode } from "react";

import styles from "./style.module.css";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Container;
