export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#"
              className="flex items-center gap-2"
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded-md text-[9px] font-bold text-white"
                style={{ background: "var(--brand-gradient)" }}
              >
                DS
              </span>

              <span className="text-sm font-semibold text-gray-900">
                Dev<span className="text-pink-500">Stack</span>
              </span>
            </a>

            <p className="mt-4 max-w-xs text-xs leading-6 text-gray-500">
              Curated tools and technologies for developers
              building modern software.
            </p>

            <div className="mt-5 flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-gray-500 hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-gray-500 hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-gray-500 hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900">
              PRODUCT
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-xs text-gray-500 hover:text-pink-500"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="block text-xs text-gray-500 hover:text-pink-500"
              >
                Technologies
              </a>

              <a
                href="#projects"
                className="block text-xs text-gray-500 hover:text-pink-500"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900">
              COMPANY
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#about"
                className="block text-xs text-gray-500 hover:text-pink-500"
              >
                About
              </a>

              <a
                href="#contact"
                className="block text-xs text-gray-500 hover:text-pink-500"
              >
                Contact
              </a>

              <a
                href="#"
                className="block text-xs text-gray-500 hover:text-pink-500"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900">
              LEGAL
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#privacy"
                className="block text-xs text-gray-500 hover:text-pink-500"
              >
                Privacy Policy
              </a>

              <a
                href="#terms"
                className="block text-xs text-gray-500 hover:text-pink-500"
              >
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-400">
            © 2026 DevStack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#privacy"
              className="text-xs text-gray-400 hover:text-pink-500"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="text-xs text-gray-400 hover:text-pink-500"
            >
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}