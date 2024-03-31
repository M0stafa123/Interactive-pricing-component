const Starttrial = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-8 p-5 md:flex-row">
      <div>
        <p className="flex items-center justify-center gap-5 text-Text md:justify-start">
          <img src="./images/icon-check.svg" alt="icon-check" />
          Unlimited websites
        </p>
        <p className="flex items-center justify-center gap-5 text-Text md:justify-start">
          <img src="./images/icon-check.svg" alt="icon-check" />
          100% data ownership
        </p>
        <p className="flex items-center justify-center gap-5 text-Text md:justify-start">
          <img src="./images/icon-check.svg" alt="icon-check" />
          Email reports
        </p>
      </div>
      <div>
        <button className="px-10 py-3 rounded-full bg-Text_CTA_Background hover:text-white text-CTA_Text">
          Start my trial
        </button>
      </div>
    </section>
  );
};

export default Starttrial;
