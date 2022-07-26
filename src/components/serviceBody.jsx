import renderCard from './common/renderCard';
import serviceOne from '../images/service-1.png';
import serviceTwo from '../images/service-2.png';
import serviceThree from '../images/service-3.png';
import serviceFour from '../images/service-4.png';
import serviceFive from '../images/service-5.png';
import serviceSix from '../images/service-6.png';

const ServiceBody = () => {
  return (
    <div className='services-body'>
      <h3>services</h3>
      <h4>We provide services to our clients</h4>
      <div className='cards'>
        {renderCard('Software Soluion', serviceOne)}
        {renderCard('E-Commerce Solution', serviceTwo)}
        {renderCard('ERP Solution', serviceThree)}
        {renderCard('Bulk SMS Service', serviceFour)}
        {renderCard('Graphic Design', serviceFive)}
        {renderCard('Digital Marketing', serviceSix)}
      </div>
    </div>
  );
};

export default ServiceBody;
