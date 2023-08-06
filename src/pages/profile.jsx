const Profile = () => {
  return (
    <div>
      <div className="text-white text-center">
        <h1 className="text-3xl font-extrabold py-10">My Account</h1>
      </div>

      <div className="container bg-white mx-auto py-8 rounded-lg">
        <div className="p-4 border rounded-lg shadow-md">
          <h2 className="text-xl text-black font-serif mb-4">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-black font-sans mb-2">
                Fullname: <span className="ml-[80px]">Fullname</span>
              </label>
            </div>
            <div>
              <label className="font-sans text-black mb-2">
                Email: <span className="ml-[106px]">@mail.com</span>
              </label>
            </div>
            <div>
              <label className="font-sans text-black mb-2">
                Password: <span className="ml-[78px]">********</span>
              </label>
            </div>
            <div>
              <label className="font-sans text-black mb-2">
                Referrcal Code: <span className="ml-[41px]">123QWERTY</span>
              </label>
            </div>
          </div>
        </div>

        {/* <div className="mt-8 p-4 border rounded-lg shadow-md">
          <h2 className="text-xl text-white font-semibold mb-4">Change Password</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white mb-2" for="current_password">
                Current Password
              </label>
              <input
                className="w-full border rounded-lg p-2"
                type="password"
                id="current_password"
                placeholder="Enter current password"
              />
            </div>
            <div>
              <label className="block text-white mb-2" for="new_password">
                New Password
              </label>
              <input
                className="w-full border rounded-lg p-2"
                type="password"
                id="new_password"
                placeholder="Enter new password"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export { Profile };
