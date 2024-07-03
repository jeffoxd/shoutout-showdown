"use client";

import Card from "@/components/Card";

export default function Page() {
  return (
    <div className="grid grid-cols-3 gap-y-8">
      <Card
        className="w-[480px] h-64"
        src="/images/education_website_presentation_thumbnail.png"
        onClick={() =>
          //@ts-ignore
          document.getElementById("educational_video_modal").showModal()
        }
      />
      <dialog id="educational_video_modal" className="modal">
        <div className="modal-box max-w-full h-5/6">
          <iframe
            src="https://drive.google.com/file/d/1847AuP2c0UWaUVaBlhKZ1uzr1wzx0Fn-/preview"
            width="100%"
            height="100%"
            allow="autoplay"
          ></iframe>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      {[...Array.from(Array(8).keys())].map((num, i) => (
        <Card
          key={`discovery-${i}`}
          className="w-[480px] h-64"
          onClick={() => {}}
        />
      ))}
    </div>
  );
}
