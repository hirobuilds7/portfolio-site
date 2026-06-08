interface SkillCategory {
  title: string
  emoji: string
  skills: string[]
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'フロントエンド',
    emoji: '🖥',
    skills: ['React', 'TypeScript', 'JavaScript (ES2020+)', 'HTML / CSS', 'Tailwind CSS', 'Recharts', 'Chart.js', 'dnd-kit'],
  },
  {
    title: 'バックエンド / BaaS',
    emoji: '🗄',
    skills: ['Firebase Firestore', 'Firebase Auth', 'Supabase (PostgreSQL)', 'Supabase Auth', 'REST API'],
  },
  {
    title: 'ツール・環境',
    emoji: '🛠',
    skills: ['Vite', 'Git / GitHub', 'Netlify', 'PWA', 'VSCode'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-600 text-sm font-medium tracking-widest uppercase mb-3">
            Tech Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">スキル・技術スタック</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            実際のプロジェクトで使用した技術をまとめました。
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map(({ title, emoji, skills }) => (
            <div
              key={title}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <div className="text-3xl mb-4">{emoji}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-5">{title}</h3>
              <ul className="space-y-2.5">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5 text-slate-700 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
