import { GoogleOAuthProvider } from "@react-oauth/google";
import Routings from "../../../router";
import Footer from "../../organisms/Footer";
import Navbar from "../../organisms/Navbar";
import { useGetMember } from "../../../hooks/useAuth";

const GOOGLE_CLIENT_ID =
  "635723340510-c2nuqkmr160hd3jis6manq784v4ih5at.apps.googleusercontent.com";

export default function Layout() {
  const dataUser = useGetMember();

  return (
    <>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <Navbar data={{ ...dataUser }} />
        <div className="page">
          <Routings />
        </div>
        <Footer />
      </GoogleOAuthProvider>
    </>
  );
}
