"use client";
import React, { useEffect } from "react";
import { User } from "@/types";
import { useDispatch } from "react-redux";

import { setInitialUser } from "@/src/store/features/users/usersSlice";

import UserCard from "@/src/components/Homepage/user-card";

import styles from "./styles.module.css";

interface UserListProps {
  users: User[];
}

const UserList = ({ users = [] }: UserListProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitialUser(users));
  }, []);

  return (
    <div className={styles.wrapper}>
      {users.map((user) => (
        <div key={user.id} className={styles.cardWrapper}>
          <UserCard user={user} />
        </div>
      ))}
    </div>
  );
};

export default UserList;
