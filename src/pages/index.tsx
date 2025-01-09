import { Banner } from "@/components/banner";
import { Navbar } from "@/components/navbar";
import { Icons } from "@/components/icons";
import { Category } from "@/components/category";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Icons />
      <Category />
    </>
  );
}
