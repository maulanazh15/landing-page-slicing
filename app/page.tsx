import { Button } from "@/components/ui/button";
import { ArrowRight, Circle, Facebook, Instagram, Send, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent, CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";


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
          <Button className="ml-10">
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
      <section className="container mx-auto flex flex-col gap-4 items-center mt-6 pt-7 mb-11">
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
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 sm:gap-40 max-w-6xl min-h-max">
          <Card className="flex-1 max-w-xs h-80 p-5">
            <CardHeader className="h-1/2 flex items-center justify-center mb-3">
              <CardTitle className="flex flex-col items-center">
                <Image src={'/icons/Icon.png'} width={70} height={70} alt="logo" />
                <h1 className="text-2xl font-semibold mt-3 text-center">Membership Organisations</h1>
              </CardTitle>
            </CardHeader>
            <CardContent className="h-1/2 flex items-center justify-center">
              <p className="text-center">Our membership management software provides full automation of membership renewals and payments</p>
            </CardContent>
          </Card>

          <Card className="flex-1 max-w-xs h-80 p-5">
            <CardHeader className="h-1/2 flex items-center justify-center mb-3">
              <CardTitle className="flex flex-col items-center">
                <Image src={'/icons/Icon(1).png'} width={70} height={70} alt="logo" />
                <h1 className="text-2xl font-semibold mt-3 text-center">National Associations</h1>
              </CardTitle>
            </CardHeader>
            <CardContent className="h-1/2 flex items-center justify-center">
              <p className="text-center">Our membership management software provides full automation of membership renewals and payments</p>
            </CardContent>
          </Card>

          <Card className="flex-1 max-w-xs h-80 p-5">
            <CardHeader className="h-1/2 flex items-center justify-center mb-3">
              <CardTitle className="flex flex-col items-center">
                <Image src={'/icons/Icon(2).png'} width={70} height={70} alt="logo" />
                <h1 className="text-2xl font-semibold mt-3 text-center">Clubs And
                  <br />
                  Groups
                </h1>
              </CardTitle>
            </CardHeader>
            <CardContent className="h-1/2 flex items-center justify-center">
              <p className="text-center">Our membership management software provides full automation of membership renewals and payments</p>
            </CardContent>
          </Card>
        </div>


      </section>
      <section className="container flex items-center justify-center mx-auto max-w-6xl p-8">
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
        <div className="flex items-center justify-between max-w-5xl mx-auto">
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
            <div className="flex gap-5 items-center">
              <Image
                src={'/icons/Vector.png'}
                alt="vector"
                height={80}
                width={80}
                className="object-contain flex-shrink-0"
              />
              <div className="flex flex-col">
                <h1 className="text-4xl font-semibold">2,245,341</h1>
                <p>Members</p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <Image
                src={'/icons/Vector(1).png'}
                alt="vector"
                height={80}
                width={80}
                className="object-contain flex-shrink-0"
              />
              <div className="flex flex-col">
                <h1 className="text-4xl font-semibold">828,867</h1>
                <p>Event Bookings</p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <Image
                src={'/icons/Icon(3).png'}
                alt="vector"
                height={80}
                width={80}
                className="object-contain flex-shrink-0"
              />
              <div className="flex flex-col">
                <h1 className="text-4xl font-semibold">46,328</h1>
                <p>Clubs</p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <Image
                src={'/icons/Icon(4).png'}
                alt="vector"
                height={80}
                width={80}
                className="object-contain flex-shrink-0"
              />
              <div className="flex flex-col">
                <h1 className="text-4xl font-semibold">1,926,436</h1>
                <p>Payments</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="container flex items-center justify-center mx-auto max-w-6xl p-8">
        <Image src={'/icons/pana.png'} height={500} width={500} alt="people" />
        <div className="flex flex-col items-start">
          <h1 className="text-4xl font-semibold">How to design your site footer like we did</h1>
          <p className="mt-4">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
          </p>
          <Button className="mt-7">
            Learn More
          </Button>
        </div>
      </section>
      <section className="container mx-auto bg-[#F5F7FA] max-w-full p-16 mb-11">
        <div className="flex items-center justify-between max-w-7xl mx-auto gap-16">
          <Image src={'/icons/image 9.png'} alt="image9" height={300} width={300} />
          <div className="flex flex-col items-start">
            <p className="mb-3">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
            <h1 className="text-xl font-semibold text-primary mb-2">Tim Smith
            </h1>
            <h6 className="text-slate-400 mb-4">British Dragon Boat Racing Association</h6>
            <div className="flex flex-row justify-between items-center gap-3 w-full">
              <Image src={'/icons/Logo.png'} width={50} height={50} alt="logo" />
              <Image src={'/icons/Logo(1).png'} width={50} height={50} alt="logo" />
              <Image src={'/icons/Logo(2).png'} width={50} height={50} alt="logo" />
              <Image src={'/icons/Logo(3).png'} width={50} height={50} alt="logo" />
              <Image src={'/icons/Logo(4).png'} width={50} height={50} alt="logo" />
              <Image src={'/icons/Logo(5).png'} width={50} height={50} alt="logo" />
              <div className="text-primary flex items-center font-semibold gap-2">
                <Button className="font-semibold text-lg bg-transparent text-primary hover:text-primary-foreground shadow-none">
                  Meet all customers
                  <ArrowRight size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto flex flex-col gap-4 items-center mt-6 pt-7 mb-44">
        <div className="max-w-3xl flex flex-col gap-3">
          <h1 className="text-5xl font-semibold text-center">Caring is the new marketing
          </h1>
          <p className="mb-10 text-center">The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who&apos;s joining the community, read about how our community are increasing their membership income and lot&apos;s more.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-full sm:gap-40 min-h-max">
          <div className="flex flex-col items-center relative mt-10">
            {/* Image positioned behind the card */}
            <Image src={'/icons/image 18.png'} alt="read-book" width={400} height={200} className="z-0" />

            {/* Card positioned over the image */}
            <Card className="flex-1 max-w-xs p-4 bg-[#F5F7FA] z-10 absolute top-3/4 transform -translate-y-1/3 shadow-lg h-60">
              <CardHeader>
                <CardTitle className="text-center text-xl">
                  Creating Streamlined Safeguarding Processes with OneRen
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center text-primary font-semibold gap-2">
                <Button className="bg-transparent text-primary hover:text-primary-foreground shadow-none font-semibold text-lg">
                  Readmore
                  <ArrowRight size={20} />
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col items-center relative mt-10">
            {/* Image positioned behind the card */}
            <Image src={'/icons/image 19.png'} alt="read-book" width={400} height={200} className="z-0" />

            {/* Card positioned over the image */}
            <Card className="flex-1 max-w-xs p-4 bg-[#F5F7FA] z-10 absolute top-3/4 transform -translate-y-1/3 shadow-lg h-60">
              <CardHeader>
                <CardTitle className="text-center text-xl">
                  What are your safeguarding responsibilities and how can you manage them?
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center text-primary font-semibold gap-2">
                <Button className="bg-transparent text-primary hover:text-primary-foreground shadow-none font-semibold text-lg">
                  Readmore
                  <ArrowRight size={20} />
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col items-center relative mt-10">
            {/* Image positioned behind the card */}
            <Image src={'/icons/image 20.png'} alt="read-book" width={400} height={200} className="z-0" />

            {/* Card positioned over the image */}
            <Card className="flex-1 max-w-xs p-4 bg-[#F5F7FA] z-10 absolute top-3/4 transform -translate-y-1/3 shadow-lg h-60">
              <CardHeader>
                <CardTitle className="text-center text-xl">
                  Revamping the Membership Model with Triathlon Australia
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center text-primary font-semibold gap-2">
                <Button className="bg-transparent text-primary hover:text-primary-foreground shadow-none font-semibold text-lg">
                  Readmore
                  <ArrowRight size={20} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="container mx-auto bg-[#F5F7FA] max-w-full p-16">
        <div className="flex items-center justify-center max-w-2xl mx-auto">
          <div className="flex flex-col gap-5 items-center">
            <h1 className="text-5xl font-semibold text-center">Pellentesque suscipit fringilla libero eu.
            </h1>
            <p>We reached here with our hard work and dedication</p>
            <Button className="ml-4">
              Get a Demo
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </section>
      <footer className="container mx-auto bg-[#263238] max-w-full py-11">
        <div className="flex items-start justify-between max-w-5xl mx-auto text-white">
          <div className="flex flex-col">
            <div className="text-5xl mb-6">
              Logo
            </div>
            <p>Copyright © {new Date().getFullYear()} Landify UI Kit.</p>
            <p>All rights reserved</p>
            <div className="flex justify-between mt-7">
              <Button className="flex items-center justify-center bg-gray-600 rounded-full h-11 w-11">
                <Instagram size={15} />
              </Button>
              <Button className="flex items-center justify-center bg-gray-600 rounded-full h-11 w-11">
                <Twitter size={15} />
              </Button>
              <Button className="flex items-center justify-center bg-gray-600 rounded-full h-11 w-11">
                <Youtube size={15} />
              </Button>
              <Button className="flex items-center justify-center bg-gray-600 rounded-full h-11 w-11">
                <Facebook size={15} />
              </Button>

            </div>
          </div>
          <div className="flex gap-16">
            <div>
              <h2 className="mb-7 text-xl font-semibold">Company</h2>
              <ul className="flex flex-col gap-3">
                <li>About us</li>
                <li>Blog</li>
                <li>Contact us</li>
                <li>Pricing</li>
                <li>Testimonials</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-7 text-xl font-semibold">Support</h2>
              <ul className="flex flex-col gap-3">
                <li>Help center</li>
                <li>Terms of service</li>
                <li>Legal</li>
                <li>Privacy policy</li>
                <li>Status</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-7 text-xl font-semibold">Stay up to date</h2>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input placeholder="Your email address" className="bg-slate-300 text-slate-500 border-none" />
                <Button>
                  <Send size={15} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
