export const MovieCard = ({nombre, image, }) => {
  return (
    <div
      className="videogameDesign"
      onClick={() => console.log(nombre)}
    >
      <div>{nombre}</div>
      <div>
        <img className="avatarGame" src={image} alt={nombre} />
      </div>
      <div>{}</div>
    </div>
  );
};
