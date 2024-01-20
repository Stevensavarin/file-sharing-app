import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section
      className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
    >
      <img
        alt="Night"
        src="https://i.pinimg.com/originals/2f/2d/9c/2f2d9c95c6ab50fdb83ca1b65228623f.jpg"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      <div className="hidden lg:relative lg:block lg:p-12">
        <a className="block text-white" href="/">
          <span className="sr-only">Home</span>
          <svg
            className="h-8 sm:h-10"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="#62f202"
            stroke="#62f202"
          >
            <path
              d="M262.9,135.3l-30.8-69.1H10v379.4l236,0.3v-20l-127.5-0.2l77.6-183.1l285.9,0v183.3H266v20h236V135.3H262.9z M482,222.5H182.9l-86.1,203H30V86.2h189.1l21.9,49.1H90v20h392V222.5z"
            />
          </svg>
        </a>

        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Welcome to SaveEase App! 
        </h2>

        <p className="mt-4 leading-relaxed text-white/90">
        Drag, drop, and share securely, effortlessly send files with password protection via email.        </p>
      </div>
    </section>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <div className="relative -mt-16 block lg:hidden">
          <a
            className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
            href="/"
          >
            <span className="sr-only">Home</span>
           <Image src='/logo.svg' width={150} 
           alt="logo"
           height={100} />
          </a>

          <h1
            className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
          >
            Welcome to SaveEase App!
          </h1>

          <p className="mt-4 leading-relaxed text-gray-500">
          Drag and drop your file directly on our cloud and share it with your friends secuarely with password and send it on email
          </p>
        </div>

      
        <SignIn />
      </div>
    </main>
  </div>
</section>
  );
}
