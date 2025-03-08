import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const CreateEvent = () => {
  const [newEvent, setNewEvent] = useState({
    name: "",
    price: 0,
    availableSeats: 0,
    date: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({
      ...newEvent,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !newEvent.name ||
      !newEvent.date ||
      newEvent.availableSeats <= 0 ||
      newEvent.price <= 0
    ) {
      setError("All fields are required");
      return;
    }
    axios
      .post("http://localhost:3000/event", newEvent)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Event created!",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name of the event</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={newEvent.name}
        />
        <label htmlFor="">Price</label>
        <input
          type="number"
          name="price"
          onChange={handleChange}
          value={newEvent.price}
        />
        <label htmlFor="">Availabel Seats</label>
        <input
          type="number"
          name="availableSeats"
          onChange={handleChange}
          value={newEvent.availableSeats}
        />
        <label htmlFor="">Date of the event</label>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={newEvent.date}
        />
        {error && <p>{error}</p>}
        <button>Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
