import React from "react";
import { useNavigate } from "react-router-dom";


function ClientDashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <div class="navBar">
        <ul className="header_ul">
          <li>
            <div className="dropdown">
              <span className="header_li">
                <p>Home</p>{" "}
              </span>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <span className="header_li">
                <p>About</p>{" "}
              </span>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <span className="header_li">
                <p>Achievement</p>{" "}
              </span>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <span className="header_li">
                <p>Contact Us</p>{" "}
              </span>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <span className="header_li">
                <p>Profile</p>{" "}
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div className="body">
        <div className="content">
          <div className="dummy_heading">
            <h1>You can submit your new project! </h1>
            <button className="nav_btn" onClick={() => navigate("/addproject")}>
              Add a new project
            </button>
          </div>
          <p className="dummy">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo maxime
            quod recusandae laboriosam praesentium nesciunt voluptatibus, nobis
            alias beatae exercitationem! Ab placeat corporis nam consequuntur
            voluptas reiciendis provident tempore enim?Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Mollitia similique delectus vitae
            officiis ducimus explicabo quisquam eum expedita. Accusantium magnam
            asperiores maxime labore ratione iste minima tempora nam, ipsam
            ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam quasi amet itaque assumenda facilis minima ullam rerum,
            delectus quas, nesciunt quae veniam beatae modi reprehenderit
            ducimus facere dolorem culpa natus.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quo maxime quod recusandae laboriosam
            praesentium nesciunt voluptatibus, nobis alias beatae
            exercitationem! Ab placeat corporis nam consequuntur voluptas
            reiciendis provident tempore enim?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Mollitia similique delectus vitae
            officiis ducimus explicabo quisquam eum expedita. Accusantium magnam
            asperiores maxime labore ratione iste minima tempora nam, ipsam
            ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam quasi amet itaque assumenda facilis minima ullam rerum,
            delectus quas, nesciunt quae veniam beatae modi reprehenderit
            ducimus facere dolorem culpa natus.
          </p>
        </div>
        <div className="content">
          <div className="dummy_heading">
            <h1>You can review your project! </h1>
            <button className="nav_btn" onClick={() => navigate("/")}>
              Review your projects
            </button>
          </div>
          <p className="dummy">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo maxime
            quod recusandae laboriosam praesentium nesciunt voluptatibus, nobis
            alias beatae exercitationem! Ab placeat corporis nam consequuntur
            voluptas reiciendis provident tempore enim?Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Mollitia similique delectus vitae
            officiis ducimus explicabo quisquam eum expedita. Accusantium magnam
            asperiores maxime labore ratione iste minima tempora nam, ipsam
            ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam quasi amet itaque assumenda facilis minima ullam rerum,
            delectus quas, nesciunt quae veniam beatae modi reprehenderit
            ducimus facere dolorem culpa natus.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quo maxime quod recusandae laboriosam
            praesentium nesciunt voluptatibus, nobis alias beatae
            exercitationem! Ab placeat corporis nam consequuntur voluptas
            reiciendis provident tempore enim?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Mollitia similique delectus vitae
            officiis ducimus explicabo quisquam eum expedita. Accusantium magnam
            asperiores maxime labore ratione iste minima tempora nam, ipsam
            ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam quasi amet itaque assumenda facilis minima ullam rerum,
            delectus quas, nesciunt quae veniam beatae modi reprehenderit
            ducimus facere dolorem culpa natus.
          </p>
        </div>
        <div className="content">
          <div className="dummy_heading">
            <h1>You can view your previous projects! </h1>
            <button className="nav_btn" onClick={() => navigate("/history")}>
              Projects history
            </button>
          </div>
          <p className="dummy">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo maxime
            quod recusandae laboriosam praesentium nesciunt voluptatibus, nobis
            alias beatae exercitationem! Ab placeat corporis nam consequuntur
            voluptas reiciendis provident tempore enim?Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Mollitia similique delectus vitae
            officiis ducimus explicabo quisquam eum expedita. Accusantium magnam
            asperiores maxime labore ratione iste minima tempora nam, ipsam
            ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam quasi amet itaque assumenda facilis minima ullam rerum,
            delectus quas, nesciunt quae veniam beatae modi reprehenderit
            ducimus facere dolorem culpa natus.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quo maxime quod recusandae laboriosam
            praesentium nesciunt voluptatibus, nobis alias beatae
            exercitationem! Ab placeat corporis nam consequuntur voluptas
            reiciendis provident tempore enim?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Mollitia similique delectus vitae
            officiis ducimus explicabo quisquam eum expedita. Accusantium magnam
            asperiores maxime labore ratione iste minima tempora nam, ipsam
            ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam quasi amet itaque assumenda facilis minima ullam rerum,
            delectus quas, nesciunt quae veniam beatae modi reprehenderit
            ducimus facere dolorem culpa natus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClientDashboard;