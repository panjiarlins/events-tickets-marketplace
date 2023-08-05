import './dashboard.css';
import  { FaHeart } from 'react-icons/fa';
import { PiHandbagSimpleFill } from 'react-icons/pi';
import { IconContext } from 'react-icons';

const Dashboard = () => {

    return(
        <>
        <div className='nav'></div>
        <div>
            <img src="https://comika.id/wp-content/uploads/2020/01/web-banner-coupon-kemerdekaan-1.png" alt="" />
        </div>
        <div className='konten1'>
            <div><p>New Release <hr /></p></div>
        </div>
        <div className='grid1'>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2023/07/stand-up-fest-the-series-cover-300x300.png" alt="" /></div>
                <div><p>Rp 100.000,00</p></div>
                <div><p>Stand-Fest"The Series</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2023/07/ICUS-Dibalik-SUCI-Cover-300x300.png" alt="" /></div>
                <div><p>Rp 100.000,00</p></div>
                <div><p>ICUS (Dibalik ICUS)</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2023/07/Cinereku-Cover-300x300.png" alt="" /></div>
                <div><p>Rp 50.000,00</p></div>
                <div><p>Cinereku</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2023/07/1-Tix-Merdeka-atau-Party-Cover-300x300.png" alt="" /></div>
                <div><p>Rp 200.000,00</p></div>
                <div className='truncate text-white'>1 Tix (Merdeka atau Party)</div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2023/07/2-Tix-Merdeka-atau-Party-Cover-300x300.png" alt="" /></div>
                <div><p>Rp 400.000,00</p></div>
                <div className='truncate text-white'>2 Tix(Merdeka atau Party)</div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2023/07/Name-For-A-Band-Episode-6-Cover-300x300.png" alt="" /></div>
                <div><p>Rp 75.000,00</p></div>
                <div className='truncate text-white'>Name For A Band:Episode 6</div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
        </div>
        <div className='konten1'>
            <div ><p>Nonton Offline</p></div>
        </div>
        <div className='grid1'>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2023/07/1-Tix-Merdeka-atau-Party-Cover-300x300.png" alt="" /></div>
                <div><p>Rp 200.000,00</p></div>
                <div><p className='truncate'>1 Tix(Merdeka atau Party)</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2023/07/2-Tix-Merdeka-atau-Party-Cover-300x300.png" alt="" /></div>
                <div><p>Rp 400.000,00</p></div>
                <div><p className='truncate'>2 Tix(Merdeka atau Party)</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2023/06/KV-GAV-COVER-TICKET-300x300.png" alt="" /></div>
                <div><p>Rp 65.000,00</p></div>
                <div><p className='truncate'>1 Tix (Generation Gap)</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2023/06/KV-GAV-COVER-TICKET-2TIX-300x300.png" alt="" /></div>
                <div><p>Rp 100.000,00</p></div>
                <div><p className='truncate'>2 Tix (Generation Gap)</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2023/06/KV-EMPATI-MATI-COVER-TICKET-1-tix-300x300.png" alt="" /></div>
                <div><p>Rp 100.000,00</p></div>
                <div><p>1 Tix(Empati Mati)</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2023/06/KV-EMPATI-MATI-COVER-TICKET-2-tix-300x300.png" alt="" /></div>
                <div><p>Rp 150.000,00</p></div>
                <div><p>2 Tix(Empati Mati)</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
        </div>
        <div className='konten1'>
            <div ><p>Comika.id Original</p></div>
        </div>
        <div className='grid1'>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2023/07/stand-up-fest-the-series-cover-300x300.png" alt="" /></div>
                <div><p>Rp 100.000,00</p></div>
                <div><p>Stand-Fest"The Series</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2023/07/ICUS-Dibalik-SUCI-Cover-300x300.png" alt="" /></div>
                <div><p>Rp 100.000,00</p></div>
                <div><p>ICUS (Dibalik SUCI)</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2023/06/Antara-Ada-Dan-Tiada-Cover-2-300x300.png" alt="" /></div>
                <div><p>Rp 50.000,00</p></div>
                <div><p>Antara Ada dan Tiada</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2023/06/cover-CL-300x300.png" alt="" /></div>
                <div><p>Rp 75.000,00</p></div>
                <div><p>CeritaIn Lagilah</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2023/05/COVER-PRODUK-AJG-LAH-300x300.png" alt="" /></div>
                <div><p>Rp 75.000,00</p></div>
                <div><p>AJG LAH!</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2023/03/Podcast-Senen-Kemis-Jadi-Gimana-Kedepannya-Cover-300x300.jpg" alt="" /></div>
                <div><p>Rp 100.000,00</p></div>
                <div><p className='truncate'>Podcast Senen Kemis Live "Jadi Gimana Ke Depannya?"</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
        </div>
        <div className='konten1'>
            <div ><p>Comika Talent Management</p></div>
        </div>
        <div className='grid1'>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2019/03/Who-am-I-300x300.webp" alt="" /></div>
                <div><p>Rp 75.000,00</p></div>
                <div><p>Who Am I?</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2019/12/AWWEE-pidato-presiden-2-300x300.jpeg" alt="" /></div>
                <div><p>Rp 150.000,00</p></div>
                <div><p>Pidato Presiden</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2021/06/COVER-BUNDLING-KK-JURU-BICARA-300x300.png" alt="" /></div>
                <div><p>Rp 349.000,00</p></div>
                <div><p>KK & JB</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2022/06/KUNDANG-COVER-padang-300x300.png" alt="" /></div>
                <div><p>Rp 100.000,00</p></div>
                <div><p>Kundang(Padang)</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2021/05/juru-bicara-pandji-300x300.jpg" alt="" /></div>
                <div><p>Rp 150.000,00</p></div>
                <div><p>Juru Bicara</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2018/05/Audio-Mesakke-Bangsaku-300x300.jpg" alt="" /></div>
                <div><p>Rp 100.000,00</p></div>
                <div><p className='truncate'>Mesakke Bangsaku (Audio)</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
        </div>
        <div className='konten1'>
            <div ><p>Trending Now</p></div>
        </div>
        <div className='grid1'>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2023/03/cover-podcast-seminggu-live-eps-100-300x300.png" alt="" /></div>
                <div><p>Rp 150.000,00</p></div>
                <div><p className='truncate'>Podcast Seminggu Live (Spesial Episode 100)</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2022/03/Cover-PS-live-bandung-300x300.png" alt="" /></div>
                <div><p>Rp 150.000,00</p></div>
                <div><p className='truncate'>Podcast Seminggu Live (Bandung)</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2021/02/COVER-PRODUK-PS-300x300.jpg" alt="" /></div>
                <div><p>Rp 150.000,00</p></div>
                <div><p className='truncate'>Podcast Seminggu Live (Jakarta)</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2023/05/Pahlawan-Perlu-Tanda-Jasa-Cover-300x300.jpg" alt="" /></div>
                <div><p>Rp 200.000,00</p></div>
                <div><p className='truncate'>Pahlawan Perlu Tanda Jasa</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
            <div className='grid2'><img src="https://comika.id/wp-content/uploads/2023/07/stand-up-fest-the-series-cover-300x300.png" alt="" /></div>
                <div><p>Rp 100.000,00</p></div>
                <div><p>Stand-Fest"The Series</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
            <div className='grid3'>
                <div className='grid2'><img src="https://comika.id/wp-content/uploads/2022/08/COVER-patraiarki-300x300.png" alt="" /></div>
                <div><p>Rp 50.000,00</p></div>
                <div><p>Patraiarki</p></div>
                <div className='bg-blue-500 py-2 rounded-lg text-white text-center cursor-pointer'>Buy</div>
            </div>
        </div>
        <div className='konten1'>
            <div><p>Popular Tags</p></div>
        </div>
        <div className='grid4'>
            <div className='grid5'>
                <center>
                <div className='grid7'><center><p>Comika Talent Management</p></center></div>
                </center>
            </div>
            <div className='grid5'>
                <center>
                <div className='grid6'><center><p>Bundling</p></center></div>
                </center>
            </div>
            <div className='grid5'>
                <center>
                <div className='grid7'><center><p>Comikaid Original</p></center></div>
                </center>
            </div>
            <div className='grid5'>
                <center>
                <div className='grid6'><center><p>Keadaan Kahar</p></center></div>
                </center>
            </div>
            <div className='grid5'>
                <center>
                <div className='grid6'><center><p>Komoidoumenoi</p></center></div>
                </center>
            </div>
            <div className='grid5'>
                <center>
                <div className='grid6'><center><p>Juli 2023</p></center></div>
                </center>
            </div>
            <div className='grid5'>
                <center>
                <div className='grid6'><center><p>Nonton Offline</p></center></div>
                </center>
            </div>
            <div className='grid5'>
                <center>
                <div className='grid6'><center><p>AGUSTUS 2023</p></center></div>
                </center>
            </div>
            <div className='konten2'>
                <div><img src="https://comika.id/wp-content/uploads/2021/02/Logo_Comika.png" alt="" /></div>
                <div><p>All about comedy content generator. Platform digital serta event para Komika dan Komedian Indonesia</p></div>
                <div><p>LAYANAN</p></div>
                <div><p>Comika</p></div>
                <div><p>Bundling</p></div>
                <div><p>Nonton Offline</p></div>
                <div><p>Membership</p></div>
                <div><p>BANTUAN</p></div>
                <div><p>Cara Pemebelian</p></div>
                <div><p>Tata Cara Pembayaran</p></div>
                <div><p>ANDA BARU DI COMIKA.ID ?</p></div>
                <div><p>All about comedy content generator. Platform digital serta event para Komika dan Komedian Indonesia.</p></div>
                <div><p>Temukan Kami</p></div>
                <div></div>
                <div><p>Syarat & Ketentuan © 2020 Comika.id</p></div>
            </div>
        </div>




        </>
    );

};

export default Dashboard;