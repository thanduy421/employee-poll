import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404</h1>
      <p>Your requested page doesn't exist.</p>
      <button onClick={() => navigate("/")}>Back to Home Page</button>
    </div>
  );
};

export default ErrorPage;
