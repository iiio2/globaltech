import line from '../../images/line.png';
import plane from '../../images/plane.png';

const UpperImg = () => {
  return (
    <div className='upper-img'>
      <div className='lines'>
        <img src={line} alt='' />
        <img src={line} alt='' />
        <img src={line} alt='' />
      </div>
      <div className='plane'>
        <img src={plane} alt='' />
      </div>
    </div>
  );
};

export default UpperImg;
