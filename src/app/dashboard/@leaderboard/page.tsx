import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-row gap-x-48 my-16 mx-16">
      <Image
        src="/images/monthly_rankings.png"
        alt="monthly rankings"
        width={750}
        height={750}
      />
      <Image
        src="/images/all_time_rankings.png"
        alt="all time rankings"
        width={750}
        height={750}
      />
    </div>
  );
}
