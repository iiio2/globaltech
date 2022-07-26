import heroImg from '../images/hero-img.png';

const HeroImg = () => {
  return (
    <div className='hero-img'>
      <img src={heroImg} className='ellipse' alt='' />
    </div>
  );
};

export default HeroImg;
