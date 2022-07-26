import HeroBody from './heroBody';
import HeroImg from './heroImg';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='section-center'>
        <HeroBody />
        <HeroImg />
      </div>
    </div>
  );
};

export default Hero;
