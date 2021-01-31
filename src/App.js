import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import {
  // getVisibleContacts,
  getLoader,
} from 'redux/phonebook/phonebook-selectors';
import * as phonebookOperations from 'redux/phonebook/phonebook-operations';
import Container from 'components/Container';
import AppBar from 'components/AppBar';
import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import ContactsView from 'views/ContactsView';
// import Section from 'components/Section';
// import MyForm from 'components/Form';
// import Filter from 'components/Filter';
// import ContactList from 'components/ContactList';

export default function App() {
  // const contacts = useSelector(getVisibleContacts);
  // const dispatch = useDispatch();

  // const isFirstRender = useRef(true);
  // const onFirstLoad = () => dispatch(phonebookOperations.fetchContacts());
  // const loader = useSelector(getLoader);

  // useEffect(
  //   () => {
  //     if (isFirstRender.current) {
  //       onFirstLoad();

  //       isFirstRender.current = false;
  //       return;
  //     }
  //   },
  //   // eslint-disable-next-line
  //   [],
  // );

  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />

        <Route path="/register" component={RegisterView} />

        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
      {/* <Section title="Phonebook">
        <MyForm />
        {loader && <p>Loading...</p>}
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section> */}
    </Container>
  );
}
