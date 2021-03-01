import React from "react";
import "./user-details.scss";
const UserDetails = () => {
  return (
    <div className="check">
      <div className="user-profile-main">
        <div className="user-profile-child-photo">
          <div className="change-icon-user-photo">
            <i class="fas fa-camera"></i>
            <i class="far fa-images"></i>
          </div>
          <p>Change Photo</p>
        </div>

        <div className="user-profile-child-details">
          <p className="user-profile-child-name">Pratik</p>
          <p className="user-profile-child-address">Address</p>
          <p className="user-profile-child-phone">+00 000 000 0000</p>
          <p className="user-profile-child-email">abc@gmail.com</p>
        </div>
        <button className="user-profile-child-edit">
          <i class="far fa-edit"></i>&nbsp;Edit Profie
        </button>
      </div>
      <p style={{ marginLeft: "400px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        eligendi debitis autem excepturi beatae omnis ducimus suscipit
        voluptatibus necessitatibus explicabo quas deserunt, ipsum saepe
        voluptate dolores fuga temporibus voluptates iure harum mollitia
        corrupti! Fuga officiis a dignissimos aperiam minus, numquam commodi
        reiciendis ea magni. Expedita nemo suscipit, iusto reprehenderit a saepe
        asperiores in molestias totam voluptatem quis? Laudantium voluptatem
        quae suscipit facilis porro eaque repudiandae amet recusandae. Eligendi
        iste, commodi, perferendis nemo fugiat nostrum quae omnis expedita, eius
        placeat, amet quod aperiam dolores alias explicabo voluptate quia
        praesentium accusantium incidunt voluptatem asperiores quaerat
        aspernatur. Ad cumque atque at impedit iste eius iusto quod natus esse
        placeat consequatur consectetur vel minima dolorum et sed doloribus,
        accusantium maiores eligendi cupiditate voluptates quo exercitationem
        aliquid nemo! In officia incidunt neque eos nihil voluptas beatae
        expedita vitae labore est accusamus pariatur sit minus doloremque nobis,
        qui ad aspernatur cumque amet quam fugiat aut sapiente. Magnam
        reiciendis amet voluptatem quos eaque recusandae sit ipsam delectus
        accusamus eligendi.
      </p>
    </div>
  );
};

export default UserDetails;
