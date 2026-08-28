import tenisCasual from "../../assets/images/products/casual.jpg";
import tenisEsporte from "../../assets/images/products/esporte.jpg";
import tenisFuturista from "../../assets/images/products/futurista.jpg";
import tenisModerno from "../../assets/images/products/moderno.jpg";
import { Button } from "../Button";

const categories = [
  { name: "Casual", image: tenisCasual },
  { name: "Esporte", image: tenisEsporte },
  { name: "Futurista", image: tenisFuturista },
  { name: "Moderno", image: tenisModerno },
];

export const Categories = () => {
  return <section className="container flex gap-2.5 lg:grid lg:grid-cols-4 lg:gap-4 mb-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
    {categories.map((category, index) => (
      <div
        key={index}
        style={{ backgroundImage: `url(${category.image})` }}
        className="h-125 bg-cover bg-center relative rounded-[20px] flex items-center justify-center text-white shrink-0 w-[95%] md:w-1/2 lg:w-full snap-center"
      >
        <div className="absolute inset-0 bg-black/30 rounded-[20px]"></div>

        <div className="relative">
            <Button variant="secondary">{category.name}</Button>
        </div>
      </div>
    ))}
    
  </section>;
  
}
