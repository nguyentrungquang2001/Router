import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const Dashboard = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const productType = searchParams.get("product");
  const stock = searchParams.get("stock");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // if login success, redirect to Orders
    navigate("orders");
  };
  console.log(productType);
  return (
    <>
      <h1>Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleEmail" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="exampleEmail" />
        </div>
        <div className="mb-3">
          <label htmlFor="examplePassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="examplePassword"
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>

      <div className="mt-5 mb-4">
        Lọc:
        <button
          className="btn btn-outline-primary ms-2"
          onClick={() => setSearchParams({ product: "laptop" })}
        >
          Laptop
        </button>
        <button
          className="btn btn-outline-primary mx-2"
          onClick={() =>
            setSearchParams({
              product: "laptop",
              stock: "in-stock",
            })
          }
        >
          Còn hàng
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => setSearchParams({})}
        >
          Clear
        </button>
      </div>
      <h1>
        Các từ khóa: &nbsp;
        {productType}, {stock === "in-stock" ? "còn hàng" : ""}
      </h1>
    </>
  );
};

export default Dashboard;
