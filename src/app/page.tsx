/** @format */

import AboutMe from "./components/about-me";
import HomeComponent from "./components/home/Index";

export default function Home() {
  return (
    <main className="min-h-screen p-12 bg-black">
      {/* <HomeComponent /> */}
      <AboutMe />
    </main>
  );
}
