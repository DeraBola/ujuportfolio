export const fadeUp1 = {
  hide: {
    y: "20%",
    opacity: 0,
  },
  show: {
    y: "0%",
    opacity: 1,
    transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
  },
};

export const fadeIn = {
  hide: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
  },
};

export const fadeUp2 = {
  hide: {
    y: "20%",
    opacity: 0,
  },
  show: {
    y: "0%",
    opacity: 1,
    transition: { delay: 1.5, duration: 1, type: "spring", stiffness: 120 },
  },
};

export const fadeUp3 = {
  hide: {
    y: "20%",
    opacity: 0,
  },
  show: {
    y: "0%",
    opacity: 1,
    transition: { delay: 2, duration: 1, type: "spring", stiffness: 120 },
  },
};

export const fadeUp4 = {
  hide: {
    y: "20%",
    opacity: 0,
  },
  show: {
    y: "0%",
    opacity: 1,
    transition: { delay: 2.5, duration: 1, type: "spring", stiffness: 120 },
  },
};

export const fade = {
  hide: {
    y: "20%",
    opacity: 0,
  },
  show: {
    y: "0%",
    opacity: 1,
    transition: { delay: .5, duration: 1, type: "spring", stiffness: 120 },
  },
};

export const slideIn = {
  hidden: {
    x: "120%",
    opacity: 0,
  },
  visible: {
    // scale: 1,
    opacity: 1,
    x: "0%",
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export const appear = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: .5,
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export const appear2 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export const appear3 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export const appear4 = {
  hidden: { opacity: 0 },
  visible: {
    delay: 2,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export const hiddenMask = "repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)";

export const visibleMask = "repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)";

export const hiddenMask_ = "repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)";

export const visibleMask_ = "repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)";
