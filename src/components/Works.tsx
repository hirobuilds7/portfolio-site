import { useState } from 'react'

interface Project {
  title: string
  description: string
  tech: string[]
  features: string[]
  demoUrl: string
  demoLabel?: string
  githubUrl?: string
  imagePath: string
  gradient: string
}

interface FeaturedProject extends Project {
  tagline: string
  problem: string
  solution: string
  commands: { name: string; role: string }[]
  metrics: { label: string; before: string; after: string }[]
  isType2Note: string
}

const FEATURED: FeaturedProject = {
  title: 'ブログ記事AI自動化パイプライン（decoration-tool）',
  tagline: '毎日の記事制作を4コマンドで完全自動化・自ブログで実運用中',
  description:
    'Claude AI と WordPress REST API を連携し、記事の下書き作成・画像の自動配置（AIが記事と関係するかを判断＋キャプション生成）・アイキャッチ自動セット・予約投稿までを4コマンドで自動化するCLIツール。動作中もAIが判断する「AI組み込み型（タイプ2）」の実装です。',
  tech: ['Node.js (ESM)', 'Claude API (@anthropic-ai/sdk)', 'WordPress REST API', 'sharp', 'FormData'],
  features: ['下書き自動作成', 'AI画像判断＋配置', 'AIキャプション生成', 'アイキャッチ自動セット', '予約投稿', 'WAF対策済'],
  demoUrl: 'https://web-fukugyo-hiro.com',
  demoLabel: '実運用中のブログを見る',
  imagePath: '/images/decoration-tool.png',
  gradient: 'from-orange-500 to-amber-600',
  problem: '記事1本の制作に「下書き→画像貼り込み→キャプション執筆→アイキャッチ作成→予約投稿設定」で毎回3〜4時間。同じ手順のくり返しに時間が溶ける。',
  solution: 'md原稿を投げれば、AIが画像の適合判定・キャプション生成・アイキャッチ設定・予約投稿までを自動化。「動作中もAIが判断する」タイプ2の設計で、汎用ジェネレーターにない現場フィット感を実現。',
  commands: [
    { name: 'npm run post', role: 'md原稿→WordPress下書き自動作成（frontmatterでカテゴリID自動解決）' },
    { name: 'npm run apply', role: 'images/の画像をAIが「記事と関係するか」判定→空き見出しに配置＋キャプション自動生成' },
    { name: 'npm run eyecatch', role: 'eyecatch/に画像1枚入れるだけ→アップ＋featured_media自動設定' },
    { name: 'npm run schedule', role: '指定時刻(JST)にstatus:future＋date設定で自動公開' },
  ],
  metrics: [
    { label: '記事1本あたりの制作時間', before: '約3〜4時間（手作業）', after: '約30分（4コマンド）' },
    { label: '画像配置の判断', before: '毎回目視でどの画像がどの見出しに合うか判断', after: 'AIが記事本文と画像を照合して自動配置＋キャプション生成' },
    { label: 'アイキャッチ制作', before: '別ツールで作成→アップロード→設定を手作業', after: 'eyecatch/に1枚入れるだけで自動セット' },
    { label: '運用実績', before: '—', after: '週2〜3本ペースで自ブログ（web-fukugyo-hiro.com）を継続更新中' },
  ],
  isType2Note: '「作る時だけAI」ではなく「動く時もAIが中で判断する」タイプ2の設計。汎用ジェネレーターでは吸収しきれない現場ごとの判断ロジックを、Claude APIの vision で組み込んでいます。',
}

const PROJECTS: Project[] = [
  {
    title: '売上集計＋月次レポート自動化（業務ツールサンプル）',
    description:
      '小売EC事業者向けに、複数チャネル（Amazon/楽天/Shopify）の売上CSVを取り込むだけで、ダッシュボード・前年同月比カード・経営者向け月次サマリ・AI要約・AI改善提案チャットまで自動生成するWebツール。「Excel・スプレッドシートからの卒業」をテーマにした業務改善のサンプル実装です。',
    tech: ['Next.js 16', 'TypeScript', 'Tailwind v4', 'Claude API', 'Recharts', 'Vercel'],
    features: ['複数チャネルCSV統合', 'ダッシュボード自動描画', '月次レポート生成', 'AI要約コメント', 'AI改善提案チャット'],
    demoUrl: 'https://sales-report-app.vercel.app',
    githubUrl: 'https://github.com/hirobuilds7/sales-report-app',
    imagePath: '/images/sales-report.png',
    gradient: 'from-blue-500 to-cyan-600',
  },
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

function FeaturedCard({ project }: { project: FeaturedProject }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="mb-16">
      <div className="text-center mb-6">
        <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
          Featured Case Study
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
          {project.title}
        </h3>
        <p className="text-slate-500 mt-2">{project.tagline}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-orange-100 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="aspect-video lg:aspect-auto overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50">
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

          <div className="p-6 sm:p-8 flex flex-col">
            <p className="text-slate-700 leading-relaxed mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.features.map((f) => (
                <span key={f} className="bg-orange-50 text-orange-700 text-xs px-2 py-1 rounded-md font-medium">
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
                className="flex-1 bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium py-2.5 px-4 rounded-xl text-center transition-colors"
              >
                {project.demoLabel ?? 'デモを見る'}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-100 bg-orange-50/30 p-6 sm:p-8">
          <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-orange-500 rounded-full"></span>
            課題と解決
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-slate-100">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Before / 課題</p>
              <p className="text-sm text-slate-700 leading-relaxed">{project.problem}</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-orange-100">
              <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-2">After / 解決</p>
              <p className="text-sm text-slate-700 leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 border-t border-orange-100">
          <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-orange-500 rounded-full"></span>
            4コマンド構成
          </h4>
          <div className="space-y-3">
            {project.commands.map((cmd) => (
              <div key={cmd.name} className="flex flex-col sm:flex-row sm:items-start gap-3 p-3 bg-slate-50 rounded-lg">
                <code className="inline-block bg-slate-900 text-orange-300 text-xs font-mono px-3 py-1.5 rounded-md whitespace-nowrap self-start">
                  {cmd.name}
                </code>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">{cmd.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8 border-t border-orange-100 bg-slate-50/50">
          <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-orange-500 rounded-full"></span>
            Before / After
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-slate-200">
                  <th className="py-2 pr-4 font-semibold text-slate-600 text-xs uppercase tracking-wider">項目</th>
                  <th className="py-2 pr-4 font-semibold text-slate-400 text-xs uppercase tracking-wider">Before</th>
                  <th className="py-2 font-semibold text-orange-600 text-xs uppercase tracking-wider">After</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {project.metrics.map((m) => (
                  <tr key={m.label}>
                    <td className="py-3 pr-4 font-medium text-slate-800">{m.label}</td>
                    <td className="py-3 pr-4 text-slate-500">{m.before}</td>
                    <td className="py-3 text-slate-800 font-medium">{m.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-6 sm:p-8 border-t border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50">
          <p className="text-sm text-slate-700 leading-relaxed">
            <span className="font-semibold text-orange-700">タイプ2（AI組み込み型）</span>：
            {project.isType2Note}
          </p>
        </div>
      </div>
    </div>
  )
}

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
            {project.demoLabel ?? 'デモを見る'}
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 text-sm font-medium py-2.5 px-4 rounded-xl text-center transition-colors"
            >
              GitHub
            </a>
          )}
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
            実際に動作するWebアプリ・自動化ツールを開発しました。デモリンクからすぐに確認いただけます。
          </p>
        </div>

        <FeaturedCard project={FEATURED} />

        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">その他の制作実績</h3>
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
