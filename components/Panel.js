export default function Panel({ children, classes }) {
  return (
    <div className={`shadow-md border border-gray-200 rounded-md ${classes}`}>
      {children}
    </div>
  );
}
