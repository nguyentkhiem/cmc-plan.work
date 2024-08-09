import { Button } from "antd";
import { Inter } from "next/font/google";
import styles from "./index.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Ginou() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className={styles.title}> ginou</h1>
      <Button type="primary">Button</Button>
    </main>
  );
}
