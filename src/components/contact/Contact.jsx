import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { send } from "emailjs-com";
import { SiIcq } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useInView } from "react-intersection-observer";
const Result = () => {
  return <p>Your message has been sent successfully</p>;
};
function Contact() {
  const [result, showResult] = React.useState(false);
  // const { ref: myRef, inView: myElvisi } = useInView();
  const [info, setInfo] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  function handleChange(event) {
    setInfo((prevInfo) => {
      //destructuring event.target
      const { name, value } = event.target;
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  }

  // const form = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    send("service_zom35k9", "template_7eevzku", info, "3XNfer5AbAzUrbd2B")
      // e.target.reset();
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setInfo({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    showResult(true);
    setTimeout(() => {
      showResult(false);
    }, 3000);
  }
  React.useEffect(() => {
    AOS.init({});
    AOS.refresh();
  }, []);

  return (
    <section id="contact">
      <div
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <h5
          data-aos="fade-left"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          I’m currently open to new opportunities, my inbox is always open.
        </h5>

        <h2
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Get In Touch
        </h2>
        {/* <div className="if">
        <div class="contact__map">
          <iframe
            title="My Location"
            width="820"
            height="217"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=municipal%20abuja&t=k&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            // scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div> */}
        <div className="container contact__container">
          <div
            className="contact__options"
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            {/* <article className="contact__option">
            <MdOutlineEmail className="contact_icon" />
            <h4>Email</h4>
            <h5>adakolejeffrey@gmail.com</h5>
            <a
              href="mailto:adakolejeffrey@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Say Hello
            </a>
          </article> */}
            <article
              className="contact__option"
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <MdOutlineEmail className="contact_icon" />

              <h5>odehkole@gmail.com</h5>
              <a
                href="mailto:adakolejeffrey@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Say Hello
              </a>
            </article>
            <article
              className="contact__option"
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <BsWhatsapp className="contact_icon" />

              <h5>+234 706 616 3175</h5>
              <a
                href="https://api.whatsapp.com/send?phone=+347066163175"
                target="_blank"
                rel="noreferrer"
              >
                Say Hello On WhatsApp
              </a>
            </article>
            <article
              className="contact__option"
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <SiIcq className="contact_icon" />

              <h5>+234 706 616 3175</h5>
              <a
                href="https://api.icq.com/send?phone=+347066163175"
                target="_blank"
                rel="noreferrer"
              >
                Say Hello On ICQ
              </a>
            </article>
          </div>
          {/* End of Contact  function  */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={info.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              id=""
              value={info.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={info.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              id=""
              cols="10"
              rows="10"
              value={info.message}
              placeholder="Your message"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            <div>{result ? <Result /> : null}</div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
