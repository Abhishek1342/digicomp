import React from "react";
import img1 from "./images/appointment.jpg";
import img2 from "./images/date.jpg";
import img3 from "./images/life.png";
import img4 from "./images/tick.jpg";
import Heading from "../heading/heading";

const AboutComponent = () => {
  return (
    <div className="about-comp-main">
      <div className="child-with-head">
        <Heading head="About Us" />
      </div>
      <div className="child-with-img">
        <img src={img1} alt="" className="grand-image" id="grand-1" />
        <img src={img2} alt="" className="grand-image" id="grand-2" />
        <img src={img3} alt="" className="grand-image" id="grand-3" />
        <img src={img4} alt="" className="grand-image" id="grand-4" />
      </div>
      <div className="child-with-content">
        <div className="grand-about-head">
          <Heading head="About Us" />
        </div>
        <div className="grand-about-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum beatae
          quis illum cumque obcaecati veritatis eaque nulla? Ex vel sunt
          architecto omnis? Minima adipisci omnis nulla illum similique. Quidem
          facere adipisci, asperiores quaerat nostrum sequi iure provident
          voluptate quae dolores tenetur nemo officia reprehenderit quam.
          Tempora, eum dolorem nesciunt in qui saepe fugit facere itaque ducimus
          ut, dolores nostrum inventore nulla eveniet iste, cumque velit
          reiciendis veniam adipisci quaerat! Autem dolorem expedita, ex tempora
          cupiditate non doloribus quos perferendis est itaque facere delectus
          sapiente voluptate vel minus facilis repellat consequatur doloremque
          blanditiis placeat eligendi. Molestiae ut suscipit necessitatibus,
          provident minima mollitia ex aperiam iure ab ipsa non tempore ipsum,
          tempora adipisci! Aperiam, odit impedit ea optio quidem fuga
          architecto officia.
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
