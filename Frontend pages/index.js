export default function Home() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>CivicMind AI</h1>
      <p style={styles.subtitle}>
        Your community decision‑support companion.
      </p>

      <nav style={styles.nav}>
        <a href="/environment" style={styles.link}>Environment Advisor</a>
        <a href="/community" style={styles.link}>Community Help Navigator</a>
        <a href="/productivity" style={styles.link}>Productivity Companion</a>
      </nav>
    </main>
  );
}

const styles = {
  container: {
    padding: "40px",
    fontFamily: "system-ui, sans-serif",
  },
  title: {
    margin: 0,
    fontSize: "2rem",
    fontWeight: 700,
  },
  subtitle: {
    marginTop: "8px",
    marginBottom: "24px",
    color: "#555",
    fontSize: "1rem",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "20px",
  },
  link: {
    fontSize: "1rem",
    color: "#2563eb",
    textDecoration: "none",
    border: "1px solid #e5e7eb",
    padding: "10px 14px",
    borderRadius: "8px",
    width: "fit-content",
  },
};
