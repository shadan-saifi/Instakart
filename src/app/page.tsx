"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  carousalItems,
  homeCardsItems,
  secondCarousalItems,
  thirdCarousalItems,
} from "@/helpers/data/homePageData";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Logo from "@/components/logo";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "@/services/userServices";
import { login, logout } from "@/store/authSlice";
import { AxiosError } from "axios";
import { ApiErrorInterface } from "@/types/ApiErrorInterface";
import handleAxiosError from "@/helpers/handleAxiosError";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  // const router = useRouter();
  const dispatch=useDispatch();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    (async () => {
      try {
        const userData = await getCurrentUser();
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        const response = handleAxiosError(error as AxiosError<ApiErrorInterface>);
        // const errorMessage = response?.message
        console.log("Error getting current user", response);
        dispatch(logout());
      } finally {
        setLoading(false);
      }
    })();
  }, [dispatch]);


  return !loading ? (
    <div className="min-h-screen max-w-screen  ">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start sm:p-16 p-14 sm:pt-8  pt-4">
        <Carousel
          className="w-full max-w-full max-h-80"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {carousalItems.map((item, index) => (
              <CarouselItem
                key={index}
                className="w-full relative h-36 sm:h-44 md:h-54 lg:h-72"
              >
                <Image
                  src={item.to}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  grid-flow-row gap-1">
          {homeCardsItems.map((item) => (
            <Card key={item?.name}>
              <CardHeader>
                <CardTitle>{item?.name}</CardTitle>
                <CardDescription>{item?.description}</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2  grid-flow-row gap-1">
                {item?.subItems?.map((subItem) => (
                  <Link
                    href={subItem?.to}
                    key={subItem?.to}
                    className="relative w-full max-w-xs aspect-square sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                  >
                    <Image
                      src={subItem?.img}
                      alt={subItem?.name}
                      priority={true}
                      fill={true}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <span className="absolute text-sm bottom-1 left-1 font-semibold bg-slate-900 bg-transparent text-white opacity-80">
                      {subItem?.name}
                    </span>
                  </Link>
                ))}
              </CardContent>
              <CardFooter>
                <Link href={item?.to} className="text-blue-900">
                  Explore all
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-full max-h-96"
        >
          <span className="text-2xl font-semibold text-gray-800">
            New Arrival discount 20% at Shoes
          </span>
          <CarouselContent>
            {secondCarousalItems?.map((item, index) => (
              <CarouselItem
                key={index}
                className=" sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6 max-w-full max-h-80 xl:h-72 lg:h-64 h-60 "
              >
                <Card className="flex items-center justify-center h-full">
                  <CardContent className="relative aspect-square h-full p-0">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-full max-h-96"
        >
          <span className="text-2xl font-semibold text-gray-800">
            Buy at 50% discount
          </span>
          <CarouselContent>
            {thirdCarousalItems?.map((item, index) => (
              <CarouselItem
                key={index}
                className=" sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6 max-w-full max-h-80 xl:h-72 lg:h-64 h-60 "
              >
                <Card className="flex items-center justify-center h-full">
                  <CardContent className="relative aspect-square h-full p-0">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </main>
      <footer className="bg-gray-800 text-white py-8 ">
        <div className="text-center mb-6">
          <button className="text-blue-500 hover:text-blue-400">
            Back to Top
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Get to Know Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  About Instakart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Instakart Devices
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Instakart Science
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Help & Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Returns & Replacements
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Shipping Rates & Policies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Manage Your Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Order Tracking
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Payment & Shipping</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Google Pay
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Returns & Exchanges
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Legal & Privacy</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Conditions of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Privacy Notice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Your Ads Privacy Choices
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mx-auto ">
          <Link href="/" className="flex items-center size-14">
            <Logo />
          </Link>
        </div>

        <div className="text-center text-sm">
          <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
      </footer>
    </div>
  ) : (
    <div className=" flex flex-col justify-center items-center w-full h-svh space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
