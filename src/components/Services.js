//IMAGES
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.jpg'
import img6 from '../assets/images/img6.jpg'
import img7 from '../assets/images/img7.jpg'
import img9 from '../assets/images/img9.jpg'



import Card from './ServiceCard';

const cards =[
    {
        title :'Kitchen Repair',
        image : img1
    },
    {
        title :'Counter Top repair',
        image : img2
    },
    {
        title :'Painting Repair',
        image : img3
    },
    {
        title :'Wall Repair',
        image : img4
    },
    {
        title :'Floor Repair',
        image : img5
    },
    {
        title :'Electrical Repair',
        image : img6
    },
    {
        title :'Plumbing Repair',
        image : img7
    },
    {
        title :'Cleaning',
        image : img9
    },
]

const Services = () => {
 
  return (
    <main id="services" className="bg-yellow-300  z-20">
      <section className="container  pt-2 pb-10   px-5 mx-auto">
        <div className="mt-1 flex justify-center">
          <h1 className="text-center text-3xl font-semibold">
            Home Repairing Services
          </h1>
        </div>
        <div className="mt-3 grid grid-cols-1  sm:grid-cols-2    md:grid-cols-4 gap-2">
           {
             cards.map((card,index)=>{
                 return <Card key={index} data={{card,index}}/>
             })
           }
        </div>
      </section>
    </main>
  );
};

export default Services;
