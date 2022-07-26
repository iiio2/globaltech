import UpperImg from './common/upperImg';
import HeroDesc from './heroContent';
import heroBtn from './common/heroBtn';

const HeroBody = () => {
  return (
    <div className='hero-content'>
      <UpperImg />
      <HeroDesc />
      <div className='hero-btn'>
        {heroBtn('btn-support', 'Support Us')}
        {heroBtn('btn-mission', 'Our Mission')}
      </div>
    </div>
  );
};

export default HeroBody;
