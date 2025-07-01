export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <div className="inline-flex items-center space-x-2 text-blue-300">
              <span className="text-2xl">🤖</span>
              <span className="font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                PoGo Labs
              </span>
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-2">
            © {new Date().getFullYear()} heypran&apos;s AI explorations
          </p>
          <p className="text-gray-500 text-xs">
            Built with AI assistance • Powered by curiosity
          </p>
        </div>
      </div>
    </footer>
  );
}
