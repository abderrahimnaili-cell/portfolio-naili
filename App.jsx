export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-gray-400 uppercase tracking-[0.2em] text-xs">Contact</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">Let&apos;s work together</h2>
            <p className="text-gray-400 leading-relaxed">
              Have an idea, project, or collaboration in mind? Send a message and I&apos;ll get back to you.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <SocialBtn text="LinkedIn" />
              <SocialBtn text="GitHub" />
            </div>
          </div>

          <form className="bg-[#111111] border border-gray-800 rounded-2xl p-6 md:p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl p-4 text-white focus:outline-none focus:border-gray-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl p-4 text-white focus:outline-none focus:border-gray-500 transition-colors"
              />
            </div>
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl p-4 text-white focus:outline-none focus:border-gray-500 transition-colors"
            ></textarea>
            <button
              type="button"
              className="w-full border border-gray-600 rounded-xl py-4 font-bold text-gray-200 hover:bg-gray-800 hover:text-white transition-colors flex justify-center items-center gap-2 group"
            >
              Send message
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </form>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 pb-16">
        <h3 className="text-2xl font-bold mb-6">Skills</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <SkillCard title="Frontend" desc="React, Tailwind CSS, JavaScript, TypeScript" />
          <SkillCard title="Backend" desc="Node.js, Express, REST APIs, Authentication" />
          <SkillCard title="Tools" desc="Git, GitHub, Figma, VS Code" />
        </div>

        <div className="flex flex-wrap gap-3 mt-8">
          <Tag text="Responsive Design" />
          <Tag text="Clean Code" />
          <Tag text="UI/UX Focus" />
          <Tag text="Performance" />
        </div>
      </section>

      <footer className="text-center pb-8 text-gray-600 text-sm font-mono">
        © 2024 Naili Abderrahim. Built with React & Tailwind.
      </footer>
    </div>
  );
}

function SkillCard({ title, desc }) {
  return (
    <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 flex flex-col gap-3 hover:border-gray-600 transition-colors h-full">
      <h4 className="font-bold text-lg text-gray-100">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function Tag({ text }) {
  return (
    <span className="border border-gray-700 rounded-full px-4 py-1.5 text-xs font-mono text-gray-300 bg-[#0a0a0a]">
      {text}
    </span>
  );
}

function SocialBtn({ text }) {
  return (
    <button className="border border-gray-700 rounded-full px-6 py-3 flex items-center gap-2 hover:bg-gray-800 hover:border-gray-500 transition-colors text-gray-300 font-medium text-sm">
      {text}
    </button>
  );
}
