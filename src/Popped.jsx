import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTimes } from "react-icons/fa";

const Popped = (props) => {
  const [msg, setMsg] = React.useState(
    "😊 Hi there, welcome to my world, do have a nice time breathing in my weird world "
  );
  React.useEffect(() => {
    AOS.init({});
    AOS.refresh();
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      setMsg(
        "Heyyyy  I trust You're having a good time breathing in my weird world  ...just checking out. 'Ohki dohki' 'bye👋🏽' "
      );
    }, 55000);
  }, []);
  return props.trigger ? (
    <div className="popup">
      <div
        className="popup-inner"
        data-aos="slide-left"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <p>{msg}</p>
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          <FaTimes />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    " "
  );
};

export default Popped;
