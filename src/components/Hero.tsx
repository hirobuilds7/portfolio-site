const TECH_STACK = [
  'React', 'TypeScript', 'JavaScript', 'Firebase', 'Supabase', 'Tailwind CSS', 'Vite',
]

// TODO: Replace with your actual CrowdWorks profile URL
const CROWDWORKS_URL = 'https://crowdworks.jp/public/employees/7030833'

export default function Hero() {
  return (
    <section className="bg-slate-900 pt-16 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-6">
            Web Application Developer
          </p>
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm Hiro
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-6 leading-relaxed">
            React・TypeScript・Firebase・Supabaseを使って、<br className="hidden sm:block" />
            <span className="text-white font-semibold">使いやすいWebアプリ</span>を丁寧に開発します。
          </p>
          <p className="text-slate-400 mb-10 text-base leading-relaxed max-w-2xl">
            家計簿・タスク管理・データ可視化など、実用的なWebアプリを複数開発した経験があります。
            納期厳守・丁寧なコミュニケーションで、クライアントの課題解決に取り組みます。
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
