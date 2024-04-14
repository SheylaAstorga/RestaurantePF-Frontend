import bannerImg from "/bannerfondo.png";

const BannerPrincial = () => {
  return (
    <article>
      <div className="shadow  mb-3 bg-body-tertiary rounded">
        <img
          src={bannerImg}
          alt="banner principal sazon"
          className="imgbanner"
        />
      </div>
    </article>
  );
};

export default BannerPrincial;
