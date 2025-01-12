import Main from "./components/main/Main";

export default function Home() {
  return (
    <>
      <div className="text-[60px] w-[1000px] h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex justify-start items-center flex-col ">
        <div>
          <Main />
        </div>
      </div>
    </>
  );
}
