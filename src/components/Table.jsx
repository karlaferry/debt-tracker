import React, { useState, useEffect } from "react";
import { database } from "../firebase/config";
import "firebase/database";

export default function Table() {
  const [debts, setDebts] = useState([]);

  useEffect(() => {
    // Fetch debt data from Firebase when component mounts
    const debtsRef = database().ref("debts");
    debtsRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const debtList = Object.values(data || {});
      setDebts(debtList);
    });

    // Cleanup the Firebase listener when component unmounts
    return () => debtsRef.off("value");
  }, []);

  return (
    <ul>
      {debts.map((debt) => (
        <li key={debt.id}>
          {debt.lender} - {debt.amount}
        </li>
      ))}
    </ul>
  );
}
