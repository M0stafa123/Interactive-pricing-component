import { useState } from "react";

const PageViews = ({ plan, isMonth }) => {
  const [Range, setRange] = useState(2);
  const afterDiscount = plan[Range].price * 12 - plan[Range].price * 12 * 0.25;
  const handleChange = (e) => {
    setRange(e.target.value);
    e.target.style.background = `linear-gradient(to right,hsl(174, 77%, 80%) 0%,hsl(174, 77%, 80%) ${
      e.target.value * 25
    }%,hsl(224, 65%, 95%) ${e.target.value}%)`;
  };
  return (
    <section className="flex flex-col items-center justify-between md:flex-row md:flex-wrap">
      <span className="my-5 text-xs font-extrabold tracking-widest text-Text">
        {plan[Range].PageViews} PAGEVIEWS
      </span>
      <label
        htmlFor="plan"
        className="relative flex w-full my-10 md:order-1 md:basis-full"
      >
        <input
          id="plan"
          onChange={(e) => handleChange(e)}
          value={Range}
          type="range"
          min={0}
          max={4}
          step={1}
          className="w-full "
        />
      </label>
      <p className="flex items-center gap-1">
        <span className="text-4xl font-extrabold text-Text_CTA_Background">
          ${isMonth ? plan[Range].price : afterDiscount}.00
        </span>
        <span className="text-Text">/{isMonth ? "month" : "year"}</span>
      </p>
    </section>
  );
};

export default PageViews;
