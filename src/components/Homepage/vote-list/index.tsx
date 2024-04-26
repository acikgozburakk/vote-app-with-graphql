import React from "react";
import { useSelector } from "react-redux";
import { Flipper, Flipped } from "react-flip-toolkit";

import Image from "next/image";

import { RootState } from "@/src/store/store";
import { User } from "@/types";

import styles from "./styles.module.css";

const VoteList = () => {
  const allUser = useSelector(
    (state: RootState) => state.users.users as User[]
  );

  const topUsers = allUser.slice().sort((a, b) => b.voteCount - a.voteCount);

  return (
    <Flipper flipKey={topUsers.map((user) => user.id).join("")}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Vote ranking</div>
        {topUsers.map((user) => (
          <Flipped key={user.id} flipId={user.id}>
            <div className={styles.userWrapper}>
              <Image
                className={styles.image}
                src={user.avatar}
                alt={user.name}
                width={50}
                height={50}
              />
              <div className={styles.infoWrapper}>
                <div className={styles.name}>{user.name}</div>
                <div className={styles.job}>{user.job}</div>
              </div>
              <div className={styles.voteCount}>{user.voteCount}</div>
            </div>
          </Flipped>
        ))}
      </div>
    </Flipper>
  );
};

export default VoteList;
