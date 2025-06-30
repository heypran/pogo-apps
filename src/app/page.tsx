import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Welcome to GitHub Pages App
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              A modern Next.js application built with TypeScript, deployed automatically 
              to GitHub Pages using GitHub Actions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Next.js 15
                </h3>
                <p className="text-gray-600">
                  Built with the latest Next.js features including App Router and TypeScript support.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  GitHub Actions
                </h3>
                <p className="text-gray-600">
                  Automated deployment pipeline that builds and deploys to GitHub Pages on every push.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  TypeScript
                </h3>
                <p className="text-gray-600">
                  Full TypeScript support with proper linting and formatting for better code quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
