import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  useEffect(() => {
    console.log(contacts);
    const nameExists = contacts.some(contact => contact.name === name);
    setIsDuplicate(nameExists);
  }, [name, contacts]);
    

  const handleSubmit = (e) => {
    e.preventDefault();
   if(isDuplicate === false) {
    addContact(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
   }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList items={contacts} />
      </section>
    </div>
  );
};
