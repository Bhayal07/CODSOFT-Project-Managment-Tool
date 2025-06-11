import { Link } from "react-router-dom";

const Logo = (props: { url?: string }) => {
  const { url = "/" } = props;
  return (
    <div className="flex items-center justify-center sm:justify-start">
      <Link to={url}>
        <img
          src="/Collabio.png"
          alt="Collabio Logo"
          className="h-8 w-auto"
        />
      </Link>
    </div>
  );
};

export default Logo;
