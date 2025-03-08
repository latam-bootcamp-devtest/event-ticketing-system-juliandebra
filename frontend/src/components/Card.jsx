import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ id, name, price, date, availableSeats }) => {
  const buyTicket = () => {
    axios.post();
  };
  const navigate = useNavigate();
  return (
    <div>
      <h2>{name}</h2>
      <h3>Date: {date}</h3>
      <h4>Price: ${price}</h4>
      <h4>
        Available Seats: {availableSeats == 0 ? "Sold out" : availableSeats}
      </h4>
      <button onClick={buyTicket} title="Buy ticket for this event">
        🛒
      </button>
      <button
        title="View Detail of event"
        onClick={() => navigate("/event/" + id)}
      >
        📄
      </button>
    </div>
  );
};

export default Card;
