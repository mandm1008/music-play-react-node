import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ArtistItem.module.scss";
import { InfoArtistTippy } from "../CustomTippy";
import { getArtist } from "~/servers";

function ArtistItem({ data }: { data: any }) {
  const [info, setInfo] = useState<any>();

  useEffect(() => {
    getArtist(encodeURIComponent(data.alias))
      .then((res) => res.data.data)
      .then((artist) => {
        setInfo(artist);
      });
  }, [data]);

  return (
    <InfoArtistTippy data={info}>
      <Link to={data.link} className={styles.name}>
        {data.name}
      </Link>
    </InfoArtistTippy>
  );
}

export default ArtistItem;
