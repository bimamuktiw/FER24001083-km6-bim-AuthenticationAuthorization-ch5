import "./style.css";
import Container from "../../atoms/Container";
import { useEffect, useState } from "react";
import { cn } from "../../../lib/utils";
import Button from "../../atoms/Button";
import Search from "../../atoms/Search";

const THRESHOLD = 100;

function Navbar({ data }) {
  const { loading, user } = data;
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setScroll(e.currentTarget.scrollY);
    });

    return () => {
      window.removeEventListener("scroll", (e) =>
        setScroll(e.currentTarget.scrollY)
      );
    };
  }, []);

  const scrollCondition = scroll > THRESHOLD;

  return (
    <header
      className={cn(
        "navbar flex justify-between duration-500",
        scrollCondition ? "bg-[#1C1C1C]  bg-opacity-95" : "backdrop-blur-sm"
      )}
    >
      <Container className="py-2">
        <div className="flex justify-between items-center">
          <div
            className={cn(
              " font-Bebas text-red-600 font-bold text-3xl px-3 rounded-lg",
              !scrollCondition ? "" : ""
            )}
          >
            Nemplox
          </div>
          <div className="flex items-center gap-5">
            <Search
              className="hidden md:block sz-small  text-white"
              scrollCondition={scrollCondition}
            />
            {!loading ? (
              user ? (
                <div className="flex items-center gap-3">
                  <button
                    className="text-red-400 cursor-pointer"
                    onClick={() => {
                      localStorage.removeItem("token");
                      window.location.reload();
                    }}
                  >
                    Logout
                  </button>
                  <div className=" bg-blue-400 uppercase aspect-square h-[30px] rounded-full flex justify-center items-center text-2xl">
                    {user.name.slice(0, 1 )}
                  </div>
                </div>
              ) : (
                <Button
                  className=" button"
                  variant="primary"
                  onClick={() => (window.location.href = "/login")}
                >
                  Login
                </Button>
              )
            ) : (
              ""
            )}
          </div>
        </div>
        <Search
          className="md:hidden block mt-5 w-full"
          scrollCondition={scrollCondition}
        />
      </Container>
    </header>
  );
}

export default Navbar;
