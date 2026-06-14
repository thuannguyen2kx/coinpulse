import CoinOverView from "@/components/home/coin-overview";
import {
  CoinOverviewFallback,
  TrendingCoinsFallback,
} from "@/components/home/fallback";
import TrendingCoins from "@/components/home/trending-coins";
import { Suspense } from "react";

const Page = async () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <Suspense fallback={<CoinOverviewFallback />}>
          <CoinOverView />
        </Suspense>
        <Suspense fallback={<TrendingCoinsFallback />}>
          <TrendingCoins />
        </Suspense>
      </section>
      <section className="w-full mt-7 space-y-4">
        <p>Categories</p>
      </section>
    </main>
  );
};

export default Page;
