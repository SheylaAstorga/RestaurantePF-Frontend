import ListGroup from 'react-bootstrap/ListGroup';


const Direccion = () => {
  return (
    <article className="glass-efect ">
      <section className="">
      <h2 className='text-center my-3'>nuestra dirección</h2>

      <section className=" d-flex flex-column flex-lg-row flex-md-row ">
        <div className="w-100 d-flex  align-content-center flex-wrap justify-content-center">
<div className="">
      <ListGroup className="list-group list-group-flush text-center m-2 my-lg-2">
  <ListGroup.Item variant="dark">direccion</ListGroup.Item>
  <ListGroup.Item >Gral. Paz 576</ListGroup.Item>
  <ListGroup.Item >S.M. de Tucumán- Argentina</ListGroup.Item>
</ListGroup>

</div>
<div className="bg-none">
      <ListGroup className="list-group  text-center m-2 my-lg-2">
  <ListGroup.Item variant="dark" ><>Horarios</></ListGroup.Item>
  <ListGroup.Item >lunes a sabados: 08:00 a 00:00</ListGroup.Item>
  <ListGroup.Item >domingos: 08:00 a 13:00</ListGroup.Item>
</ListGroup>

</div>
        </div>
        <div className="w-100">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.106067949493!2d-65.20974192528023!3d-26.836578490025683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1712195141689!5m2!1ses-419!2sar"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="maps-style"
        ></iframe>
        </div>
      </section>
      
      </section>
    </article>
  );
};

export default Direccion;
