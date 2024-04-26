import React from "react";
import { useSelector } from "react-redux";

import Container from "@/src/components/common/container";

import DetailCard from "@/src/components/Detailpage/detail-card";

const DetailpageScreen = ({ userId }) => {
  const allUser = useSelector((state) => state.users.users);
  const userDetailData = allUser.find((user) => user?.id === userId) || {};

  console.log(userDetailData);
  if (!userDetailData) {
    return <div>User not found</div>;
  }

  return (
    <Container>
      <DetailCard user={userDetailData} />
    </Container>
  );
};

export default DetailpageScreen;
