import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TimeFallingAway from '@/components/ui/TimeFading';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <TimeFallingAway/>
      </main>
      <Footer />
    </div>
  );
}

