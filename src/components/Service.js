import img1 from "../assets/images/img5.jpg";
import img2 from "../assets/images/img6.jpg";
import img3 from "../assets/images/img8.jpg";
import img4 from "../assets/images/img8.jpg";



import { useParams } from "react-router-dom";

const Service = () => {
  const data = [
    {
      id: 1,
      title: "Carpentry",
      image: img1,
      tag: "Quality",
    },
    {
      id: 2,
      title: "Flooring",
      image: img4,
      tag: "Trust",
    },
    {
      id: 3,
      title: "Painting",
      image: img3,
      tag: "Affordable",
    },
    {
      id: 4,
      title: "Electrical Work",
      image: img2,
      tag: "Staisfaction",
    },
  ];

  const { id } = useParams();
  const serviceData = data[id - 1];
  return (
    <main className="bg-yellow-300  z-20">
      <section className="container  pt-2 pb-10   px-5 mx-auto">
        <div className="mt-1 flex-col flex justify-center">
          <h1 className="text-center text-3xl font-semibold">
            {serviceData.title}
          </h1>
          <div className=" mt-5">
            <img
              className="float-right m-1 w-72 rounded-xl"
              src={serviceData.image}
              alt=""
            />
            <p className="m-1 capitalize sm:mt-1 mt-0 text-center sm:text-left font-bold text-gray-800 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              consectetur dolore aut? Facere nam nesciunt quibusdam, nobis
              laboriosam minima, distinctio veritatis deserunt quis iusto nisi
              ducimus accusantium eos sint voluptas. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quaerat beatae, consectetur
              assumenda cum quos aliquam harum voluptate aut. Ratione, possimus.
              Deleniti quos dicta voluptatibus! Fugit necessitatibus culpa
              quibusdam voluptatem accusantium, possimus voluptas et similique,
              at accusamus alias harum laboriosam quas saepe temporibus nulla,
              vitae beatae? Commodi atque aspernatur odio consequatur voluptatem
              eum! Cum dignissimos nemo tenetur excepturi officia ex maiores
              quas vel debitis voluptatum minus ipsam odit accusamus consequatur
              nam ullam laudantium voluptas provident neque, amet nihil
              molestiae repudiandae sint sapiente. Iste impedit eveniet minus
              ipsam. Nulla minus similique mollitia adipisci at labore error
              veniam nobis ab. Beatae libero numquam reprehenderit illum
              suscipit deleniti facilis aspernatur explicabo dolore ex aut
              commodi molestiae exercitationem harum rerum, eaque quo vero
              aperiam excepturi. Iure fuga error perspiciatis nostrum maiores
              saepe, exercitationem aliquid delectus? Repellat officiis,
              deleniti assumenda dolorem vel harum laboriosam aperiam veniam
              magni expedita porro illo saepe qui cumque fugiat aliquam error
              autem. Accusantium sit maiores voluptatum eaque, molestias cum
              architecto ducimus soluta, dolore debitis, quas vel tempora
              officiis. Distinctio cum deleniti amet natus repellendus hic sit
              nesciunt iste, dolor voluptatibus mollitia quod necessitatibus
              illo aliquam sunt a provident odit molestias nostrum. Doloribus
              incidunt accusamus, aspernatur et, dolores laborum nisi unde
              quidem facere, eveniet minus ratione molestiae soluta odio dolore
              consequuntur consectetur voluptatem eum modi alias explicabo. Quos
              rerum enim id magnam repellendus, excepturi accusantium minus,
              aliquid fugit at sed eius est! Deleniti corrupti illo aliquid id
              provident, nulla similique fuga laborum vel, laboriosam fugit
              animi quidem dolores. Consectetur totam ipsa sed asperiores
              voluptates. Molestias ad illo ducimus quas corporis consequatur
              reprehenderit delectus praesentium. Facere dolor magnam illum
              placeat harum unde, officia sit eligendi sunt quia animi esse
              nostrum officiis tenetur molestias nobis ut dolorum totam.
              Aspernatur omnis veniam illo adipisci distinctio eos enim eius
              recusandae ad iste ipsa, porro quia dolore.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Service;
