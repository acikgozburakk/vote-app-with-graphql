import HomepageScreen from "@/src/screens/HomepageScreens";
import { GetServerSideProps } from "next";
import { User } from "../types";

interface HomeProps {
  users: User[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers.host;

  const query = `
    query GetUsers($count: Int!) {
      users(count: $count) {
        id
        name
        email
        avatar
        job
        country
        voteCount
        adress
        phone
        bio
      }
    }
  `;

  const variables = { count: 8 };

  const res = await fetch(`${protocol}://${host}/api/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const { data } = await res.json();

  return {
    props: { users: data.users },
  };
};

const Home = ({ users }: HomeProps) => {
  return <HomepageScreen users={users} />;
};

export default Home;
