import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import Navber from '../component/navbar'
import Footer from '../../src/Footer';
import Button from '@material-ui/core/Button';
import "./home.css";
import photo1 from "./Img/photo1.jpg";
import photo2 from "./Img/photo2.jpg";
import photo6 from "./Img/photo6.jpg";
import photo4 from "./Img/photo4.jpg";
import photo5 from "./Img/photo5.jpg";
import GavelOutlinedIcon from '@material-ui/icons/GavelOutlined';


 function Home() {
    const [cattle , setCattle] = useState([]);
    useEffect(() => {
        Axios
        .get('/cattles')
        .then(res=>{
            setCattle(res.data);
        })
        .catch(err => console.log(err));
    }, []);
  
    return(
               
        <div className="container-fluid">
        <div className="row">
            <Navber />
        </div>
        <div className='row  'style={{backgroundColor:"White",marginTop:"20px", marginLeft:"10%",marginRight:"10%"}}> 
          <div className="col-6"> <div className="row container-fluid r2-c4 ">    รายการประมูลโคมีชีวิต
          <div className="dropdown pad">
          <div className="r2-c5">เลือกหมวดหมู่</div>
          <div className="dropdown-content">
            <a href="/listproduct/auction">รายการประมูลโคมีชีวิต</a>
            <a href="/listproduct/salecattle">รายการขายโคมีชีวิต</a>
            <a href="/listproduct/saleproduct">รายการขายผลิตภัณฑ์จากโค</a>
            <a href="/listproduct/accessories">รายการขายสินค้าเบ็ดเตล็ด</a>
          </div>
        </div></div> </div>
            <div className="col-6 text-right r2-c4"> <a href="/offertable/offerbuy"style={{ marginLeft:"0%"}}>รายการเสนอซื้อ</a> </div>
        </div>

        <div className='row  'style={{backgroundColor:"#e6e6e6",height: "400px",marginLeft:"10%",marginRight:"10%"}}>
            <div className="col-md-2" ><div className=" "style={{backgroundColor:"#e6e6e6",height:"200px",marginTop:"10px"}}>
              <div><img src={photo1} alt="photo1" style={{height:"120px",width:"200px",marginLeft:"40px"}}></img></div>
              <div><img src={photo1} alt="photo1"style={{height:"120px",width:"200px",marginTop:"10px",marginLeft:"40px"}}></img></div>
             <div> <img src={photo1} alt="photo1"style={{height:"120px",width:"200px",marginTop:"10px",marginLeft:"40px"}}></img></div> </div></div>  
               <div className="col-md-6"><div className="col-md "><img src={photo1} alt="photo1" className="img1-box box" ></img> </div></div>    
               
          
          <div className="col-md-4"  style={{marginTop:"10px"}}><h3 class="card-title"style={{color:"#1a0d00",fontFamily:"DB-Adman-x_3"}}>ตลาดซื้อ ขายและประมูลโคออนไลน์ </h3><h4 class="card-title" style={{color:"#e67300",fontFamily:"DB-Adman-x_3"}}>Cattle Market and Auction Online</h4><hr></hr><h5><p class="card-text" style={{marginTop:"20px"}}>เจ้าแดงชาโรเลส์</p></h5><h5><p class="card-text" style={{color:"red"}}>฿20,500,00 บาท</p></h5><p class="card-text">เหลือเวลาอีก: 12:20:56 นาที</p><Button variant="contained"
                                    color="primary"
                                    size="Large"
                                style={{outline:"none"}}
                                    startIcon={<GavelOutlinedIcon/>}
                                >
                                    ประมูล
                                </Button>
          </div>
          </div>

          <div className='row ' style={{backgroundColor:"White", marginLeft:"10%",marginRight:"10%"}}>
          <div className=" r2-c4"> รายการเสนอซื้อ</div>
          </div> 

          <div className='row ' style={{backgroundColor:"#e6e6e6", marginLeft:"10%",marginRight:"10%"}}>
          <div className="col-md-3"><div className="col-md box-bg2"><img src={photo2} alt="photo2" className="img4-box" ></img><h5 class="card-title" style={{marginTop:"5px"}}>เจ้าแดง :฿20,500.00 บาท</h5><p class="card-text">เหลือเวลาอีก: 12:20:56 นาที</p> 
                          
                              <Button variant="contained"
                                    color="primary"
                                    size="Large"
                                style={{outline:"none"}}
                                    startIcon={<GavelOutlinedIcon/>}
                                >
                                    ประมูล
                                </Button>
                                   </div></div>    
          <div className="col-md-3"><div className="col-md box-bg2"><img src={photo6} alt="photo6" className="img5-box" ></img><h5 class="card-title"style={{marginTop:"5px"}}>พายุ : ฿20,500.00 บาท</h5><p class="card-text">เหลือเวลาอีก: 12:20:56 นาที</p> <Button variant="contained"
                                    color="primary"
                                    size="Large"
                                style={{outline:"none"}}
                                    startIcon={<GavelOutlinedIcon/>}
                                >
                                    ประมูล
                                </Button></div></div>
          <div className="col-md-3"><div className="col-md box-bg2"><img src={photo4} alt="photo4" className="img6-box" ></img><h5 class="card-title"style={{marginTop:"5px"}}>มะพร้าว : ฿20,500.00 บาท</h5> <p class="card-text">เหลือเวลาอีก: 12:20:56 นาที</p><Button variant="contained"
                                    color="primary"
                                    size="Large"
                                style={{outline:"none"}}
                                    startIcon={<GavelOutlinedIcon/>}
                                >
                                    ประมูล
                                </Button></div></div>    
          <div className="col-md-3"><div className="col-md box-bg2"><img src={photo5} alt="photo5" className="img7-box" ></img><h5 class="card-title"style={{marginTop:"5px"}}>ขอน : ฿20,500.00 บาท</h5><p class="card-text">เหลือเวลาอีก: 12:20:56 นาที</p><Button variant="contained"
                                    color="primary"
                                    size="Large"
                                style={{outline:"none"}}
                                    startIcon={<GavelOutlinedIcon/>}
                                >
                                    ประมูล
                                </Button></div></div>
          </div> 
         
        
          {cattle.map((post) => (
          <h2>
            key={post.name}
            displayName={post.cattleid}
           username={post.cattleid}
           verified={post.verified}
           text={post.price}
           avatar={post.type}
           image={post.gender}</h2> 
        
           
        ))}
     <Footer/>
        </div>
    );
}
export default Home ;