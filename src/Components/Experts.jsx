import laptop from "../assets/images/laptop.jpg";
export const Experts = () => {
  return (
    <>
      <div
        className="expertsContainer grid grid-cols-2 border border-black p-2 m-auto mt-3 w-full xl:w-2/3  xl:grid-cols-3"
      >
        <div className="imageContainer  xl:col-span-1">
          <img src={laptop} alt="laptop" />
        </div>
        <div className="textConatiner xl:col-span-2">
          <h1 className="m-1 font-bold text-lg md:text-xl md:m-3">Learn From Experts</h1>
          <p className="m-1 font-semibold text-sm md:text-lg md:m-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi hic
            laudantium cupiditate consequatur ipsum maxime veniam voluptas,
            facere omnis, assumenda fugit optio harum voluptates maiores
            asperiores alias, quam dolorum porro!
          </p>
        </div>
      </div>
    </>
  );
};
