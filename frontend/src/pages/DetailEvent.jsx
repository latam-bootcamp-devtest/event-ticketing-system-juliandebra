import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
const DetailEvent = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const [buyForm, setBuyForm] = useState({
    name: "",
    ticketQuantity: 1,
  });
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios("http://localhost:3000/event/" + id)
      .then((res) => {
        setDetail(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const buyTicket = (e) => {
    e.preventDefault();
    if (!buyForm.name) {
      setError("Name is required");
      return;
    }

    Swal.fire({
      title: "Do you want to buy ticket for this event?",
      showCancelButton: true,
      confirmButtonText: "Yes, buy",
      cancelButtonText: `No, I regret`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("http://localhost:3000/ticket", {
            userId: Math.floor(Math.random() * 10) + 1,
            eventId: Number(id),
          })
          .then(() => {
            Swal.fire("Ticket bought!", "", "success");
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Error buying ticket",
              text: "Please, Try again later.",
              footer: err,
            });
          });
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyForm({
      ...buyForm,
      [name]: value,
    });
  };
  return (
    <div>
      {loading ? (
        "Cargando evento..."
      ) : (
        <>
          <img
            src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg"
            alt=""
            width={200}
          />
          <h2>{detail.name}</h2>
          <h3>Date of the event: {detail.date}</h3>
          <h3>Price: ${detail.price}</h3>
          <h4>Seats Available: {detail.availableSeats}</h4>

          {showForm ? (
            <form onSubmit={buyTicket}>
              <label htmlFor="">Name:</label>
              <input
                name="name"
                value={buyForm.name}
                type="text"
                onChange={handleChange}
              />
              <label htmlFor="">Tickets:</label>
              <input
                name="ticketQuantity"
                value={buyForm.ticketQuantity}
                type="number"
                onChange={handleChange}
              />
              <h3>Total: ${detail.price * buyForm.ticketQuantity}</h3>
              <button disabled={buyForm.ticketQuantity > detail.availableSeats}>
                Buy ticket
              </button>
              <button type="button" onClick={() => setShowForm(false)}>
                Cancel
              </button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
          ) : (
            <button
              onClick={() => setShowForm(true)}
              title="Buy ticket for this event"
            >
              🛒
            </button>
          )}
          <button onClick={() => navigate(-1)}>Go back</button>
        </>
      )}
    </div>
  );
};

export default DetailEvent;
