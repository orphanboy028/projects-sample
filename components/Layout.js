export default function Layout({ children }) {
  return (
    <>
      <section>
        <h1>Header</h1>
      </section>
      <section>{children}</section>

      <section>
        <footer>
          <h1>Footer</h1>
        </footer>
      </section>
    </>
  );
}
