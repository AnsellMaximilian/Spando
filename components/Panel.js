export default function Panel({ children, classes }) {
  return (
    <div
      className={`bg-gray-50 p-4 shadow-md hover:bg-gray-100 rounded-sm ${classes}`}
    >
      {children}
    </div>
  );
}
