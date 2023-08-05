const DetailsProduct = () => {
  return (
    <div className="bg-[#1C212E]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-white text-3xl font-bold mb-4">
          Stand Up Fest - The Series
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img
              src="https://comika.id/wp-content/uploads/2020/01/web-banner-coupon-kemerdekaan-1.png"
              className="w-full mb-4 object-cover"
            />
            <h1 className="text-xl font-[800]">Rp. 100.000,-</h1>
            <h2 className="text-black font-bold">
              Bekasi, Jawa Barat, Indonesia
            </h2>
            <h2 className="text-black font-bold">17 Agustus 2023</h2>

            <button className="bg-[#00ABF0] text-white cursor-pointer py-1 px-4 font-extrabold  border-transparent rounded-md">
              Buy
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#131722]">
        <div className="text-[#00BAEF] font-extrabold container mx-auto px-4 py-8">
          Description
        </div>
        <hr />
        <p className="py-4 px-4 text-[#939CB0] font-extrabold">
          Stand Up Fest "The Series" persembahan Indonesia Media yang
          menampilkan Komika ternama Popon Kerok, Ate, Yono Bakrie, Soleh
          Solihun dan Mongol Stres di Gedung Menara Kuningan Jakarta. Hadir
          dengan versi video digital yang menyampaikan keresahan dari setiap
          Komikanya. Mulai dari Popon Kerok yang memperkenalkan dirinya sebagai
          bapak rumah tangga namun kesehariannya menjadi makmum. Popon cerita
          soal peran menjadi seorang ayah, pola parenting, ibadah, kiat-kiat
          lomba 17 Agustus-an ditanamkannya sejak dini. Lalu, Ate julid dengan
          orang yang war tiket Coldplay hingga me-riffing menteri PUPR Basuki
          Hadimuljono. Dilanjut dengan Yono Bakrie yang merasa mirip Lee Min Ho.
          Soleh Solihun yang nyenggol Mongol Stres tentang memuja setan hingga
          di akhir sesi Mongol Stres menjawab semua keresahan tentang gereja dan
          satanis yang melekat pada dirinya. Tonton video digitalnya sekarang
          original dan eksklusif di Comika.id.
        </p>
      </div>
    </div>
  );
};

export { DetailsProduct };
