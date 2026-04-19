import Image from "next/image";
import Link from "next/link";
import { HomeScreenshotsCarousel } from "@/components/home/HomeScreenshotsCarousel";
import { homeFaqItems } from "@/lib/home-faq-data";
import { homeScreenshots } from "@/lib/home-screenshots";
import { HOME_HERO_BRAND_SRC } from "@/lib/seo-media";

export { HOME_HERO_BRAND_SRC };
const HOME_APK_URL =
  "https://h5.clawarcade.online/download?from_gameid=7870166&channelCode=100000";
const HOME_HERO_W = 512;
const HOME_HERO_H = 512;

export function HomeLongform() {
  const DownloadBtn = () => (
    <a className="btn btn-apk" href={HOME_APK_URL} rel="noopener noreferrer" target="_blank">
      Download APK
    </a>
  );

  return (
    <>
      <section className="hero wrap home-hero" aria-labelledby="home-hero-title">
        <div className="hero-grid hero-grid--featured">
          <div className="home-hero-copy">
            <p className="home-hero-tagline">
              W777 Bet · W777Bet Game APK download · Android · W777 Bet online
            </p>
            <h1 id="home-hero-title">
              W777 Bet Download – Play W777Bet Game on Android Free (2026)
            </h1>
          </div>
          <figure className="home-feature-wrap">
            <Image
              src={HOME_HERO_BRAND_SRC}
              alt="W777 Bet logo: W777 and .BET on purple — W777Bet Game APK download for Android, online card game and real-money tables"
              width={HOME_HERO_W}
              height={HOME_HERO_H}
              priority
              fetchPriority="high"
              sizes="(max-width: 900px) min(100vw - 2.5rem, 28rem), min(24rem, 38vw)"
              className="home-hero-brand-img"
            />
          </figure>
          <div className="hero-cta hero-cta--primary">
            <DownloadBtn />
          </div>
          <p className="lead" id="speakable-summary">
            Pakistan&apos;s most-played card game is now in your pocket. Download{" "}
            <strong>W777 Bet</strong> for Android in under two minutes, join live tables, and start
            playing against real players from day one. No waiting. No complicated setup. Just three
            cards and a chance to win. Looking for <strong>W777 Bet for Android</strong>,{" "}
            <strong>W777Bet Game</strong> rules, or <strong>W777 Bet real money</strong> tables? This
            guide covers download, signup flow, deposit and withdraw basics, and{" "}
            <strong>W777 Bet card game</strong> hand rankings in one place.
          </p>
        </div>
      </section>

      <div className="wrap home-content">
        <details className="home-toc" open>
          <summary className="home-toc-title">Table of Contents</summary>
          <nav aria-label="Table of contents">
            <ul>
              <li>
                <a href="#what-is">What Is W777 Bet?</a>
                <ul>
                  <li>
                    <a href="#features">W777 Bet Features</a>
                  </li>
                  <li>
                    <a href="#rankings">W777 Bet Hand Rankings</a>
                  </li>
                  <li>
                    <a href="#variations">W777 Bet Game Variations</a>
                  </li>
                  <li>
                    <a href="#screenshots-gallery">Game Screenshots Gallery</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#how-download">How to Download W777 Bet for Android</a>
                <ul>
                  <li>
                    <a href="#safe">Safe APK Download Checklist</a>
                  </li>
                  <li>
                    <a href="#pc">Play on PC</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#how-play">How to Play W777 Bet</a>
              </li>
              <li>
                <a href="#tips">Winning Tips and Strategies</a>
              </li>
              <li>
                <a href="#payments">Deposit and Withdraw</a>
              </li>
              <li>
                <a href="#home-faq">Frequently Asked Questions</a>
              </li>
              <li>
                <a href="#download-2026">Latest Version 2026</a>
              </li>
            </ul>
          </nav>
        </details>

        <aside className="quick-answer" id="quick-answer" aria-label="Quick answer">
          <h2 className="quick-answer-title">Quick Answer</h2>
          <p>
            <strong>W777 Bet</strong> is the Android application for <strong>W777Bet Game</strong> —
            the three-card Pakistani card game played by millions across Pakistan.
            Download the APK directly from an official source, enable &quot;Unknown Sources&quot; in
            your Android settings, install, register, and play. The whole process takes less than three
            minutes. For <strong>W777Bet Game APK download</strong> safety, always use the{" "}
            <strong>official W777 Bet</strong> domain you verified yourself.
          </p>
        </aside>

        <section className="home-section" aria-labelledby="what-is">
          <h2 id="what-is">What Is W777 Bet?</h2>
          <p>
            W777 Bet is the Android installation file for W777Bet Game — a card game played with three
            cards per player that traces its origins to traditional card play in Pakistan, also
            known as Flash, Flush, or Pakistani-style poker. The name &quot;W777Bet Game&quot; literally
            translates to &quot;three cards&quot; in Urdu.
          </p>
          <p>
            Unlike a standard Play Store app, the APK format lets you install W777 Bet games directly
            on any Android device — no region restrictions, no store dependency. You get the full
            game, live multiplayer rooms, real-money tables, and bonus features the moment you open it.
          </p>
          <p>
            The game runs on a standard 52-card deck. Three to six players sit at a table. Each player
            receives three face-down cards, places a minimum boot amount into the pot, and then bets,
            raises, or folds based on the strength of their hand — or on pure nerve. The player with
            the best three-card combination at showdown wins the pot.
          </p>
        </section>

        <section className="home-section home-screenshots-heading" aria-labelledby="screenshots-title">
          <h2 id="screenshots-title">Game Screenshots</h2>
        </section>

        <section className="home-section" id="screenshots-gallery" aria-label="W777 Bet screenshots gallery">
          <p className="home-screenshots-hint sr-only">Swipe left or right to view more screenshots.</p>
          <HomeScreenshotsCarousel images={homeScreenshots} />
        </section>

        <section className="home-section" aria-labelledby="how-download">
          <h2 id="how-download">How to Download W777 Bet for Android</h2>
          <p>Downloading W777 Bet takes four steps:</p>
          <ol className="home-ol">
            <li>
              Visit the official website from your Android browser and locate the Download button on
              the homepage.
            </li>
            <li>
              Tap Download — the APK file saves to your phone&apos;s Downloads folder automatically.
            </li>
            <li>
              Enable Unknown Sources — go to Settings → Security (or Privacy) → toggle on &quot;Allow
              installation from unknown sources.&quot; This one-time step is needed because the APK
              comes from outside the Play Store.
            </li>
            <li>
              Open the APK file from your file manager, tap Install, wait a few seconds, then launch
              the app.
            </li>
          </ol>
          <p>
            Once you&apos;re in, register with your mobile number, claim your welcome bonus, and pick
            a table. Android version required: Android 5.0 (Lollipop) or higher covers the vast
            majority of devices in use today.
          </p>
          <p>
            <strong>Is it safe?</strong> Only download from the official website you verified. Unofficial
            sources carry modified APKs that may contain malware or inject ads into your gameplay. The
            official APK should pass standard security checks before every release.
          </p>
        </section>

        <section className="home-section" aria-labelledby="features">
          <h2 id="features">W777 Bet Features</h2>
          <p>The best W777 Bet apps pack far more than just Classic W777Bet Game. Here&apos;s what you can expect:</p>
          <ul className="home-feature-ul">
            <li>
              <strong>Multiple Game Modes</strong> — Classic W777Bet Game, Joker, AK47, Muflis, Hukam,
              Pot Blind, and more. Each mode plays differently enough that even experienced players
              spend weeks exploring them all.
            </li>
            <li>
              <strong>Real-Money Tables</strong> — Deposit a small amount and play for real cash.
              Withdrawals process directly to JazzCash and EasyPaisa in Pakistan, typically completing
              within 5 to 15 minutes.
            </li>
            <li>
              <strong>Daily Login Bonuses</strong> — Open the app each day to collect free chips or
              bonus coins without playing a single hand. Streak-based rewards give bigger prizes the
              more consistent you are.
            </li>
            <li>
              <strong>Referral Rewards</strong> — Share your invite link with friends. When they
              register and play, both of you earn bonus coins or cashback — no minimum deposit required
              on your end.
            </li>
            <li>
              <strong>VIP Rooms and High-Stakes Tables</strong> — Once you&apos;re confident in your
              game, VIP lounges offer bigger pots, elite competition, and additional weekly promotions
              exclusive to higher-tier players.
            </li>
            <li>
              <strong>Private Tables</strong> — Create a room with a password and invite specific
              friends or family for a private session with custom boot amounts.
            </li>
            <li>
              <strong>Smooth Performance on 2G/3G/4G</strong> — Most top W777 Bets are optimized to run
              on slower mobile connections without lag or dropped sessions.
            </li>
          </ul>
        </section>

        <section className="home-section" aria-labelledby="rankings">
          <h2 id="rankings">W777 Bet Hand Rankings – From Highest to Lowest</h2>
          <p>
            Understanding hand rankings is the single most important skill before you sit at any table.
            Here are the six hands, ranked highest to lowest:
          </p>
          <div className="table-wrap">
            <table className="content-table">
              <caption>W777 Bet card game — hand rankings (Classic mode)</caption>
              <thead>
                <tr>
                  <th scope="col">Rank</th>
                  <th scope="col">Hand Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Trail / Set / Trio</td>
                  <td>Three cards of the same rank</td>
                  <td>A-A-A, K-K-K</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Pure Sequence (Straight Flush)</td>
                  <td>Three consecutive cards of the same suit</td>
                  <td>A-K-Q of Spades</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Sequence (Straight / Run)</td>
                  <td>Three consecutive cards of mixed suits</td>
                  <td>7-8-9 in any suits</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Colour (Flush)</td>
                  <td>Any three cards of the same suit, not consecutive</td>
                  <td>2-7-J of Hearts</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Pair</td>
                  <td>Two cards of the same rank</td>
                  <td>J-J-4</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>High Card</td>
                  <td>No matching combination</td>
                  <td>A-9-4</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            A Trail of twos (2-2-2) still beats even the best Pure Sequence. This is the rule new
            players most often forget — and it costs them pots. Three Aces (A-A-A) is the highest hand
            in the entire game, with a probability of roughly 0.24% per deal.
          </p>
        </section>

        <section className="home-section" aria-labelledby="variations">
          <h2 id="variations">W777 Bet Game Variations Explained</h2>
          <p>Classic mode is just the beginning. These are the variations you&apos;ll encounter most often:</p>
          <h3>Muflis</h3>
          <p>
            The hand rankings flip completely. The weakest hand wins the pot. A High Card beats a
            Trail. This single reversal changes your entire approach to betting and bluffing.
          </p>
          <h3>AK47</h3>
          <p>
            Cards with the values A, K, 4, and 7 become wild Jokers. Standard hand rankings apply, but
            Jokers substitute for any card you need, so strong hands appear far more frequently.
          </p>
          <h3>Hukam</h3>
          <p>
            After dealing, one card rank is revealed as the &quot;Hukam&quot; (trump). All cards of
            that rank become Jokers for the round. Every hand plays differently depending on which rank
            is declared.
          </p>
          <h3>Joker</h3>
          <p>
            Random cards from the deck are assigned Joker status before play begins. Multiple Jokers
            means more Trail combinations, which forces everyone to bet more aggressively.
          </p>
          <h3>Pot Blind</h3>
          <p>
            All players are forced to play blind (cards face-down) for the entire hand. No one sees
            their cards. Pure intuition and betting pressure determine the winner.
          </p>
          <h3>AK47 + Muflis (Combined)</h3>
          <p>
            Several platforms let you combine variations in a single round. AK47 Muflis, for example,
            uses Ace/King/4/7 as Jokers while reversing the hand rankings — creating a completely
            different game that rewards experienced players who understand both rulesets.
          </p>
        </section>

        <section className="home-section" aria-labelledby="how-play">
          <h2 id="how-play">How to Play W777 Bet – Step-by-Step for Beginners</h2>
          <h3>Step 1 — Place the Boot</h3>
          <p>
            Before cards are dealt, every player puts the minimum boot amount into the central pot.
            This is mandatory. No boot, no cards.
          </p>
          <h3>Step 2 — Receive Your Cards</h3>
          <p>
            The dealer distributes three cards face-down to each player. Don&apos;t show your cards to
            anyone.
          </p>
          <h3>Step 3 — Choose: Blind or Seen</h3>
          <p>
            You can play Blind (without looking at your cards) or Seen (after viewing them). Blind
            players pay half the stake of Seen players when betting. Playing blind keeps opponents
            guessing about the strength of your hand.
          </p>
          <h3>Step 4 — Bet, Raise, or Fold</h3>
          <p>
            Betting goes clockwise around the table. On your turn, you can Call (match the current
            stake), Raise (increase it), or Fold (surrender your cards and leave the pot). Blind
            players can bet up to 2x the current stake; Seen players can bet up to 4x.
          </p>
          <h3>Step 5 — Request a Sideshow (Optional)</h3>
          <p>
            If you&apos;re a Seen player, you can request a private card comparison with the previous
            player — called a Sideshow or Backshow. If they accept, the weaker hand must fold
            immediately. They can decline if they&apos;re confident in their cards.
          </p>
          <h3>Step 6 — Showdown</h3>
          <p>
            When only two players remain, either can call a Show by paying a set fee. Both reveal their
            cards. The higher-ranked hand wins the entire pot.
          </p>
        </section>

        <section className="home-section" aria-labelledby="tips">
          <h2 id="tips">W777 Bet Winning Tips and Strategies</h2>
          <ul className="home-feature-ul">
            <li>
              <strong>Start with smaller tables.</strong> Every W777 Bet table has different players
              with different styles. Spend your first few sessions reading how opponents bet rather than
              trying to build the biggest pot.
            </li>
            <li>
              <strong>Play blind early, then switch.</strong> Opening blind keeps your cost per round
              low and creates genuine uncertainty for opponents.
            </li>
            <li>
              <strong>Don&apos;t bluff every weak hand.</strong> Bluffing works when it&apos;s
              unpredictable. Save it for specific spots.
            </li>
            <li>
              <strong>Set a deposit limit before you start.</strong> Decide your maximum for the
              session before you open the app.
            </li>
            <li>
              <strong>Understand the Muflis trap.</strong> In Muflis mode, beginners instinctively
              treat strong hands as good hands out of habit. Retrain yourself: if you&apos;re holding a
              Trail, that&apos;s the worst possible hand in Muflis unless you&apos;re bluffing.
            </li>
          </ul>
        </section>

        <section className="home-section" aria-labelledby="guides">
          <h2 id="guides">W777Bet Game guides on this site</h2>
          <p>
            These articles expand on the topics above with Pakistan-focused steps and troubleshooting
            (informational only — always follow your operator&apos;s official instructions).
          </p>
          <ul className="home-feature-ul">
            <li>
              <Link href="/blog/w777-game-download/">W777 Game Download — latest APK and install checklist</Link>
            </li>
            <li>
              <Link href="/blog/w777-bet-signup/">W777 Bet Signup — create your account and verify OTP</Link>
            </li>
            <li>
              <Link href="/blog/w777bet-game-deposit/">W777Bet Game Deposit — JazzCash, EasyPaisa, and limits</Link>
            </li>
            <li>
              <Link href="/blog/w777bet-game-withdraw/">W777Bet Game Withdraw — processing time and fixes</Link>
            </li>
            <li>
              <Link href="/about-us/">About us — W777Bet Game Pakistan platform</Link>
            </li>
          </ul>
        </section>

        <section className="home-section" aria-labelledby="payments">
          <h2 id="payments">How to Deposit and Withdraw on W777 Bet</h2>
          <p>Most W777 Bet platforms in Pakistan support two primary payment methods:</p>
          <ul className="home-feature-ul">
            <li>
              <strong>JazzCash</strong> — Link your JazzCash number to the app, enter your deposit
              amount, confirm with your MPIN, and funds reflect in seconds.
            </li>
            <li>
              <strong>EasyPaisa</strong> — Navigate to the wallet section, select EasyPaisa, enter the
              amount, confirm.
            </li>
          </ul>
          <p>
            <strong>Minimum Deposits</strong> — Most apps set minimums between 100 and 200 PKR to reduce
            friction for first-time players.
          </p>
          <p>
            <strong>Withdrawal Times</strong> — Standard withdrawals process within 5 to 15 minutes during
            regular hours. Verification happens once during your first withdrawal; subsequent
            transactions are faster.
          </p>
          <p>
            <strong>Withdrawal Tips:</strong>
          </p>
          <ul className="home-feature-ul">
            <li>Complete identity verification during registration, not when you first try to withdraw.</li>
            <li>
              Always use the same payment method for deposits and withdrawals on new accounts when
              possible.
            </li>
            <li>Screenshot your transaction confirmation immediately — it&apos;s your record if a dispute arises.</li>
          </ul>
          <p>
            More detail: see the{" "}
            <a href="#guides">W777Bet Game guides on this site</a> for download, signup, deposit, and withdraw
            walkthroughs (informational only).
          </p>
        </section>

        <section className="home-section" aria-labelledby="safe">
          <h2 id="safe">Is W777 Bet Safe to Download?</h2>
          <p>
            The APK format itself is safe when you download from a verified source. The risk comes from
            third-party mirrors that bundle modified or counterfeit versions of popular apps.
          </p>
          <p>Before installing any W777 Bet, verify these four things:</p>
          <ol className="home-ol">
            <li>The download URL matches the app&apos;s official domain — not a copycat site.</li>
            <li>
              The file size is consistent with what the official site advertises. Significantly smaller
              files often indicate stripped or fake versions.
            </li>
            <li>
              Read at least 20 recent user reviews mentioning payment confirmations — this confirms the
              withdrawal system works.
            </li>
            <li>
              Avoid any APK that requests permissions unrelated to gaming, such as contacts, SMS, or
              microphone without an obvious reason.
            </li>
          </ol>
          <p>
            Device protection during installation: Your phone will show a security warning the first
            time you enable Unknown Sources. This is standard Android behavior for any APK outside the
            Play Store — it doesn&apos;t mean the file is dangerous by itself.
          </p>
        </section>

        <section className="home-section" aria-labelledby="pc">
          <h2 id="pc">W777 Bet on PC – Can You Play on a Computer?</h2>
          <p>
            Yes. You can run W777 Bet on a Windows or Mac computer using an Android emulator.
            BlueStacks is the most widely used option, but LDPlayer and NoxPlayer work equally well for
            card games.
          </p>
          <p>
            The setup takes about 10 minutes: install the emulator, open it, drag and drop the W777 Bet
            into the emulator window, and install it exactly as you would on a phone. Mouse clicks
            replace screen taps. Keyboard shortcuts can be mapped to betting actions.
          </p>
        </section>

        <section className="home-section" aria-labelledby="home-faq">
          <h2 id="home-faq">Frequently Asked Questions</h2>
          <dl className="home-faq-dl">
            {homeFaqItems.map((item) => (
              <div key={item.question} className="home-faq-item">
                <dt>{item.question}</dt>
                <dd>{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="home-section home-cta-final" aria-labelledby="download-2026">
          <h2 id="download-2026">Download W777 Bet – Latest Version 2026</h2>
          <p>
            Get the latest version with updated game modes, improved graphics, faster withdrawal
            processing, and enhanced security. The 2026 update introduces better compatibility across all
            Android devices from Android 5.0 upward, faster loading on 4G connections, and minor fixes to
            the rewards tracking system.
          </p>
          <div className="hero-cta" style={{ marginTop: "1rem" }}>
            <DownloadBtn />
          </div>
          <ul className="home-meta-list">
            <li>
              <strong>Compatible with:</strong> Android 5.0+
            </li>
            <li>
              <strong>File:</strong> APK (direct install)
            </li>
            <li>
              <strong>Payment:</strong> JazzCash | EasyPaisa
            </li>
            <li>
              <strong>Withdrawal:</strong> 5–15 minutes
            </li>
          </ul>
        </section>

        <section className="home-section home-responsible" aria-labelledby="resp">
          <h2 id="resp" className="sr-only">
            Responsible play
          </h2>
          <p className="disclaimer-banner" role="note">
            <strong>Play responsibly.</strong> Set deposit limits before your first session. W777Bet
            Game involves real money — only deposit what you can afford. If you feel your playing is
            becoming compulsive, take a break and seek support from a trusted person. Use{" "}
            <strong>Responsible gambling</strong> under Explore in the site footer for resources.
          </p>
        </section>
      </div>
    </>
  );
}
