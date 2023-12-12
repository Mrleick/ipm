import { useEffect} from "react";
import { useOutletContext } from "react-router-dom";

const PlayConnect = () => {
  const [preemToken, setPreemToken] = useOutletContext()
  const [GlobalPlayer,setGlobalPlayer] = useOutletContext()
  console.log("here is preem token  " + preemToken)
  useEffect(() => {
    console.log("here is preem token in effect " + preemToken)
        const token = preemToken;
        const player = new Spotify.Player({
          name: "IPlayMusic",
          getOAuthToken: (cb) => {
            cb(token);
          },
          volume: 0.5,
        });

        // Add your event listeners here...
        // Ready
        player.addListener("ready", ({ device_id }) => {
          fetch("https://api.spotify.com/v1/me/player", {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              device_ids: [`${device_id}`],
            }),
          });
        });
        console.log(Object.getPrototypeOf(player))
        setGlobalPlayer(player)
        player.connect();
     
  }, []);

  return (
    <>
    </>
  );
};

export default PlayConnect;
