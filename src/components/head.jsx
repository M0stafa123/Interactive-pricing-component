const Head = () => {
  return (
    <header className="relative text-center py-[100px] px-3  md:px-10 w-11/12 mx-auto">
      <h1 className="relative z-10 text-[21px] font-extrabold text-Text_CTA_Background md:text-4xl font-Manrope">
        Simple, traffic-based pricing
      </h1>
      <p className="relative z-10 my-5 w-[200px] md:w-auto mx-auto md:text-xl text-Text">
        Sign-up for our 30-day trial. No credit card required.
      </p>
      <img
        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        src="./images/pattern-circles.svg"
        alt="pattern-circles"
      />
    </header>
  );
};

export default Head;
