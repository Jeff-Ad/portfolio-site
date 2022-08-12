import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { SiIcq } from "react-icons/si";

const data = [
  {
    id: 1,
    Icon: MdOutlineEmail,
    title: "odehkole@gmail.com",
    href: "mailto:adakolejeffrey@gmail.com",
    anchor: "Say Hello",
  },
  {
    id: 2,
    Icon: BsWhatsapp,
    title: "+234 706 616 3175",
    href: "https://api.whatsapp.com/send?phone=+347066163175",
    anchor: "Say Hello On WhatsApp",
  },
  {
    id: 3,
    Icon: SiIcq,
    title: "+234 706 616 3175",
    href: "https://api.icq.com/send?phone=+347066163175 ",
    anchor: "Say Hello On ICQ",
  },
];
export default data;
