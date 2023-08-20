import React from "react";

export default function Input() {
  return (
    <form id="debtForm">
      <label for="lender">Lender:</label>
      <input type="text" id="lender" name="lender" required />
      <br />

      <label for="amount">Amount:</label>
      <input type="number" id="amount" name="amount" required />
      <br />

      <label for="apr">APR:</label>
      <input type="number" id="apr" name="apr" required />
      <br />

      <label for="minimum">Minimum Payment:</label>
      <input type="number" id="minimum" name="minimum" required />
      <br />

      <button type="submit">+</button>
    </form>
  );
}
