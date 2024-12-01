import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { getViewCount } from "@/lib/viewCounter";

const ViewCounter = () => {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    const fetchViews = async () => {
      const count = await getViewCount();
      setViews(count);
    };

    fetchViews();

    // Update views every minute
    const interval = setInterval(fetchViews, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Eye className="h-4 w-4" />
      <span>{views.toLocaleString()} views</span>
    </div>
  );
};

export default ViewCounter;
