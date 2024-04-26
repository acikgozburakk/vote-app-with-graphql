import React from "react";
import Image from "next/image";

import { User } from "@/types";

import EmailSvg from "@/src/assets/svg/email.svg";
import AddressSvg from "@/src/assets/svg/address.svg";
import PhoneSvg from "@/src/assets/svg/phone.svg";
import BioSvg from "@/src/assets/svg/bio.svg";

import styles from "./styles.module.css";
interface DetailCardProps {
  user: User;
}

const DetailCard = ({ user }: DetailCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContent}>
        <Image
          className={styles.image}
          src={user.avatar}
          alt={user.name}
          width={220}
          height={220}
        />
        <div className={styles.name}>{user.name}</div>
        <div className={styles.job}>{user.job}</div>
      </div>
      <div className={styles.infoContent}>
        <div className={styles.infoWrapper}>
          <EmailSvg /> <span className={styles.infoText}>{user.email}</span>
        </div>
        <div className={styles.infoWrapper}>
          <AddressSvg /> <span className={styles.infoText}>{user.adress}</span>
        </div>
        <div className={styles.infoWrapper}>
          <PhoneSvg /> <span className={styles.infoText}>{user.phone}</span>
        </div>
        <div className={styles.infoWrapper}>
          <BioSvg /> <span className={styles.infoText}>{user.bio}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
