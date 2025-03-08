import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/event")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Buy tickets for the available events</h1>
      {events.length > 0 &&
        events.map((event) => <Card key={event.id} {...event} />)}
    </div>
  );
};

export default Home;
