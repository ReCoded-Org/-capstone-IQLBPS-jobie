import { Link } from "react-router-dom";

const FooterCol = ({ title, links }) => {
  return (
    <div>
      <p className="font-medium text-white opacity-30">{title}</p>
      <nav
        aria-label="Footer Nav"
        className="mt-3 flex flex-col space-y-1 text-sm small:text-base text-white"
      >
        {links.map((item, index) => {
          const key = index + 1;
          return (
            <Link key={key} className="hover:opacity-75" to={item.path}>
              {item.title}
            </Link>
          );
        })}

        {/* {links.map((item, index) => (
                <div>
                    <Link to={item.path}>{item.title}</Link>
                    
                </div>
            )
            } */}
        {/* </nav> */}
      </nav>
    </div>
  );
};

export default FooterCol;
