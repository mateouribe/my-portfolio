import { cn } from "../../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useState, useRef, PropsWithChildren } from "react";

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  children: React.ReactNode;
}

const dockVariants = cva(
  "w-max mt-8 h-[80] lg:h-[100px] p-3 flex items-end gap-3 rounded-2xl border dark:border-[#707070]"
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ className, children, magnification, distance, ...props }, ref) => {
    const mouseX = useMotionValue(Infinity);
    const [dynamicMagnification, setDynamicMagnification] = useState(120);
    const [dynamicDistance, setDynamicDistance] = useState(200);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 1180) {
          setDynamicMagnification(70); // 40px smaller than the original 120
          setDynamicDistance(160); // 40px smaller than the original 200
        } else {
          setDynamicMagnification(110);
          setDynamicDistance(200);
        }
      };

      window.addEventListener("resize", handleResize);
      handleResize(); // Set initial values

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const renderChildren = () => {
      return React.Children.map(children, (child: any) => {
        return React.cloneElement(child, {
          mouseX: mouseX,
          magnification: magnification ?? dynamicMagnification,
          distance: distance ?? dynamicDistance,
        });
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={`${cn(dockVariants({ className }), className)} bg-white/10`}
        style={{
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          // boxShadow: " 7px 7px 10px #dedede, -7px -7px 10px #e2e2e2",
          backdropFilter: "blur(13.5px)",
        }}
      >
        {renderChildren()}
      </motion.div>
    );
  }
);

Dock.displayName = "Dock";

export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: any;
  className?: string;
  children?: React.ReactNode;
  props?: PropsWithChildren;
  href?: string;
  ariaLabel: string;
}

const DockIcon = ({
  magnification = 120,
  distance = 200,
  mouseX,
  className,
  children,
  href,
  ariaLabel,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1180) {
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial values

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [isDesktop ? 70 : 50, magnification, isDesktop ? 70 : 50]
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <a
      href={href}
      target="_blank"
      className="cursor-alias"
      aria-label={ariaLabel}
    >
      <motion.div
        ref={ref}
        style={{
          width,
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(13.5px)",
        }}
        className={cn(
          "flex aspect-square items-center justify-center rounded-full bg-black/10 relative z-[3]",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    </a>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
