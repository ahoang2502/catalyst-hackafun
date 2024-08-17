import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useMemo } from "react";

import { getMarkers } from "@/lib/actions/marker.actions";
import { LocationCard } from "./LocationCard";
import { ReviewCard } from "./ReviewCard";
import { ScrollArea } from "@/components/ui/scroll-area";

const FeaturesPage = async () => {
  const MyMap = useMemo(
    () =>
      dynamic(() => import("@/app/(platform)/features/Map"), {
        loading: () => (
          <div className="h-96 flex items-center justify-center">
            <Loader2 className="size-5 animate-spin mr-2" />
            <p>A map is loading...</p>
          </div>
        ),
        ssr: false,
      }),
    []
  );

  const data = await getMarkers();

  return (
    <div className="grid grid-cols-2 h-full ">
      <ScrollArea className="space-y-2 h-full">
        {data.map((location: any) => (
          <LocationCard location={location} key={location.name} />
        ))}
        <ReviewCard />
      </ScrollArea>

      <MyMap />
    </div>
  );
};

export default FeaturesPage;
