import PageViews from "./PageViews";
import Starttrial from "./StartmyTrial";
import TogglePlan from "./Toggleplan";
import { useState } from "react";

const Card = () => {
  const [isMonth, setIsmonth] = useState(true);
  const plan = [
    { PageViews: "10K", price: "8" },
    { PageViews: "50K", price: "12" },
    { PageViews: "100K", price: "16" },
    { PageViews: "500K", price: "24" },
    { PageViews: "1M", price: "36" },
  ];
  return (
    <main className="relative z-10 w-11/12 mx-auto bg-white rounded-md shadow-lg font-Manrope">
      <article className="px-3 py-10 md:p-10">
        <PageViews plan={plan} isMonth={isMonth} />
        <TogglePlan isMonth={isMonth} setIsmonth={setIsmonth} />
      </article>
      <hr className="border-Empty_Slider_Bar" />
      <Starttrial />
    </main>
  );
};

export default Card;
