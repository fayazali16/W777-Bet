export type HomeScreenshot = {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  description: string;
};

export const homeScreenshots: HomeScreenshot[] = [
  {
    id: "w777bet-deposits-and-withdraw",
    name: "W777Bet-Deposits-And-Withdraw",
    src: "/assets/images/w777bet-deposits-and-withdraw.webp",
    width: 1024,
    height: 576,
    alt: "W777Bet deposits and withdraw interface showing JazzCash, EasyPaisa and amount options",
    description:
      "W777 Bet deposit and withdrawal screen with payment channels, balance panel, and recharge amount cards.",
  },
  {
    id: "w777bet-refer-and-win",
    name: "W777Bet-Refer-and-Win",
    src: "/assets/images/w777bet-refer-and-win.webp",
    width: 1024,
    height: 576,
    alt: "W777Bet refer and win page with referral link, copy button and ranking panel",
    description:
      "W777 Bet refer and win page including invite stats, referral link copy CTA, and leaderboard section.",
  },
  {
    id: "w777bet-promotions",
    name: "W777Bet-Promotions",
    src: "/assets/images/w777bet-promotions.webp",
    width: 1024,
    height: 576,
    alt: "W777Bet promotions screen with VIP banners and event reward cards",
    description:
      "W777 Bet promotions and event information screen with VIP rewards and game-sharing offers.",
  },
  {
    id: "w777bet-rewards",
    name: "W777Bet-Rewards",
    src: "/assets/images/w777bet-rewards.webp",
    width: 1024,
    height: 576,
    alt: "W777Bet rewards page with gift cards store and ticket exchange options",
    description:
      "W777 Bet rewards store interface showing gift card redemption and ticket exchange catalog.",
  },
  {
    id: "w777-bet",
    name: "W777-Bet",
    src: "/assets/images/w777-bet-lobby.webp",
    width: 1024,
    height: 576,
    alt: "W777 Bet game lobby with slots, coin pusher and category cards",
    description:
      "W777 Bet lobby and games selection page with live RTP tiles, category shortcuts, and rewards tabs.",
  },
];
