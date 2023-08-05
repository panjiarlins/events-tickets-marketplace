const NavMobile = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
      }}
      className="w-[100%] h-[70px] items-center justify-between px-5 text-white font-extrabold"
    >
      <img
        style={{ gridColumn: "1 / 2" }}
        className="object-cover h-12 w-23"
        src="https://comika.id/wp-content/uploads/2021/02/cropped-Logo_Comika-1.png"
      />

      <button
        style={{ gridColumn: "-2 / -1" }}
        className="cursor-pointer py-2 px-2 bg-[#00ABF0] rounded-md"
      >
        Logout
      </button>
    </div>
  );
};

export { NavMobile };
