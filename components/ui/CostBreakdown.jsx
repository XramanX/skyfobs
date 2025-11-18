import React from "react";
import Progress from "./Progress";
import styles from "../../styles/components/costBreakdown.module.scss";

export default function CostBreakdown({ total = "$0", items = [] }) {
  const totalValue =
    items.reduce((s, it) => s + (Number(it.value) || 0), 0) || items.length;
  const palette = [
    ["#2563eb", "#4f46e5"],
    ["#f97316", "#fb7185"],
    ["#10b981", "#06b6d4"],
    ["#f59e0b", "#ef4444"],
    ["#7c3aed", "#a78bfa"],
    ["#06b6d4", "#14b8a6"],
    ["#ef4444", "#f43f5e"],
  ];

  return (
    <div
      className={styles.wrapper}
      role="region"
      aria-label="Monthly cloud spend"
    >
      <div className={styles.header}>
        <div>
          <div className={styles.title}>Monthly Cloud Spend</div>
          <div className={styles.subtitle}>Breakdown by service</div>
        </div>
        <div className={styles.total} aria-hidden>
          {total}
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.list}>
          {items.map((it, idx) => {
            const pct = Math.round(
              ((Number(it.value) || 0) / totalValue) * 100
            );
            const [c1, c2] = palette[idx % palette.length];
            return (
              <div key={it.label} className={styles.item}>
                {/* <div className={styles.itemMeta}>
                  <div className={styles.itemLabel}>
                    <span
                      className={styles.miniSwatch}
                      style={{
                        background: `linear-gradient(90deg, ${c1}, ${c2})`,
                      }}
                      aria-hidden
                    />
                    {it.label}
                  </div>
                  <div className={styles.itemAmount}>{it.amount}</div>
                </div> */}

                <div className={styles.progressWrap}>
                  <Progress
                    label={it.label}
                    value={pct}
                    size="sm"
                    ariaLabel={`${it.label} ${pct} percent`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* right: stacked visual + legend */}
        <aside className={styles.side}>
          <div className={styles.piePlaceholder} aria-hidden>
            <div
              className={styles.stacked}
              role="img"
              aria-label="Spend distribution"
            >
              {items.map((it, idx) => {
                const pct = ((Number(it.value) || 0) / totalValue) * 100;
                const [c1, c2] = palette[idx % palette.length];
                return (
                  <div
                    key={it.label}
                    className={styles.slice}
                    style={{
                      width: `${pct}%`,
                      background: `linear-gradient(90deg, ${c1}, ${c2})`,
                      minWidth: pct > 0 && pct < 1 ? "1%" : undefined,
                    }}
                    title={`${it.label} — ${it.amount} (${Math.round(pct)}%)`}
                    aria-hidden
                  />
                );
              })}
            </div>
          </div>

          <dl className={styles.legend}>
            {items.map((it, idx) => {
              const [c1, c2] = palette[idx % palette.length];
              return (
                <div key={it.label} className={styles.legendRow}>
                  <dt className={styles.legendKey}>
                    <span
                      className={styles.swatch}
                      style={{
                        background: `linear-gradient(90deg, ${c1}, ${c2})`,
                      }}
                      aria-hidden
                    />
                    <span className={styles.legendLabel}>{it.label}</span>
                  </dt>
                  <dd className={styles.legendVal}>{it.amount}</dd>
                </div>
              );
            })}
          </dl>
        </aside>
      </div>
    </div>
  );
}
