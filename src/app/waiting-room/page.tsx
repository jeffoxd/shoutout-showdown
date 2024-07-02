export default function Page() {
  return (
    <div className="bg-[url('/images/waiting_room_bg.png')] bg-cover min-h-screen p-16">
      <span className="text-8xl text-white">Waiting Room...</span>
      <div className="grid grid-cols-2 justify-center items-center p-8">
        <div className="carousel carousel-vertical rounded-box h-96">
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <button className="btn w-big text-5xl h-24 bg-orange-400 text-white border-none">
            Kick All
          </button>
          <button className="btn w-big text-5xl h-24 bg-green-300 text-white border-none">
            Start Quiz
          </button>
          <button className="btn w-big text-5xl h-24 bg-red-400 text-white border-none">
            End Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
