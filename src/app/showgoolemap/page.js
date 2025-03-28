"use client"; 
import dynamic from "next/dynamic";
import Head from "next/head";

const GoogleMapComponent = dynamic(() => import("@/components/googlemap"), {
  ssr: false, // Ensures it only runs on the client side
});

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Bhowali Bike Riders</title>
      </Head>
      <div className="container mx-auto p-5">
        <h1 className="text-2xl mb-5 font-bold">Visit Our Office</h1>
        <GoogleMapComponent />
      </div>
    </>
  );
}
