import Banner from "./components/Banner";
import AdBanner from "./components/AdBanner";
import RecentPlaylist from "./components/RecentPlaylist";
import NewRelease from "./components/NewRelease";
import Playlist from "./components/Playlist";
import Mix from "./components/Mix";
import RTChart from "./components/RTChart";
import WeekChart from "./components/WeekChart";
import ArtistSpotlight from "./components/ArtistSpotlight";
import NewReleaseChart from "./components/NewReleaseChart";
import LiveStream from "./components/LiveStream";
import Event from "./components/Event";

type sectionType =
  | "banner"
  | "adBanner"
  | "recentPlaylist"
  | "new-release"
  | "playlist"
  | "mix"
  | "RTChart"
  | "weekChart"
  | "artistSpotlight"
  | "newReleaseChart"
  | "livestream"
  | "event";

function RenderList({
  data,
  sectionType,
}: {
  data: any;
  sectionType: sectionType;
}) {
  if (sectionType === "banner") return <Banner data={data} />;
  if (sectionType === "adBanner") return <AdBanner data={data} />;
  if (sectionType === "recentPlaylist") return <RecentPlaylist data={data} />;
  if (sectionType === "new-release") return <NewRelease data={data} />;
  if (sectionType === "playlist") return <Playlist data={data} />;
  if (sectionType === "mix") return <Mix data={data} />;
  if (sectionType === "RTChart") return <RTChart data={data} />;
  if (sectionType === "weekChart") return <WeekChart data={data} />;
  if (sectionType === "artistSpotlight") return <ArtistSpotlight data={data} />;
  if (sectionType === "newReleaseChart") return <NewReleaseChart data={data} />;
  if (sectionType === "livestream") return <LiveStream data={data} />;
  if (sectionType === "event") return <Event data={data} />;
  return null;
}

export default RenderList;
