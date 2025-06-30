import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">
                Welcome to our GitHub Pages application! This is a demo Next.js
                app built with TypeScript and deployed automatically using
                GitHub Actions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                This application showcases modern web development practices
                including:
              </p>
              <ul className="text-left list-disc list-inside text-gray-600 space-y-2 max-w-md mx-auto">
                <li>Next.js 15 with App Router</li>
                <li>TypeScript for type safety</li>
                <li>Tailwind CSS for styling</li>
                <li>ESLint and Prettier for code quality</li>
                <li>Automated deployment with GitHub Actions</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
