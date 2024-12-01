"use client";

import React, { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { db } from "../../firebase/firebase";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

const Navbar = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return; // Skip on server

    const incrementVisitorCount = async () => {
      try {
        const docRef = doc(db, "analytics", "visitorCount");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const currentCount = docSnap.data().count || 0;
          setVisitorCount(currentCount + 1);
          await updateDoc(docRef, { count: currentCount + 1 });
        } else {
          await setDoc(docRef, { count: 1 });
          setVisitorCount(1);
        }
      } catch (error) {
        console.error("Error updating visitor count:", error);
      }
    };

    incrementVisitorCount();
  }, []);

  return (
    <div className="flex justify-between items-center border p-4 mb-4">
      <div>Logo</div>
      <p>Visitors: {visitorCount}</p>
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
