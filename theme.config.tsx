import Image from "next/image";
const themeConfig = {
  logo: (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
      }}
    >
      <Image
        src={"/assets/icons/logo.svg"}
        height={50}
        width={50}
        style={{ display: "flex" }}
        alt="Logo"
      />
      <p style={{ fontWeight: "bold", color: "white", fontSize: "24px" }}>
        Auth Rush
      </p>
    </span>
  ),
  project: {
    link: "https://github.com/Mohammad-Shahid-07/auth-fusion",
  },
  chat: {
    link: "https://twitter.com/mohammad_s36921",
    icon: (
      <Image src={"/assets/icons/x.svg"} alt="X logo" width={20} height={50} />
    ),
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="/" target="_blank">
          Auth Rush
        </a>
        .
      </span>
    ),
  },

  // ... other theme options
};

export default themeConfig;
