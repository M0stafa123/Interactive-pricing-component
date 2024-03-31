const TogglePlan = ({ isMonth, setIsmonth }) => {
  return (
    <div className="flex items-center justify-center gap-2 py-5 min-w-[275px]">
      <span className="text-xs text-Text">Monthly Billing</span>
      <label htmlFor="switch" className="toggle">
        <input
          className="absolute top-0 left-0 hidden w-0 h-0 "
          id="switch"
          type="checkbox"
          checked={!isMonth}
          onChange={() => setIsmonth(!isMonth)}
        />
        <span></span>
      </label>
      <p className="text-xs text-Text">
        Yearly Billing{" "}
        <span className="px-2 py-1 ml-1 rounded-full bg-Discount_Background text-Discount_Text">
          <span className="inline md:hidden"> -</span>25%{" "}
          <span className="hidden md:inline">discount</span>
        </span>
      </p>
    </div>
  );
};

export default TogglePlan;
