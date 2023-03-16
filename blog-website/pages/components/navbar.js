import Link from "next/link";

function navbar() {
  return (
    <>
      <nav className="justify-center flex flex-wrap p-4">
        <div className="font-mono pt-3 pb-3 box-border rounded-md h-14 w-full shadow-lg">
          <Link href="\">
            <h1 className="text-3xl text-center ">Project Blogo</h1>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default navbar;
