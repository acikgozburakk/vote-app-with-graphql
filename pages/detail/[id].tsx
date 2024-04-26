import React from "react";
import { useRouter } from "next/router";

import DetailpageScreen from "@/src/screens/DetailpageScreen";

const Detail = () => {
  const router = useRouter();
  const userId = router.query.id;
  return <DetailpageScreen userId={userId} />;
};

export default Detail;
