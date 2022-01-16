import React from "react";
import ContactList from "./components/ContactList/ContactList";
import Container from "./components/Container/Container";
import ContactForm from "./components/ContactForm/ContactForm";
import Section from "./components/Section/Section";
import Filter from "./components/Filter/Filter";

const App = () => {
  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
};

export default App;
