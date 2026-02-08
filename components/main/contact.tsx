import React from "react";

type ContactProps = {
  email?: string;
  subject?: string;
  body?: string;
  className?: string;
  buttonLabel?: string;
};

const ContactSection: React.FC<ContactProps> = ({
  email = "francsteves21@gmail.com",
  subject = "Contact depuis le site",
  body = "Bonjour,\n\nJe vous contacte au sujet de...",
  className = "my-10",
  buttonLabel = "Envoyer un e‑mail",
}) => {
  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <section
      aria-label="Contact"
      className="
    relative
    mx-auto
    w-full
    md:px-[120px] px-4 md:py-20
    py-10
    text-center
    md:my-[40px]
  "
    >
      {/* background grid */}
      <div
        className="
      pointer-events-none
      absolute inset-0
      
      bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
      bg-[size:48px_48px]
      opacity-30
    "
      />

      {/* subtle glow */}
      <div
        className="
      pointer-events-none
      absolute left-1/2 top-0
      h-[300px] w-[600px]
      -translate-x-1/2
      rounded-full
      bg-indigo-500/10
      blur-3xl
    "
      />

      <div className="relative z-10">


        <h3
          className="
          mt-5
          font-heading
          font-bold
          tracking-tight
          
          text-white
          md:text-5xl
          text-3xl
          leading-normal
        "
        >
          <span className="developer leading-loose">
            Disponible pour une collaboration
          </span>{" "}
        </h3>

        <p
          className="
       space-y-4 text-base leading-[1.85rem] text-zinc-600 dark:text-zinc-400 mt-4 md:mt-0
      "
        >
          Je travaille sur des projets à forte exigence technique :
          <span className="text-slate-100 font-medium">
            {" "}API robustes, fintech et infrastructures scalables
          </span>.
          J’interviens aussi bien en renfort qu’en prise en charge complète
          d’un périmètre technique.
        </p>

        <a
          href={mailto}
          aria-label={`Ouvrir le client mail pour envoyer un message à ${email}`}
          className="
        mt-12
        inline-flex
        items-center
        gap-3
        rounded-2xl
        border border-white/20
        bg-white/5
        px-10 py-5
        text-sm
        font-semibold
        uppercase
        tracking-widest
        text-white
        backdrop-blur
        transition
        hover:bg-white/10
        hover:border-white/40
        hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
        font-kugile
      "
        >
          Me contacter
          <span className="text-indigo-400">→</span>
        </a>
      </div>
    </section>

  );
};

export default ContactSection;