
import { Header } from "./_components/header";
import { HomePage } from "./_components/home";
import { Analytics } from "@vercel/analytics/react"

const Home = () => {
  return ( 
    <div className="flex flex-col min-h-screen dark:bg-[#1F1F1F]">
      <Header />
      <main className="h-full pt-40">
        <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 py-10">
          <HomePage />
          <Analytics />
        </div>
      </main>
    </div>
   );
}
 
export default Home;