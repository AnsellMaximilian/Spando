export default function Panel({ children, classes }) {
  return (
    <div
      className={`p-4 shadow-md border border-gray-200 rounded-md ${classes}`}
    >
      {children}
    </div>
  );
}
