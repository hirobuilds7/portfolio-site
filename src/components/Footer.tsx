const GITHUB_URL = 'https://github.com/hirobuilds7'

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">© 2026 Hiro. All rights reserved.</p>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
        >
          GitHub: hirobuilds7
        </a>
      </div>
    </footer>
  )
}
