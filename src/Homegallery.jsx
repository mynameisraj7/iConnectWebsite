import "./Homegallery.css";
import photo1 from "./assets/galleryphoto1.png";
import Masonry from './Masonry';

function Homegallery() {
const items = [
  { id: "1", img: photo1, url: "#", height: 380 },
  { id: "2", img: photo1, url: "#", height: 380 },
  { id: "3", img: photo1, url: "#", height: 280 },
  { id: "4", img: photo1, url: "#", height: 600 },
  { id: "5", img: photo1, url: "#", height: 350 },
  { id: "6", img: photo1, url: "#", height: 310 },
  { id: "7", img: photo1, url: "#", height: 550 },
  { id: "8", img: photo1, url: "#", height: 470 },
  { id: "9", img: photo1, url: "#", height: 320 },
  { id: "10", img: photo1, url: "#", height:570 },
  { id: "11", img: photo1, url: "#", height: 330 },
  { id: "12", img: photo1, url: "#", height: 290 },
  { id: "13", img: photo1, url: "#", height: 190 },
];


  return (
    <>
      <section className="whitegallery">
        <div className="galleryheading">GALLERY</div>
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </section>
    </>
  );
}

export default Homegallery;
