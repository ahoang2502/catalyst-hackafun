import { useMemo } from "react";
import { FeaturesNavbar } from "./FeaturesNavbar";
import dynamic from "next/dynamic";

const FeaturesPage = () => {
  const MyMap = useMemo(
    () =>
      dynamic(() => import("@/app/(platform)/features/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div className="">
      <MyMap />
    </div>
  );
};

export default FeaturesPage;
