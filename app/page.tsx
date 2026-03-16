import ExpandableCards from '@/components/ExpandableCards';
import EconomicModelSection from '@/components/EconomicModelSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F1F3F0] flex flex-col items-center pt-20">
      <div className="w-full px-4 flex flex-col items-center">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4 tracking-tight">
            How top teams are
            <br />
            scaling quality & training
          </h1>
          <p className="text-[#4A4A4A] text-lg">
            Real examples of teams who cut costs, improved CSAT, and
            <br />
            ramped new reps faster with Solidroad.
          </p>
        </div>

        <ExpandableCards />
      </div>

      <div className="w-full mt-32">
        <EconomicModelSection />
      </div>
    </main>
  );
}
