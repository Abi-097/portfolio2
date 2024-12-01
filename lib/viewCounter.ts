import { doc, getDoc, setDoc, increment } from "firebase/firestore";
import { db } from "./firebase";

export async function incrementViewCount() {
  const docRef = doc(db, "analytics", "pageViews");

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await setDoc(docRef, { count: increment(1) }, { merge: true });
    } else {
      await setDoc(docRef, { count: 1 });
    }
  } catch (error) {
    console.error("Error updating view count:", error);
  }
}

export async function getViewCount() {
  const docRef = doc(db, "analytics", "pageViews");

  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().count;
    }
    return 0;
  } catch (error) {
    console.error("Error getting view count:", error);
    return 0;
  }
}
