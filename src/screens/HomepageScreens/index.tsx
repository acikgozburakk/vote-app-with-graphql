import { User } from "@/types";

import Container from "@/src/components/common/container";
import UserList from "@/src/components/Homepage/user-list";
import VoteList from "@/src/components/Homepage/vote-list";

import styles from "./styles.module.css";

interface HomePageProps {
  users: User[];
}

const HomepageScreen = ({ users = [] }: HomePageProps) => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.voteList}>
          <VoteList />
        </div>
        <div className={styles.userList}>
          <UserList users={users} />
        </div>
      </div>
    </Container>
  );
};

export default HomepageScreen;
