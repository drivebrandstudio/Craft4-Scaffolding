import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Sheet, SheetTrigger, SheetContent } from "../components/ui/sheet";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import "../js/app";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import { ThemeProvider } from "../components/ui/theme-provider";
import { ModeToggle } from "../components/ui/mode-toggle";
import { CardRotation } from "./components/CardRotation";

const siteURL = process.env.PRIMARY_SITE_URL;

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
  {
    path: "/set",
    element: <Set />,
    errorElement: <div> set brokadidid</div>,
  },
  {
    path: "/testmobile",
    element: <TestMobile />,
    errorElement: <div> test brokadidid</div>,
  },
]);

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// Here is where SSR would gain us value. Pull in JS libraries easily, utilize them, have the Server
// return HTML to quickly render while we are fetching data to hydrate said HTML.
/**
 * How to implement a React frontend with GraphQL. Currently not using Server Components. Yet...
 * @returns html that renders as the app
 */
function App() {
  const [response, setResponse] = useState<{ data?: { ping?: string } }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //   Vanilla Node.js implementation of generic 'ping' test in craftcms
    // data?.data?.ping
    fetch(siteURL + "/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer somethingsomethingsomething", // Get auth token from craftcms admin panel
      },
      body: JSON.stringify({
        query: "{ping}",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setResponse(res);
      });
  }, []);

  return (
    <>
      <h1>{loading ? "Loading" : `${response?.data?.ping}`}</h1>
      <div> here is where the new app would live</div>
      <Link to="/ready">ready?</Link>
    </>
  );
}

// BELOW IS AI GENERATED CODE

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
              to="#"
            >
              Services
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              to="#"
            >
              Doctors
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              to="#"
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
                  Here I will test all the ShadCN components as examples
                </h1>

                <h2 className="py-10">Accordion</h2>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>first item</AccordionTrigger>
                    <AccordionContent>TEst</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>second item</AccordionTrigger>
                    <AccordionContent>secondTEst</AccordionContent>
                  </AccordionItem>
                </Accordion>

                <h2 className="py-10">Alert</h2>
                <AlertDialog>
                  <AlertDialogTrigger>test open</AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>The title</AlertDialogTitle>
                      <AlertDialogDescription>
                        Main content of hte dialog
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>cancel</AlertDialogCancel>
                      <AlertDialogAction>continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <h2 className="py-10">Card Rotation</h2>
                <CardRotation />
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
            <Link className="text-xs hover:underline underline-offset-4" to="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" to="#">
              Privacy
            </Link>
          </nav>
          <div className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4 underline underline-offset-4"
              to="#"
            >
              Facebook
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4 underline underline-offset-4"
              to="#"
            >
              Twitter
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4 underline underline-offset-4"
              to="#"
            >
              Instagram
            </Link>
          </div>
        </footer>
      </div>
      <Link to="/set">set</Link>
    </>
  );
}

function Set() {
  return (
    <>
      <div className="flex flex-col min-h-[100dvh]">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" to="#">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Health Clinic</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-blue-500"
              to="#"
            >
              Services
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-blue-500"
              to="#"
            >
              About Us
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-blue-500"
              to="#"
            >
              Contact
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-6 px-4 text-center md:px-6 lg:gap-10">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-500">
                  Your Health is Our Priority
                </h1>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Providing compassionate care for all our patients. Let us take
                  care of you.
                </p>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="grid gap-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none text-blue-500">
                  Our Services
                </h2>
                <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  We offer a wide range of medical services to meet your needs.
                </p>
              </div>
              <div className="grid gap-4">
                <ul className="grid gap-4">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-blue-500">
                        Primary Care
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Comprehensive healthcare for the individual and family.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-blue-500">
                        Pediatrics
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Specialized care for infants, children, and adolescents.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-blue-500">
                        Dermatology
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Diagnosis and treatment of skin conditions.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-blue-500">
                        Nutrition
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Personalized diet and nutrition plans for health and
                        wellness.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="400"
                src="/placeholder.svg"
                width="600"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-500">
                    Welcome to Our Clinic
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Our state-of-the-art facility is designed to provide a
                    comfortable and welcoming environment for our patients.
                  </p>
                </div>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  to="#"
                >
                  Tour the Clinic
                </Link>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-500">
                    Contact Us
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    We are here to answer your questions and help you make an
                    appointment. Contact our friendly staff today.
                  </p>
                </div>
                <form className="grid max-w-sm gap-2">
                  <Input className="w-full" placeholder="Name" type="text" />
                  <Input className="w-full" placeholder="Email" type="email" />
                  <Input className="w-full" placeholder="Phone" type="tel" />
                  <Textarea
                    className="w-full min-h-[100px]"
                    placeholder="Message"
                  />
                  <Button className="w-full" type="submit">
                    Submit
                  </Button>
                </form>
              </div>
              <div className="grid gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-blue-500">
                    Make an Appointment
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Call to schedule a visit:
                    <span className="font-semibold">123-456-7890</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-blue-500">
                    Clinic Hours
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Monday-Friday: 9:00 AM - 5:00 PM
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-blue-500">
                    Our Location
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    123 Health Street, Suite 100, Cityville, ST 12345
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-500">
                  Experience the workflow the best frontend teams love.
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Let your team focus on shipping features instead of managing
                  infrastructure with automated CI/CD.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Sign up to get notified when we launch.
                  <Link
                    className="underline underline-offset-2 text-blue-500"
                    to="#"
                  >
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 Health Clinic. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4 text-blue-500"
              to="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4 text-blue-500"
              to="#"
            >
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
      <Link to="/testmobile">idk lets test mobile</Link>
    </>
  );
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function TestMobile() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link className="flex items-center font-bold" to="#">
              Home
            </Link>
            <nav className="grid gap-4 pt-4">
              <Link className="flex items-center font-bold" to="#">
                About
              </Link>
              <Link className="flex items-center font-bold" to="#">
                Projects
              </Link>
              <Link className="flex items-center font-bold" to="#">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link className="ml-auto hidden lg:flex" to="#">
          Home
        </Link>
      </header>
      <main className="flex-1 w-full items-center py-6 md:py-12">
        <div className="mx-4 md:mx-6">
          <div className="space-y-4">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-full max-w-[600px] grid gap-2 text-center">
                <h1 className="text-4xl font-bold">
                  Creative work by Emily Roberts
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  I'm a designer who loves to create beautiful and user-friendly
                  interfaces. Here are some of my best projects.
                </p>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <img
                    alt="Project 1"
                    className="aspect-video overflow-hidden rounded-lg object-cover"
                    height="300"
                    src="/placeholder.svg"
                    width="500"
                  />
                </CardContent>
                <CardFooter className="bg-gray-100 p-4 dark:bg-gray-800">
                  <div className="grid gap-1.5">
                    <h2 className="text-xl font-semibold leading-none">
                      Project 1
                    </h2>
                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                      Beautiful website design
                    </p>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <img
                    alt="Project 2"
                    className="aspect-video overflow-hidden rounded-lg object-cover"
                    height="300"
                    src="/placeholder.svg"
                    width="500"
                  />
                </CardContent>
                <CardFooter className="bg-gray-100 p-4 dark:bg-gray-800">
                  <div className="grid gap-1.5">
                    <h2 className="text-xl font-semibold leading-none">
                      Project 2
                    </h2>
                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                      Mobile app UI design
                    </p>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <img
                    alt="Project 3"
                    className="aspect-video overflow-hidden rounded-lg object-cover"
                    height="300"
                    src="/placeholder.svg"
                    width="500"
                  />
                </CardContent>
                <CardFooter className="bg-gray-100 p-4 dark:bg-gray-800">
                  <div className="grid gap-1.5">
                    <h2 className="text-xl font-semibold leading-none">
                      Project 3
                    </h2>
                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                      Creative illustration
                    </p>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <img
                    alt="Project 4"
                    className="aspect-video overflow-hidden rounded-lg object-cover"
                    height="300"
                    src="/placeholder.svg"
                    width="500"
                  />
                </CardContent>
                <CardFooter className="bg-gray-100 p-4 dark:bg-gray-800">
                  <div className="grid gap-1.5">
                    <h2 className="text-xl font-semibold leading-none">
                      Project 4
                    </h2>
                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                      Photography portfolio
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex w-full items-center justify-center py-4 border-t">
        Made with Love
        <Link to="/">home</Link>
      </footer>
    </div>
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
