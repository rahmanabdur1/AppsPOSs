

import Header from "../Components/Shared/Header";
import Sidebar from "../Components/Shared/Sidebar";



export default function LayoutUser({ children }: { children: React.ReactNode }) {
  return (
 
    <main className="flex min-h-screen flex-grow font-[family-name:var(--font-lexend)]">
    <Sidebar className="fixed hidden xl:block font-[family-name:var(--font-lexend)] dark:bg-gray-50" />
    <Header />
    <div className="  w-full font-[family-name:var(--font-lexend)]   xl:ms-[270px] xl:w-[calc(100%-270px)] 2xl:ms-72 2xl:w-[calc(100%-288px)]"> 
      <div className=" ml-6  mr-6 mb-8 mt-[74px]">
        {children}
      </div>
    </div>
  </main>

  );
}
