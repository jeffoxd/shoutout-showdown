import Image from "next/image";
import Link from "next/link";
import { kollektif } from "@/app/font";

type Props = {
  className?: string;
};

export default function Header({ className }: Props) {
  return (
    <header className={className}>
      <nav>
        <div className="navbar h-32 bg-blue-300">
          <div className="flex-1 ml-8">
            <h1 className="text-6xl text-white">shoutout showdown!</h1>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <label
                className={`input input-bordered w-[480px] mr-12 ${kollektif.className} flex items-center gap-2`}
              >
                <Image
                  src="/images/magnifying_glass.png"
                  alt="magnifying glass"
                  width={30}
                  height={30}
                  className="mr-4"
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="grow text-3xl"
                />
              </label>
            </div>
            <div className="mr-12">
              <Link href="/">
                <Image
                  alt="user avatar"
                  src="/images/guest_profile.png"
                  width={75}
                  height={75}
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
