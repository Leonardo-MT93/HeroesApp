import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn" style={{ maxWidth: "250px" }}>
      <div className="card ">
        <img src={heroUrl} className="card-img-top " alt={superhero} />
        <div className="card-body">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">{alter_ego}</p>
          <p className="card-text">{publisher}</p>
          {alter_ego !== characters && <p>{characters}</p>}
          <p className="card-text">
            <small className="text-muted">{first_appearance}</small>
          </p>
          <Link to={`/hero/${id}`} className="btn btn-outline-info">Mas info</Link>
        </div>
      </div>
    </div>
  );
};
