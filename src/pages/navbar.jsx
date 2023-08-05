const Navbar = () => {
  return (
    <div className="w-[100%] h-[70px] flex items-center justify-between px-5 text-white font-extrabold">
      <div className="flex items-center">
        <a href="dashboard">        <img
          className="object-cover h-12 w-23"
          src="https://comika.id/wp-content/uploads/2021/02/cropped-Logo_Comika-1.png"
        /></a>
        <div className="grid grid-cols-4 gap-4 px-4 text-center">
          <div>Comika</div>
          <div>Event</div>
          <div>Tix</div>
          <div>Review</div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <input
          className="rounded-lg px-5 py-2 font-extrabold text-black"
          type="text"
          placeholder="Search"
        />
        <a href="login"><button className="py-2 px-4 bg-[#00ABF0] rounded-md">Login</button></a>
        <a href="register"><button className="py-2 px-4 bg-[#00ABF0] rounded-md">Register</button></a>
      </div>
    </div>
  );
};

export { Navbar };
