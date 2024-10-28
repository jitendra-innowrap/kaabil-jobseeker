import Breadcrumb from "@/components/Breadcrumb";
import JobdetailBanner from "@/components/JobDetail/JobdetailBanner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
        <Breadcrumb />
        <JobdetailBanner />
    </div>
  );
}
