import { Button } from "antd";
import { FC } from "react";

import NextImage from "next/image";

import styles from "./styles.module.css";

export const PipedriveButton: FC = () => {
  return (
    <Button
      className={styles.button}
      type="primary"
      size="large"
      block
      href="#"
      icon={
        <NextImage
          src="/assets/pipedrive-icon.svg"
          alt="Pipedrive logo"
          width={32}
          height={32}
          priority
        />
      }
    >
      Entrar com Pipedrive
    </Button>
  );
};
