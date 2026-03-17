import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume - Tony Nguyen',
  description: 'View or download Tony Nguyen\'s resume',
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Resume
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            View or download my latest resume
          </p>
          <a
            href="/resume/Tony_Nguyen_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-lg font-medium"
          >
            📄 Download PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="bg-card rounded-lg p-6 shadow-lg">
          <iframe
            src="/resume/Tony_Nguyen_Resume1.pdf"
            className="w-full h-[600px] md:h-[800px] border-0 rounded"
            title="Tony Nguyen Resume"
          />
          
          {/* Fallback for browsers that can't display PDFs */}
          <div className="text-center py-12 mt-4 border-t border-border">
            <p className="text-gray-300 mb-4">
              If the PDF doesn't load above, download it directly.
            </p>
            <a
              href="/resume/Tony_Nguyen_Resume1.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-lg font-medium"
            >
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}