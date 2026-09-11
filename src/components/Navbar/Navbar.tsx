export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-5 bg-gray-600"></span>
          <span className="block h-0.5 w-5 bg-gray-600"></span>
          <span className="block h-0.5 w-5 bg-gray-600"></span>
        </button>

        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2 md:flex-shrink-0"
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

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="text-xs font-medium text-pink-500"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-xs text-gray-600 transition hover:text-pink-500"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-xs text-gray-600 transition hover:text-pink-500"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-xs text-gray-600 transition hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-xs text-gray-600 transition hover:text-pink-500"
          >
            Contact
          </a>
        </nav>

        {/* Authentication Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="text-xs text-gray-600 transition hover:text-pink-500"
          >
            Sign In
          </button>

          <button
            type="button"
            className="rounded-full px-4 py-2 text-xs font-medium text-white"
            style={{ background: "var(--brand-gradient)" }}
          >
            Sign Up
          </button>
        </div>

      </div>
    </header>
  );
}