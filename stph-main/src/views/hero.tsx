export default function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center p-6 overflow-hidden">
      {/* Light Streak Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 animate-lightStreak"></div>
      </div>

      <div className="w-full max-w-[1440px] flex flex-col gap-10 md:flex-row md:max-w-[1040px] relative z-10">
        {/* Left Section (Logo + Text Content) */}
        <div className="flex flex-col gap-6 text-white md:w-1/2">
          {/* Base Philippines Branding */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <img
                src="base/Base_Symbol_Blue.png"
                alt="Base Philippines Logo"
                className="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
              />
              <p
                className="text-2xl md:text-3xl font-semibold tracking-widest uppercase 
                bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
              >
                Base Philippines
              </p>
            </div>
            <div className="w-32 md:w-40 h-[2px] bg-cyan-400/50 rounded-full animate-pulse"></div>
          </div>

          {/* Heading & Description */}
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Join the <br /> Web3 Revolution
          </h1>
          <p className="text-sm md:text-lg text-white/80">
            Base Philippines accelerates the most promising projects in the
            Solana ecosystem. As the official Solana Superteam in the
            Philippines, we empower innovation and growth in Web3.
          </p>

          {/* Join Button */}
          <button className="w-fit px-6 py-3 border border-sky-400 rounded-full text-sky-400 flex items-center gap-2 hover:bg-sky-400 hover:text-black transition-all hover:rounded-full">
            <span className="text-lg">Join Us Now</span>
          </button>
        </div>

        {/* Right Section (CTA Buttons) */}
        <div className="flex flex-col gap-4 md:w-1/2">
          {ctaItems.map(({ icon, title, description }) => (
            <CallToAction
              key={title}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ctaItems = [
  {
    icon: "/hero/Solana_White.png",
    title: "Learn",
    description: "Master Solana and Web3 Technologies.",
  },
  {
    icon: "/hero/save-money (2).png",
    title: "Earn",
    description: "Get rewarded for contributing.",
  },
  {
    icon: "/hero/deep-learning (1).png",
    title: "Build",
    description: "Create cutting-edge blockchain apps.",
  },
  {
    icon: "/hero/relax work (2).png",
    title: "Chill",
    description: "Connect with a community of innovators.",
  },
];

function CallToAction({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="relative flex items-center gap-4 p-4 border border-white/30 rounded-2xl w-full 
      backdrop-blur-md bg-white/10 transition-all duration-300 
      hover:border-white hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] 
      before:absolute before:top-0 before:left-0 before:w-full before:h-full 
      before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent 
      before:bg-[length:200%_100%] before:animate-shimmer before:rounded-2xl"
    >
      <img src={icon} alt={title} className="w-12 h-12 object-contain" />
      <div>
        <p className="text-lg font-semibold text-white">{title}</p>
        <p className="text-sm text-white/80">{description}</p>
      </div>
    </div>
  );
}
