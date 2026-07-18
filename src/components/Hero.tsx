const TECH_STACK = [
  'React', 'TypeScript', 'Next.js', 'JavaScript', 'Firebase', 'Supabase', 'Tailwind CSS', 'Claude API',
]

const CROWDWORKS_URL = 'https://crowdworks.jp/public/employees/7030833'

export default function Hero() {
  return (
    <section className="bg-slate-900 pt-20 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
            Web Application Developer
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Hi, I'm Hiro
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-6 leading-relaxed">
            元・町工場の現場から、<br className="hidden sm:block" />
            <span className="text-white font-semibold">AIでWebアプリを作る側</span>へ。
          </p>
          <p className="text-slate-400 mb-10 text-base leading-relaxed max-w-2xl">
            売上集計＋AI月次レポート・工程管理・LP制作サンプルなど8本を公開中。すべてURLを開けば、その場で触って確かめられます。
            やり取りはテキストで完結し、決定事項がすべて文字で残ります。
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#works"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-7 py-3.5 rounded-xl transition-colors"
            >
              制作実績を見る
            </a>
            <a
              href={CROWDWORKS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium px-7 py-3.5 rounded-xl transition-colors"
            >
              CrowdWorksを見る →
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="bg-slate-800 border border-slate-700 text-slate-300 px-3 py-1.5 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
