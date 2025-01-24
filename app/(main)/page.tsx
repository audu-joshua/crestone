import Hero from "@/components/Home/hero";
import { CarouselHome } from "@/components/Home/carousel";
import { ListingGallery } from "@/components/Home/gallery";
import { Video } from "@/components/Home/video";
import { Faq } from "@/components/Home/faq";
import { BecomeMember } from "@/components/Home/member";
export default function Home() {
  return (
    <div className="bg-white">
    <Hero/>
    <CarouselHome/>
    <ListingGallery/>
    <Video/>
    <Faq/>
    <BecomeMember/>
    </div>
  );
}
