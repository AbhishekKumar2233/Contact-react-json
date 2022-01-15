import "./styles.css";
import Card from "./Components/Card";
import contacts from "./contacts";

export default function App() {
  return (
    <div className="App">
      <h1>Contact Info</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].img}
        contact={contacts[0].contact}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].img}
        contact={contacts[1].contact}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].img}
        contact={contacts[2].contact}
        email={contacts[2].email}
      />
      <Card
        name={contacts[3].name}
        img={contacts[3].img}
        contact={contacts[3].contact}
        email={contacts[3].email}
      />
      <Card
        name={contacts[4].name}
        img={contacts[4].img}
        contact={contacts[4].contact}
        email={contacts[4].email}
      />
      <Card
        name={contacts[5].name}
        img={contacts[5].img}
        contact={contacts[5].contact}
        email={contacts[5].email}
      />
    </div>
  );
}
