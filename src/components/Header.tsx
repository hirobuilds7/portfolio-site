const NAV_LINKS = [
  { href: '#works', label: '制作実績' },
  { href: '#skills', label: 'スキル' },
  { href: '#contact', label: 'お問い合わせ' },
]

// TODO: Replace with your actual CrowdWorks profile URL
const CROWDWORKS_URL = 'https://crowdworks.jp/public/employees/7030833'

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-bold text-xl tracking-tight">
          Hiro
        </a>
        <nav className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-6">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href={CROWDWORKS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            CrowdWorks
          </a>
        </nav>
      </div>
    </header>
  )
}
