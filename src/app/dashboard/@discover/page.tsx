"use client";

import Card from "@/components/Card";

export default function Page() {
  const cardWidth = 360;
  const heightWidth = 240;
  const closeModal = () => {
    var video = document.getElementById("vid");
    //@ts-ignore
    document.getElementById("vid").src = "";
  };
  return (
    <div className="grid grid-cols-3 gap-y-8">
      <Card
        width={cardWidth}
        height={heightWidth}
        src="/images/education_website_presentation_thumbnail.png"
        onClick={() => {
          //@ts-ignore
          document.getElementById("vid").src =
            "https://drive.google.com/file/d/1847AuP2c0UWaUVaBlhKZ1uzr1wzx0Fn-/preview";
          //@ts-ignore
          document.getElementById("educational_video_modal").showModal();
        }}
      />
      <dialog id="educational_video_modal" className="modal">
        <div className="modal-box max-w-full h-5/6">
          <iframe id="vid" width="100%" height="100%" allow="autoplay"></iframe>
        </div>
        <form method="dialog" className="modal-backdrop" onClick={closeModal}>
          <button>close</button>
        </form>
      </dialog>
      {[...Array.from(Array(8).keys())].map((num, i) => (
        <Card
          width={cardWidth}
          height={heightWidth}
          key={`discovery-${i}`}
          className=""
          onClick={() => {}}
        />
      ))}
    </div>
  );
}
