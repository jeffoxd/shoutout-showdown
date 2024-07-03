import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-row gap-x-24 my-8 mx-8">
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
