import React from "react";

const Tours = ({ data }) => {
  console.log(data);
  return (
    <section class="section" id="tours">
      <div class="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div class="section-center featured-center">
        {data.map((tour) => {
          return (
            <article key={tour.id} class="tour-card">
              <div class="tour-img-container">
                <img src={tour.image} class="tour-img" alt={tour.title} />
                <p class="tour-date">{tour.date}</p>
              </div>
              <div class="tour-info">
                <div class="tour-title">
                  <h4>{tour.title}</h4>
                </div>
                <p>{tour.info}</p>
                <div class="tour-footer">
                  <p>
                    <span>
                      <i class="fas fa-map"></i>
                    </span>
                    {tour.location}
                  </p>
                  <p>{tour.duration}</p>
                  <p>from ${tour.cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
