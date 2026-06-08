import { useState } from 'react'

interface Project {
  title: string
  description: string
  tech: string[]
  features: string[]
  demoUrl: string
  githubUrl: string
  imagePath: string
  gradient: string
}

const PROJECTS: Project[] = [
  {
    title: '家計簿アプリ',
    description:
      '収支の記録・管理ができる本格的な家計簿アプリ。カレンダービューや円グラフ・棒グラフで支出を可視化。予算管理・CSVエクスポート・繰り返し収支など実用的な機能を幅広く実装しました。',
    tech: ['React', 'TypeScript', 'Firebase', 'Recharts', 'Tailwind CSS'],
    features: ['カレンダービュー', 'グラフ可視化', '予算管理', 'CSV出力/入力', 'PWA対応'],
    demoUrl: 'https://timely-mochi-116d6d.netlify.app',
    githubUrl: 'https://github.com/hirobuilds7/kakeibo-app',
    imagePath: '/images/kakeibo.png',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Kanbanタスク管理アプリ',
    description:
      'ドラッグ&ドロップで直感的にタスクを管理できるKanbanボード。優先度・期限設定、検索・フィルター、カスタム列の追加など、個人・チームの生産性向上に役立つ機能を搭載しています。',
    tech: ['React 18', 'TypeScript', 'Supabase', 'dnd-kit', 'Tailwind CSS'],
    features: ['ドラッグ&ドロップ', '優先度・期限管理', '検索・フィルター', 'カスタム列'],
    demoUrl: 'https://kanban-app-2026.netlify.app',
    githubUrl: 'https://github.com/hirobuilds7/kanban-app',
    imagePath: '/images/kanban.png',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    title: '収支管理アプリ',
    description:
      'パチンコ・競馬などの収支を記録しグラフで可視化するWebアプリ。Googleログインでデータをクラウド管理。PWA対応でスマートフォンにインストールして使えます。',
    tech: ['JavaScript', 'Firebase', 'Chart.js', 'PWA', 'HTML/CSS'],
    features: ['グラフ可視化', 'Googleログイン', 'PWA対応', 'データ自動同期'],
    demoUrl: 'https://curious-narwhal-78ed1e.netlify.app',
    githubUrl: 'https://github.com/hirobuilds7/gambling-tracker',
    imagePath: '/images/gambling-tracker.png',
    gradient: 'from-purple-500 to-pink-600',
  },
]

function ProjectCard({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
      <div className="aspect-video overflow-hidden">
        {imgError ? (
          <div
            className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
          >
            <span className="text-white/60 text-sm">{project.title}</span>
          </div>
        ) : (
          <img
            src={project.imagePath}
            alt={project.title}
            className="w-full h-full object-cover object-top"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.features.map((f) => (
            <span key={f} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md">
              {f}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded-md font-medium">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium py-2.5 px-4 rounded-xl text-center transition-colors"
          >
            デモを見る
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 text-sm font-medium py-2.5 px-4 rounded-xl text-center transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Works() {
  return (
    <section id="works" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-600 text-sm font-medium tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">制作実績</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            実際に動作するWebアプリを3本開発しました。デモリンクからすぐに確認いただけます。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
