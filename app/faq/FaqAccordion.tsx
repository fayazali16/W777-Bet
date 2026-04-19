"use client";

import { startTransition, useCallback, useState } from "react";
import { faqItems } from "@/lib/faq-data";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = useCallback((index: number) => {
    startTransition(() => {
      setOpenIndex((prev) => (prev === index ? -1 : index));
    });
  }, []);

  return (
    <section aria-labelledby="faq-list-title">
      <h2 id="faq-list-title" className="section-title" style={{ marginTop: 0 }}>
        Questions
      </h2>

      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className={`faq-item${isOpen ? " is-open" : ""}`}>
            <button type="button" aria-expanded={isOpen} onClick={() => toggle(index)}>
              {item.question}{" "}
              <span className="chev" aria-hidden>
                ▼
              </span>
            </button>
            <div className="panel">
              {index === 10 ? (
                <p>
                  Search for your national or state problem gambling helpline. Our responsible gambling
                  resources (site footer → Explore) list example directories and emphasize using local,
                  verified services.
                </p>
              ) : (
                <p>{item.answer}</p>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}
