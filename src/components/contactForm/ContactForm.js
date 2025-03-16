import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} pattern="^\+43\s\d{1,4}\s\d{3,10}$" placeholder="+43 677 12345678" required />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-Mail" required />
        <button type="submit" >Submit</button>
      </form>
    </>
  );
};

