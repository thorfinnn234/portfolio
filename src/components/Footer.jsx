export default function Footer() {
  return (
    <footer className="bg-white font-quicksand text-slate-800 dark:text-slate-100">
  <div className="mx-auto w-full max-w-6xl px-3 py-12 md:px-6 lg:px-8">
        {/* Top row: nav links (left) and icons (right) */}
        <div className="flex items-center justify-between mb-8">
          <nav className="flex flex-wrap gap-6 text-lg font-medium text-slate-800">
            <a href="#about" className="transition hover:text-purple-700">
              About
            </a>
            <a href="#projects" className="transition hover:text-purple-700">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-purple-700">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-5 text-lg">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 transition hover:text-purple-700"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 transition hover:text-purple-700"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 transition hover:text-purple-700"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 transition hover:text-purple-700"
              aria-label="Dribbble"
            >
              
            </a>
          </div>
        </div>

        {/* CTA section below top row */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
            Interested in working together
            <span className="text-purple-800">?</span>
          </h3>

          <div className="mt-4 flex flex-wrap gap-3">
            <button className="rounded-md bg-purple-800 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-700">
              Get In Touch
            </button>

            <button className="rounded-md border-2 border-slate-900 bg-transparent px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              Browse Projects
            </button>
          </div>
        </div>

        {/* Bottom: copyright (right-aligned) */}
        <div className="flex justify-end text-sm text-slate-800">
          <div>
            ©2025 All Rights Reserved. Built with 💜 by{' '}
            <span className="font-semibold text-slate-900">Horex</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
