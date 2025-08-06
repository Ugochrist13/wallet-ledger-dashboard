import Navbar from "@/components/Navbar";
import WalletDashboard from "@/components/WalletDashboard";

export default function HomePage() {
  return (
    <div className="flex-1">
      <Navbar />
      <main>
        <WalletDashboard />
      </main>
    </div>
  );
}
