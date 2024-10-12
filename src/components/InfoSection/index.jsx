import FAQ from "../FAQ/index";
import Request from "../Request/Request";

const InfoSection = () => {
  return (
    <section>
      <div className="container d-flex">
        <FAQ />
        <Request />
      </div>
    </section>
  );
};

export default InfoSection;
