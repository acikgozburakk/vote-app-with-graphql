// useClient etiketi yalnızca client-side üzerinde çalışacak component ve hooklar için kullanılır
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { User } from "@/types";

import { useDispatch } from "react-redux";

import { sendLog } from "@/src/helper/Log";

import { addVoteForUser } from "@/src/store/features/users/usersSlice";

import styles from "./styles.module.css";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const dispatch = useDispatch();

  const handleClickVoteButton = (event: any) => {
    event.preventDefault();
    sendLog({ event: "button_click", description: "clicked button" });
    dispatch(addVoteForUser(user.id));
  };
  return (
    <Link href={`/detail/${user.id}`} passHref>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src={user.avatar}
            className={styles.image}
            alt={user.name}
            width={130}
            height={130}
            layout="fixed"
          />
        </div>
        <div className={styles.contentWrapper}>
          <span className={styles.name}>{user.name}</span>
          <span className={styles.job}>{user.job}</span>
          <span className={styles.email}>{user.email}</span>
        </div>

        <div className={styles.buttonWrapper}>
          <button onClick={handleClickVoteButton} className={styles.voteButton}>
            VOTE
          </button>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
