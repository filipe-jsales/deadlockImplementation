import React from "react";
import Slider from "react-slick";

const clientsData = [
  {
    id: 1,
    image: "images/clients/as.svg",
  },
  {
    id: 2,
    image: "images/clients/as1.svg",
  },
  {
    id: 3,
    image: "images/clients/as2.svg",
  },
  {
    id: 4,
    image: "images/clients/as4.svg",
  },
  {
    id: 5,
    image: "images/clients/as5.svg",
  },
  {
    id: 6,
    image: "images/clients/as6.svg",
  },
  {
    id: 7,
    image: "images/clients/as7.svg",
  },
  {
    id: 8,
    image: "images/clients/as8.svg",
  },
  {
    id: 9,
    image: "images/clients/as9.svg",
  },
  {
    id: 10,
    image: "images/clients/as10.svg",
  },
  {
    id: 11,
    image: "images/clients/as11.svg",
  },
  {
    id: 12,
    image: "images/clients/as12.svg",
  },
  {
    id: 13,
    image: "images/clients/as13.svg",
  },
  {
    id: 14,
    image: "images/clients/as14.svg",
  },
  {
    id: 15,
    image: "images/clients/as15.svg",
  },
  {
    id: 16,
    image: "images/clients/as16.svg",
  },
  {
    id: 17,
    image: "images/clients/as17.svg",
  },
];

function Clients() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className="shadow-dark white-bg color-white padding-50">
      <h2 className="d-none">Clients</h2>

      <div className="clients-wrapper">
        <Slider {...settings} className="padding-slider">
          {clientsData.map((client) => (
            <div className="client-item" key={client.id}>
              <div className="inner">
                <img src={client.image} alt="client-name" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Clients;
