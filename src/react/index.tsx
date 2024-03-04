import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import "../js/app";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div> home brokadidid</div>,
  },
  {
    path: "/ready",
    element: <Ready />,
    errorElement: <div> ready brokadidid</div>,
  },
]);

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Here is where SSR would gain us value. Pull in JS libraries easily, utilize them, have the Server
// return HTML to quickly render while we are fetching data to hydrate said HTML.
/**
 * How to implement a React frontend with GraphQL
 * @returns html that renders as the app
 */
function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //   Vanilla Node.js implementation of generic 'ping' test in craftcms
    // data?.data?.ping
    fetch("https://craft4-scaffolding.ddev.site/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: "{ping}",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setData(res);
      });
  }, []);

  return (
    <>
      <h1>{loading ? "Loading" : `${data?.data?.ping}`}</h1>
      <div> here is where the new app would live</div>
      <Link to="/ready">ready?</Link>
    </>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function Ready() {
  return (
    <>
      <div className="flex flex-col min-h-[100dvh]">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <div className="flex items-center">
            <HeartIcon className="h-6 w-6" />
            <span className="font-semibold ml-2">Health Clinic</span>
          </div>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Services
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Doctors
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Contact
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Your Health is Our Priority
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We are committed to providing high-quality care with a
                  personalized touch.
                </p>
              </div>
              <form className="flex flex-col gap-4 min-[400px]:flex-row">
                <Input
                  className="max-w-sm"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Book Appointment</Button>
              </form>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Quality Care. Compassionate Service.
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We offer a wide range of medical services to meet your
                  healthcare needs.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 sm:gap-10 lg:grid-cols-2 lg:gap-12">
                <img
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
                <ul className="grid gap-6 md:gap-8 lg:gap-12">
                  <li className="grid gap-1">
                    <h3 className="text-xl font-bold">Primary Care</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Comprehensive healthcare for the individual and family.
                    </p>
                  </li>
                  <li className="grid gap-1">
                    <h3 className="text-xl font-bold">Specialty Services</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Access to expert care for specific medical conditions.
                    </p>
                  </li>
                  <li className="grid gap-1">
                    <h3 className="text-xl font-bold">Wellness Programs</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Promoting health and preventing disease through lifestyle
                      management.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Patient Testimonials
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  See what our patients have to say about their experience at
                  our clinic.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 sm:gap-10 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col gap-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    Testimonial
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "The doctors and staff are very caring and professional. I
                    always feel well taken care of when I visit the clinic. The
                    service is excellent and the facilities are clean and
                    comfortable."
                  </p>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                  <form className="flex flex-col gap-2">
                    <Input
                      className="border-gray-200"
                      placeholder="Name"
                      type="text"
                    />
                    <Input
                      className="border-gray-200"
                      placeholder="Email"
                      type="email"
                    />
                    <Textarea
                      className="min-h-[100px] border-gray-200"
                      placeholder="Your Testimonial"
                    />
                    <Button type="submit">Submit Testimonial</Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Meet Our Doctors
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our team of experienced physicians is dedicated to providing
                  the highest quality of care.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 sm:gap-10 lg:grid-cols-4 lg:gap-12">
                <div className="flex flex-col items-center gap-2">
                  <img
                    alt="Dr. Smith"
                    className="rounded-full overflow-hidden aspect-square object-cover object-center"
                    height="200"
                    src="/placeholder.svg"
                    width="200"
                  />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Dr. Emily Smith</h3>
                    <p className="text-sm text-gray-500">Cardiologist</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img
                    alt="Dr. Johnson"
                    className="rounded-full overflow-hidden aspect-square object-cover object-center"
                    height="200"
                    src="/placeholder.svg"
                    width="200"
                  />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Dr. Michael Johnson</h3>
                    <p className="text-sm text-gray-500">Pediatrician</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img
                    alt="Dr. Lee"
                    className="rounded-full overflow-hidden aspect-square object-cover object-center"
                    height="200"
                    src="/placeholder.svg"
                    width="200"
                  />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Dr. Sarah Lee</h3>
                    <p className="text-sm text-gray-500">Dermatologist</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img
                    alt="Dr. Brown"
                    className="rounded-full overflow-hidden aspect-square object-cover object-center"
                    height="200"
                    src="/placeholder.svg"
                    width="200"
                  />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Dr. James Brown</h3>
                    <p className="text-sm text-gray-500">Oncologist</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Contact Us
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Ready to book an appointment or have questions about our
                  services? Contact us today.
                </p>
              </div>
              <div className="mx-auto w-full max-w-[400px] space-y-2">
                <form className="flex flex-col gap-2">
                  <Input placeholder="Name" type="text" />
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Phone" type="tel" />
                  <Textarea
                    className="min-h-[100px] border-gray-200"
                    placeholder="Message"
                  />
                  <Button type="submit">Submit</Button>
                </form>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <nav className="flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
          <div className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4 underline underline-offset-4"
              href="#"
            >
              Facebook
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4 underline underline-offset-4"
              href="#"
            >
              Twitter
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4 underline underline-offset-4"
              href="#"
            >
              Instagram
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
