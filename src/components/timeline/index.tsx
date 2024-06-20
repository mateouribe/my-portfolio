import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { colors } from "../../utils/constants";
import Item from "./item";
import TimelineSection from "./timelineSection";
import TimelineSectionMobile from "./timelineSection/timelineSectionMobile";
import onlineLearing from "../../assets/images/online-learning.png";
import systemTechnician from "../../assets/images/system-technician.png";
import computerProgramming from "../../assets/images/computer-programming.png";
import pagoTiendaTimeline from "../../assets/images/pago-tienda-timeline.png";
import amazingPetGroomingTimeline from "../../assets/images/amazing-pet-grooming-timeline.png";
import colegioNormalTimeline from "../../assets/images/colegio-normal-timeline.png";
import softwareTestingTimeline from "../../assets/images/software-testing-timeline.png";
import ItemMobile from "./item/itemMobile";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const container = useRef<HTMLDivElement>(null);
  const containerMobile = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Desktop animation
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1180px)", () => {
      const ctx = gsap.context(() => {
        const containerWidth = container.current
          ? container.current.scrollWidth
          : 0;
        const windowWidth = window.innerWidth;

        const scrollTween = gsap.to(container.current, {
          translateX: -(containerWidth - windowWidth),
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: `+=${containerWidth - windowWidth}`,
            pin: true,
            scrub: true,
          },
        });

        const createScrollTriggerAnimation = (
          selector: string,
          animationType: "to" | "fromTo",
          animationConfig: gsap.TweenVars,
          fromVars?: gsap.TweenVars
        ) => {
          gsap.utils.toArray(selector).forEach((el) => {
            const element = el as HTMLElement;
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: element,
                start: "left 90%",
                containerAnimation: scrollTween,
                toggleActions: "play reverse play reverse",
              },
            });

            if (animationType === "to") {
              tl.to(element, animationConfig);
            } else if (animationType === "fromTo" && fromVars) {
              tl.fromTo(element, fromVars, animationConfig);
            }
          });
        };

        createScrollTriggerAnimation(".square-to-animate", "to", {
          scale: 1.3,
          opacity: 0,
          duration: 2,
          ease: "circ.out",
        });

        createScrollTriggerAnimation(
          ".timeline-item-square",
          "fromTo",
          {
            scale: 1,
            duration: 0.5,
            ease: "back.out(2)",
          },
          {
            scale: 0,
          }
        );
      }, [container.current, triggerRef.current]);

      return () => {
        ctx.revert();
        ScrollTrigger.refresh();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 1180px)", () => {
      const ctx = gsap.context(() => {
        //Title animation
        const timelineTitles = gsap.utils.toArray(".square-to-animate-mobile");

        timelineTitles.forEach((el) => {
          const element = el as HTMLElement;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: element,
              start: "top 50%",
              end: "bottom 50%",
              toggleActions: "play reverse play reverse",
            },
          });

          tl.to(element, {
            scale: 1.3,
            opacity: 0,
            duration: 2,
            ease: "circ.out",
          });
        });

        //Items animation
        const timelineItemSquare = gsap.utils.toArray(
          ".timeline-item-square-mobile"
        );

        timelineItemSquare.forEach((el) => {
          const element = el as HTMLElement;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: element,
              start: "top 75%",
              toggleActions: "play reverse play reverse",
            },
          });

          tl.fromTo(
            element,
            {
              scale: 0,
            },
            {
              scale: 1,
              duration: 0.5,
              ease: "back.out(2)",
            }
          );
        });
      }, [containerMobile.current]);

      return () => {
        ctx.revert();
        ScrollTrigger.refresh();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section ref={triggerRef} className="overflow-hidden">
      {/* Desktop */}
      <div
        className="w-auto h-view lg:flex flex-row hidden design-bg-trigger pl-[200px]"
        ref={container}
      >
        <TimelineSection
          color={colors.darkOrange}
          lightColor={colors.veryLightOrange}
          veryLightColor={colors.almostWhiteOrange}
          title="Experience"
          icon="experience"
        >
          <Item
            title="1. Discovering the World of Programming"
            description="My passion for programming began with online courses from Platzi, Coursera, Udemy, and YouTube, where I delved into HTML, CSS, and JavaScript, setting a strong foundation for my tech journey."
            className="self-end col-span-2 row-start-2 row-end-3"
            img={onlineLearing}
            color={colors.darkOrange}
          />
          <Item
            title="2. Computer System Technician - Bogotá, Colombia"
            description="At SENA in Bogotá, I earned a diploma in Computer System Technician, learning to maintain computer equipment, implement network structures, and use office automation tools, which enhanced my technical and collaborative skills."
            className="self-start col-span-1 row-start-1 row-end-2 ml-[500px]"
            color={colors.darkOrange}
            img={systemTechnician}
            isTop
          />
          <Item
            title="3. Computer Programming - Waterloo, Canada"
            description="Studying Computer Programming at Waterloo, I developed problem-solving skills using the latest software, mastered object-oriented design and agile methodologies, and completed a capstone project, providing me with comprehensive application development experience."
            className="self-end col-span-2 row-start-2 row-end-3"
            color={colors.darkOrange}
            img={computerProgramming}
          />
        </TimelineSection>

        <TimelineSection
          color={colors.darkBlue}
          lightColor={colors.veryLightBlue}
          veryLightColor={colors.almostWhiteBlue}
          title="Experience"
          icon="experience"
        >
          <Item
            title="E-commerce Pago Tienda - Argentina"
            description="I developed a responsive e-commerce web application for Pago Linea, using React JS, Redux, Figma, and Tailwind CSS. The project focused on secure payment integration and creating a user-friendly experience, ensuring scalability and optimal performance across various devices."
            className="self-end col-span-1 row-start-1 row-end-2"
            color={colors.darkBlue}
            img={pagoTiendaTimeline}
            isTop
            hasButton
          />
          <Item
            title="Software Testing Bureau - Bogotá, Colombia"
            description="I developed and customized WordPress websites for Software Testing Bureau, ensuring responsive design and optimal user experience. My role included regular updates, maintenance for security, and implementing SEO best practices to enhance visibility and discoverability."
            className="self-start col-span-1 row-start-1 row-end-2 ml-[500px]"
            color={colors.darkBlue}
            img={softwareTestingTimeline}
            isTop
            hasButton
          />
          <Item
            title="Amazing Pet Grooming - Cambridge, Ontario"
            description="I led the UI/UX redesign and development of Amazing Pet Grooming's website, using React JS, GSAP, Figma, and Tailwind CSS. The project modernized the site's look and improved user experience, ensuring responsive performance across devices."
            className="self-end col-span-2 row-start-2 row-end-3"
            img={amazingPetGroomingTimeline}
            color={colors.darkBlue}
            hasButton
          />
          <Item
            title="Colegio Normal Superior de Pitalito"
            description="I developed a mobile app for Colegio Normal Superior de Pitalito, using Figma for UI/UX design and React Native with Expo for development. Collaborated with school administration, employed Agile methodologies, and integrated Firebase for backend services."
            className="self-end col-span-2 row-start-2 row-end-3"
            img={colegioNormalTimeline}
            color={colors.darkBlue}
            hasButton
          />
        </TimelineSection>

        <TimelineSection
          color={colors.darkPurple}
          lightColor={colors.veryLightPurple}
          veryLightColor={colors.almostWhitePurple}
          className="pr-[200px]"
          title="School Projects"
          icon="projects"
          isLastSection
        >
          <Item
            title="4. Computer System Technician Diploma"
            description="My passion for coding began early, and to nurture this interest, I dove into various online courses on platforms like Platzi, Udemy, and Coursera. These courses provided me with a strong foundation in front-end development, covering essential skills and modern technologies."
            className="self-end col-span-2 row-start-2 row-end-3"
            color={colors.darkPurple}
          />
          <Item
            title="5. Online Learning Platforms"
            description="My passion for coding began early, and to nurture this interest, I dove into various online courses on platforms like Platzi, Udemy, and Coursera. These courses provided me with a strong foundation in front-end development, covering essential skills and modern technologies."
            className="self-start col-span-1 row-start-1 row-end-2 ml-[500px]"
            color={colors.darkPurple}
            isTop
          />
          <Item
            title="6. Online Learning Platfosssms"
            description="My passion for coding began early, and to nurture this interest, I dove into various online courses on platforms like Platzi, Udemy, and Coursera. These courses provided me with a strong foundation in front-end development, covering essential skills and modern technologies."
            className="self-end col-span-2 row-start-2 row-end-3"
            color={colors.darkPurple}
          />
        </TimelineSection>

        <div className="w-[100vw] h-view bg-white"></div>
      </div>

      {/* Mobile */}
      <div
        className="flex flex-col lg:hidden py-desktop px-mobile md:px-tablet"
        ref={containerMobile}
      >
        <TimelineSectionMobile
          color={colors.darkOrange}
          lightColor={colors.veryLightOrange}
          veryLightColor={colors.almostWhiteOrange}
          title="Experience"
          icon="experience"
        >
          <ItemMobile
            title="1. Discovering the World of Programming"
            description="My passion for programming began with online courses from Platzi, Coursera, Udemy, and YouTube, where I delved into HTML, CSS, and JavaScript, setting a strong foundation for my tech journey."
            img={onlineLearing}
            color={colors.darkOrange}
          />
          <ItemMobile
            title="2. Computer System Technician - Bogotá, Colombia"
            description="At SENA in Bogotá, I earned a diploma in Computer System Technician, learning to maintain computer equipment, implement network structures, and use office automation tools, which enhanced my technical and collaborative skills."
            color={colors.darkOrange}
            img={systemTechnician}
          />
          <ItemMobile
            title="3. Computer Programming - Waterloo, Canada"
            description="Studying Computer Programming at Waterloo, I developed problem-solving skills using the latest software, mastered object-oriented design and agile methodologies, and completed a capstone project, providing me with comprehensive application development experience."
            color={colors.darkOrange}
            img={computerProgramming}
          />
        </TimelineSectionMobile>

        <TimelineSectionMobile
          color={colors.darkBlue}
          lightColor={colors.veryLightBlue}
          veryLightColor={colors.almostWhiteBlue}
          title="Experience"
          icon="experience"
        >
          <ItemMobile
            title="E-commerce Pago Tienda - Argentina"
            description="I developed a responsive e-commerce web application for Pago Linea, using React JS, Redux, Figma, and Tailwind CSS. The project focused on secure payment integration and creating a user-friendly experience, ensuring scalability and optimal performance across various devices."
            color={colors.darkBlue}
            img={pagoTiendaTimeline}
            hasButton
          />
          <ItemMobile
            title="Software Testing Bureau - Bogotá, Colombia"
            description="I developed and customized WordPress websites for Software Testing Bureau, ensuring responsive design and optimal user experience. My role included regular updates, maintenance for security, and implementing SEO best practices to enhance visibility and discoverability."
            color={colors.darkBlue}
            img={softwareTestingTimeline}
            hasButton
          />
          <ItemMobile
            title="Amazing Pet Grooming - Cambridge, Ontario"
            description="I led the UI/UX redesign and development of Amazing Pet Grooming's website, using React JS, GSAP, Figma, and Tailwind CSS. The project modernized the site's look and improved user experience, ensuring responsive performance across devices."
            img={amazingPetGroomingTimeline}
            color={colors.darkBlue}
            hasButton
          />
          <ItemMobile
            title="Colegio Normal Superior de Pitalito"
            description="I developed a mobile app for Colegio Normal Superior de Pitalito, using Figma for UI/UX design and React Native with Expo for development. Collaborated with school administration, employed Agile methodologies, and integrated Firebase for backend services."
            img={colegioNormalTimeline}
            color={colors.darkBlue}
            hasButton
          />
        </TimelineSectionMobile>

        <TimelineSectionMobile
          color={colors.darkPurple}
          lightColor={colors.veryLightPurple}
          veryLightColor={colors.almostWhitePurple}
          title="School Projects"
          icon="projects"
        >
          <ItemMobile
            title="4. Computer System Technician Diploma"
            description="My passion for coding began early, and to nurture this interest, I dove into various online courses on platforms like Platzi, Udemy, and Coursera. These courses provided me with a strong foundation in front-end development, covering essential skills and modern technologies."
            color={colors.darkPurple}
          />
          <ItemMobile
            title="5. Online Learning Platforms"
            description="My passion for coding began early, and to nurture this interest, I dove into various online courses on platforms like Platzi, Udemy, and Coursera. These courses provided me with a strong foundation in front-end development, covering essential skills and modern technologies."
            color={colors.darkPurple}
          />
          <ItemMobile
            title="6. Online Learning Platfosssms"
            description="My passion for coding began early, and to nurture this interest, I dove into various online courses on platforms like Platzi, Udemy, and Coursera. These courses provided me with a strong foundation in front-end development, covering essential skills and modern technologies."
            color={colors.darkPurple}
          />
        </TimelineSectionMobile>
      </div>
    </section>
  );
};

export default Timeline;
