import "../App.css";
export default function Loading() {
  return (
    <div
      className="bg-white rounded-4 mt-4 d-flex flex-column align-items-center justify-content-center"
      style={{ height: "200px" }}
    >
      <span className="scale mb-2"></span>
      <p>Loading...</p>
    </div>
  );
}
