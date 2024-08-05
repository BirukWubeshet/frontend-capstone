import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Maria Sanchez',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `This place is an absolute gem! The atmosphere is warm and inviting. We'll definitely be back!`,
  },
  {
    fullName: 'Antony Clifton',
    image: customer2Image,
    rating: [1, 1, 1, 1, 0],
    says: `We had a great time with the whole crew. The portions were huge, so we even got to take some home. The staff was super nice and made us feel welcome. Definitely recommend checking it out!`,
  },
  {
    fullName: 'Tamika Jackson',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `This restaurant is a total win for families! The kids menu was a lifesaver and the adult food was equally delicious. We loved the cozy atmosphere and our server was incredibly friendly and patient.`,
  },
  {
    fullName: 'Brandon Ming',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `This restaurant made my child's birthday extra special! The staff was incredibly accommodating, and they went above and beyond to make sure everyone had a great time.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
