import {useEffect} from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return (
    <main id="about" className="bg-yellow-400  z-20">
      <section className="container  pt-1 pb-10   px-10 mx-auto">
        <div className="my-5  flex flex-col justify-center">
          <h1 className="text-center text-3xl font-semibold">About Us</h1>
          <p className="mt-2 text-center font-bold text-gray-800 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            consectetur dolore aut? Facere nam nesciunt quibusdam, nobis
            laboriosam minima, distinctio veritatis deserunt quis iusto nisi
            ducimus accusantium eos sint voluptas.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3  gap-2">
          <div className="bg-white shadow-xl rounded-xl p-3 col-span-2">
            <div>
              <h4 className="font-bold text-xl">Service</h4>
              <p className="font-bold text-sm mt-2 text-gray-800">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                iure! Quasi ut adipisci maxime totam earum culpa ratione hic
                eius odio, magni excepturi Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus eligendi facere sapiente voluptatum iure. Debitis saepe sunt natus a cupiditate unde perferendis vitae, rerum, autem reiciendis ab quisquam soluta eum. quaerat neque consectetur. Veritatis
                dicta tempora saepe!
              </p>
            </div>
          </div>
          <div className="bg-black hidden sm:block text-white shadow-xl row-span-1 rounded-xl p-3">
            <div>
              <h4 className="font-bold text-xl">Friendly</h4>
              <p className="font-bold text-sm mt-2 text-gray-300">

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                iure! Quasi ut adipisci maxime totam earum culpa ratione hic
                eius odio, magni excepturi quaerat neque consectetur. Veritatis
                dicta tempora saepe!
              </p>
            </div>
          </div>
          <div className=" bg-white sm:bg-black text-black sm:text-white shadow-xl row-span-2 rounded-xl p-3">
            <div>
              <h4 className="font-bold text-xl">Proffessional</h4>
              <p className="font-bold text-sm mt-2 text-gray-800 sm:text-gray-300">

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                iure! Quasi ut adipisci maxime totam earum culpa ratione hic
                eius odio, magni excepturi quaerat neque consectetur. Veritatis
                dicta tempora saepe! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, reprehenderit?
              </p>
            </div>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-3 col-span-2">
            <div>
              <h4 className="font-bold text-xl">Care</h4>
              <p className="font-bold text-sm mt-2 text-gray-800">

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                iure! Quasi ut adipisci maxime totam earum culpa ratione hic
                eius odio, magni excepturi quaerat neque consectetur. Veritatis
                dicta tempora saepe!
              </p>
            </div>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-3 col-span-2">
            <div>
              <h4 className="font-bold text-xl">Solution</h4>
              <p className="font-bold text-sm mt-2 text-gray-800">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                iure! Quasi ut adipisci maxime totam earum culpa ratione hic
                eius odio, magni excepturi quaerat neque consectetur. Veritatis
                dicta tempora saepe!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
