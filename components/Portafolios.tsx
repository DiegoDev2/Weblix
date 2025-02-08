import { portafolios } from "@/const/portafolios";
import { Portafolio } from "./Card";

export function Portafolios() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-11">
      {portafolios.map((portfolio) => (
        <Portafolio key={portfolio.id} portfolio={{
              id: 0,
              name: "",
              image: "",
              github: undefined,
              website: undefined
          }} />
      ))}
    </div>
  );
}
