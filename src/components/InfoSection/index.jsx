import FAQ from "../FAQ/index";
import Request from "../Request";

const InfoSection = () => {
  return (
    <section>
      <div className="d-flex container">
        <FAQ />
        <Request />
      </div>
    </section>
  );
};

export default InfoSection;
