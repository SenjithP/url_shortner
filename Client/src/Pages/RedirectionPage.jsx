import { useEffect } from "react";
import { useViewUrlMutation } from "../Slices/urlApiSlice";
import { useNavigate } from "react-router-dom";

const RedirectionPage = () => {
  const [viewUrl] = useViewUrlMutation();
  const currentUrl = window.location.href;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await viewUrl({ id: currentUrl });

        if (result.data) {
          const urlFromServer = result.data.redirectUrl;
          if (urlFromServer) {
            window.location.href = urlFromServer;
          } else {
            navigate("/error/noPageFound");
          }
        }
      } catch (error) {
        console.error("Error fetching url:", error);
      }
    };
    fetchData();
  }, [viewUrl, currentUrl]);

  return null;
};

export default RedirectionPage;
