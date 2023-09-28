//ICONS
import icon1 from "../assets/icons/Hammer.png";
import icon2 from "../assets/icons/Floor.png";
import icon3 from "../assets/icons/Painting.png";
import icon4 from "../assets/icons/Drill.png";
import Card from "./HeroineCard";


const cards = [
  {
    id:1,
    title: "Carpentry",
    image: icon1,
    tag: "Quality",
  },
  {
    id:2,
    title: "Flooring",
    image: icon2,
    tag: "Trust",
  },
  {
    id:3,
    title: "Painting",
    image: icon3,
    tag: "Affordable",
  },
  {
    id:4,
    title: "Electrical Work",
    image: icon4,
    tag: "Staisfaction",
  },
];

const Heroine = () => {
  
  return (
    <main className="bg-yellow-400  z-20">
      <section className="container  pt-5 pb-10   px-5 mx-auto">
        <div className="my-5  flex justify-center">
          <h1 className="text-center text-3xl font-semibold">Services</h1>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2    md:grid-cols-4 gap-4">
          <Card data={cards[0]}  />
          <Card data={cards[1]}  />
          <Card data={cards[2]}  />
          <Card data={cards[3]}  />
        </div>
      </section>
    </main>
  );
};

export default Heroine;
