import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailEvent = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
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
          <button onClick={() => navigate(-1)}>Go back</button>
        </>
      )}
    </div>
  );
};

export default DetailEvent;
