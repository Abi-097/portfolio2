"use client";

import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc, increment } from "firebase/firestore";

const ViewCounter = () => {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    const incrementAndFetchViews = async () => {
      const docRef = doc(db, "analytics", "pageViews");

      try {
        // First, increment the counter
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          await setDoc(docRef, { count: increment(1) }, { merge: true });
        } else {
          await setDoc(docRef, { count: 1 });
        }

        // Then fetch the updated count
        const updatedDoc = await getDoc(docRef);
        if (updatedDoc.exists()) {
          setViews(updatedDoc.data().count);
        }
      } catch (error) {
        console.error("Error with view counter:", error);
      }
    };

    // Initial increment and fetch
    incrementAndFetchViews();

    // Set up periodic refresh
    const interval = setInterval(async () => {
      const docRef = doc(db, "analytics", "pageViews");
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setViews(docSnap.data().count);
        }
      } catch (error) {
        console.error("Error fetching views:", error);
      }
    }, 60000);

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
