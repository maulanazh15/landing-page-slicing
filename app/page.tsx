import { Button } from "@/components/ui/button";
import { ArrowRight, Circle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <nav className="container flex items-center justify-between px-32 py-5 min-w-full">
        <div className="font-bold text-3xl">
          Logo
        </div>
        <div className="flex items-center">
          <ul className="flex gap-9 font-light">
            <li>Home</li>
            <li>Features</li>
            <li>Community</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
          <Button className="ml-4">
            Register Now
            <ArrowRight size={20} />
          </Button>
        </div>
      </nav>
      <section className="container pt-20 bg-[#F5F7FA] flex flex-col justify-center max-w-full max-h-screen">
        <div className="grid grid-cols-2 items-center">
          <div className="flex flex-col items-start pl-40">
            <h1 className="text-7xl text-left font-bold mb-10">Lessons and insights
              <br />
              <span className="text-primary">
                from 8 years
              </span>
            </h1>
            <p>Where to grow your bussiness as a photographer: site or social media?</p>
            <Button className="mt-5">
              Register
            </Button>
          </div>
          <div className="relative h-[500px] w-[500px] mx-auto">
            <Image src={'/Illustration.png'} alt="computer" fill />
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 pb-5">
          <Circle size={20} fill="green" color="green" />
          <Circle size={20} />
          <Circle size={20} />
        </div>
      </section>
      <section className="container mx-auto flex flex-col gap-4 items-center mt-6 pt-7">
        <h1 className="text-5xl font-semibold">Our Clients</h1>
        <p className="mb-10">We have been working with some Fortune 500+ clients</p>
        <div className="flex flex-row justify-between items-center gap-40">
          <Image src={'/icons/Logo.png'} width={50} height={50} alt="logo" />
          <Image src={'/icons/Logo(1).png'} width={50} height={50} alt="logo" />
          <Image src={'/icons/Logo(2).png'} width={50} height={50} alt="logo" />
          <Image src={'/icons/Logo(3).png'} width={50} height={50} alt="logo" />
          <Image src={'/icons/Logo(4).png'} width={50} height={50} alt="logo" />
          <Image src={'/icons/Logo(5).png'} width={50} height={50} alt="logo" />
          <Image src={'/icons/Logo(6).png'} width={50} height={50} alt="logo" />
        </div>
      </section>
      <section className="container mx-auto flex flex-col gap-4 items-center mt-6 pt-7">
        <h1 className="text-5xl font-semibold text-center">Manage your entire community
          <br />
          in a single system</h1>
        <p className="mb-10">Who is Nextcent suitable for?
        </p>
        <div className="flex flex-row justify-center items-center gap-40">
          <div className="flex flex-col items-center justify-center">
            <Image src={'/icons/Icon.png'} width={70} height={70} alt="logo" />
            <h1 className="text-2xl font-semibold mt-3 text-center">Membership Organisations</h1>
            <p className="text-center mt-2">Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={'/icons/Icon(1).png'} width={70} height={70} alt="logo" />
            <h1 className="text-2xl font-semibold mt-3 text-center">Membership Organisations</h1>
            <p className="text-center mt-2">Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={'/icons/Icon(2).png'} width={70} height={70} alt="logo" />
            <h1 className="text-2xl font-semibold mt-3 text-center">Membership Organisations</h1>
            <p className="text-center mt-2">Our membership management software provides full automation of membership renewals and payments</p>
          </div>
        </div>
      </section>
      <section className="container flex items-center justify-center mx-auto max-w-6xl">
        <Image src={'/icons/Frame35.png'} height={500} width={500} alt="people" />
        <div className="flex flex-col items-start">
          <h1 className="text-4xl font-semibold">The unseen of spending three years at Pixelgrade</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <Button className="mt-7">
            Learn More
          </Button>
        </div>
      </section>
      <section className="container mx-auto bg-[#F5F7FA] max-w-full p-16">
        <div  className="flex items-center justify-between max-w-5xl mx-auto">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-semibold">Helping a local 
            <br />
            <span className="text-primary">
            business reinvent itself

            </span>
            </h1>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex gap-5">
            <Image src={'/icons/Vector.png'} alt="vector" height={80} width={80} />
            <div className="flex flex-col">
              <h1 className="text-4xl font-semibold">2,245,341</h1>
              <p>Members</p>
            </div>
          </div>
          <div className="flex gap-5">
            <Image src={'/icons/Vector(1).png'} alt="vector" height={80} width={80} />
            <div className="flex flex-col">
              <h1 className="text-4xl font-semibold">2,245,341</h1>
              <p>Members</p>
            </div>
          </div>
          <div className="flex gap-5">
            <Image src={'/icons/Icon(3).png'} alt="vector" height={80} width={80} />
            <div className="flex flex-col">
              <h1 className="text-4xl font-semibold">2,245,341</h1>
              <p>Members</p>
            </div>
          </div>
          <div className="flex gap-5">
            <Image src={'/icons/Icon(4).png'} alt="vector" height={80} width={80} />
            <div className="flex flex-col">
              <h1 className="text-4xl font-semibold">2,245,341</h1>
              <p>Members</p>
            </div>
          </div>
        </div>
        </div>
      </section>
      
    </main>
  );
}
