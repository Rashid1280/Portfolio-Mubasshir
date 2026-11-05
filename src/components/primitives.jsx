export function SpecRow({ items, className = "" }) {
  const visible = items.filter((i) => i && i.value);
  if (!visible.length) return null;

  return (
    <dl className={`grid gap-x-6 gap-y-2 text-spec ${className}`}>
      {visible.map(({ label, value }) => (
        <div key={label} className="flex gap-3 border-t border-line pt-2">
          <dt className="w-20 shrink-0 text-muted">{label}</dt>
          <dd className="text-text/90">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function TextLink({ href, children, external = false, className = "" }) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      {...externalProps}
      className={`text-text underline decoration-line underline-offset-4
                  transition-colors duration-150 ease-out
                  hover:text-accent hover:decoration-accent ${className}`}
    >
      {children}
    </a>
  );
}

export function Button({
  href,
  children,
  variant = "solid",
  external = false,
  className = "",
}) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  const styles =
    variant === "solid"
      ? "bg-accent text-on-accent hover:bg-accent/90"
      : "border border-line text-text hover:border-accent hover:text-accent";

  return (
    <a
      href={href}
      {...externalProps}
      className={`inline-flex items-center gap-2 rounded-control px-4 py-2.5 text-spec
                  font-medium transition-all duration-150 ease-out
                  active:translate-y-px ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

export function SectionHeading({ id, children, aside }) {
  return (
    <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4 border-t border-line pt-5">
      <h2 id={id} className="text-title font-extrabold">
        {children}
      </h2>
      {aside && <p className="text-spec text-muted">{aside}</p>}
    </div>
  );
}
