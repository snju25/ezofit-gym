import { motion } from "framer-motion";
import { BenefitType, SelectedPage } from "../../shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

import HText from "../../shared/HText";
import Benefit from "./Benefit";
import ActionButton from "../../shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the art facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nisi dicta harum quasi sunt. Et sunt nesciunt ex, consequuntur fuga placeat pariatur est ipsam, blanditiis numquam repellendus facilis dolorum unde.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "State of the art facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nisi dicta harum quasi sunt. Et sunt nesciunt ex, consequuntur fuga placeat pariatur est ipsam, blanditiis numquam repellendus facilis dolorum unde.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "State of the art facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nisi dicta harum quasi sunt. Et sunt nesciunt ex, consequuntur fuga placeat pariatur est ipsam, blanditiis numquam repellendus facilis dolorum unde.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>More than just Gym</HText>
          <p>
            We provide world class fitness equipment, trainers and classes get
            you tor ultimate fitness goal with ease. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Doloribus, rem!
          </p>
        </motion.div>
        {/* Benefits */}
        <motion.div
          className="md:flex items-center justify-between gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* Graphics and description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* graphics */}
          <img className="mx-auto" src={BenefitsPageGraphic} />
          {/* description */}
          <div>
            {/* title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Millions of happy members getting{" "}
                    <span className="text-primary-500 uppercase">fit</span>.{" "}
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* Descript */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum mollitia doloribus laudantium possimus sunt magnam
                porro? Similique maxime aliquam repellat ullam, soluta atque
                debitis! Quisquam corrupti debitis vero ullam temporibus!
              </p>

              <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora quidem, odio sint nihil voluptatibus voluptates
                doloremque exercitationem iusto magni necessitatibus esse,
                accusamus adipisci et est dolorem deleniti dolorum, harum vitae!
              </p>
            </motion.div>

            {/* Button */}
            <div className="realtive mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Benefits;
