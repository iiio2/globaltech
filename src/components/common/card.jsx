const Card = ({ title, src }) => {
  return (
    <div className='card'>
      <img className='card-img' src={src} alt='' />

      <div className='card-info'>
        <h5>{title}</h5>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here'.
        </p>
        <div className='service-btn-parent'>
          <button className='btn service-btn'>more</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
