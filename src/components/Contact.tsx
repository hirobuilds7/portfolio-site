// TODO: Replace with your actual CrowdWorks profile URL
const CROWDWORKS_URL = 'https://crowdworks.jp/public/employees/7030833'
const EMAIL = 'hiro.sidehustle@gmail.com'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          一緒に仕事しませんか？
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Excel・スプレッドシートの自動化、業務ツールの制作、WordPressの修正など、お気軽にご相談ください。
          やり取りはテキストで完結し、決定事項がすべて文字で残ります。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CROWDWORKS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
          >
            CrowdWorksで依頼する
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="w-full sm:w-auto border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
          >
            メールで問い合わせる
          </a>
        </div>

        <p className="text-slate-600 text-sm mt-8">{EMAIL}</p>
      </div>
    </section>
  )
}
