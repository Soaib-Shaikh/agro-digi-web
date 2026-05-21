import toast from "react-hot-toast";

export const successToast = (msg) => {
  toast.success(msg, {
    style: {
      background: "#16a34a",
      color: "#fff",
    },
  });
};

export const errorToast = (msg) => {
  toast.error(msg, {
    style: {
      background: "#dc2626",
      color: "#fff",
    },
  });
};