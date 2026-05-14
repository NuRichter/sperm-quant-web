export default function Footer() {
  return (
    <footer className="border-t border-brand-200 bg-brand-50/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-7 rounded-md bg-brand-900 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M4 8L8 4L12 8L8 12Z" fill="white" />
                </svg>
              </div>
              <span className="font-semibold text-brand-900 text-sm tracking-tight">
                SPERM QUANT
              </span>
            </div>
            <p className="text-sm text-brand-500 leading-relaxed">
              Computer-Assisted Sperm Analysis instrument designed for accessible
              andrology diagnostics.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-400 mb-3">
              Programme
            </p>
            <p className="text-sm text-brand-600">NuRichter Programme</p>
            <p className="text-sm text-brand-600">Tim Pak Gede</p>
            <p className="text-sm text-brand-500">
              UPN &quot;Veteran&quot; Jawa Timur
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-400 mb-3">
              Standards
            </p>
            <p className="text-sm text-brand-600">
              Designed to support WHO 6th Edition (2021) semen analysis workflow
            </p>
            <p className="text-sm text-brand-500 mt-2 font-mono text-xs">
              Model: SQ-1000 &middot; 410×300×214 mm
            </p>
          </div>
        </div>
        <div className="pt-6 border-t border-brand-200 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-brand-400 font-mono">
            &copy; 2026 NuRichter &middot; nurichter.org
          </p>
          <p className="text-xs text-brand-400">
            Conceptual design &mdash; Not for clinical use without regulatory clearance
          </p>
        </div>
      </div>
    </footer>
  );
}
