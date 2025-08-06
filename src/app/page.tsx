import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import WalletDashboard from "@/components/WalletDashboard";


export default function HomePage() {
  return (
    <div className="flex p-1">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-4">
          <WalletDashboard />
        </main>
      </div>
    </div>
  );
}
