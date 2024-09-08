import moment from "moment";

import { DB } from "./DATABASE/index";

  const format = "DD-MM-YYYY";
  const today = moment();

const getTotalUsers = () => {
  return DB.users.length;
};

const getActiveUsers = () => {
  const activeUsers = DB.users.filter((user) =>
    moment(user.lastStreamDate, format).add(30, "days").isAfter(today)
  );
  return activeUsers.length;
};

const getTotalStreams = () => {
  let totalStream = 0;
  DB.streams.map((stream) => (totalStream += stream.streamCount));
  return totalStream;
};

const filterStreams = DB.streams.filter((stream) =>
  moment(stream.date, format).add(30, "days").isAfter(today) // check for 30days activity
);

const getTopArtist = () => {
  let artists = [];
  let artistRank = [];
  let topArtist = {
    name: "",
    rank: 0,
  };

  filterStreams.forEach((stream) => {
    if (artists.includes(stream.artist)) {
      // update single obj to prevent reoccurence
      const index = artistRank.findIndex(
        (artist) => artist.name === stream.artist
      );
      artistRank[index].rank += stream.streamCount;
    } else {
      artistRank.push({
        name: stream.artist,
        rank: stream.streamCount,
      });
      artists.push(stream.artist);
    }
  });

  artistRank.forEach((rank) => {
    if (rank.rank > topArtist.rank) {
      topArtist = rank;
    }
  });
  return topArtist;
};

const getTopStreams = () => {
  const checkList = [];
  const uniqueList = [];

  filterStreams.map((stream) => {

    if (checkList.includes(stream.title)) {
      // updating one object when more than one exists
      const index = uniqueList.findIndex((item) => item.music === stream.title);
      uniqueList[index].stream = stream.streamCount + uniqueList[index].stream;
    } else {
      uniqueList.push({
        music: stream.title,
        stream: stream.streamCount,
      });
      checkList.push(stream.title);
    }
  });
  const sorted = uniqueList.sort((a, b) => b.stream - a.stream);
  return sorted.slice(0, 5); // limit to top 5 only
};

const getTotalRevenue = () => {
  let total = 0;
  DB.revenue.map((revenue) => (total += revenue.amount));
  return total;
};

export {
  getTopArtist,
  getActiveUsers,
  getTotalRevenue,
  getTotalStreams,
  getTotalUsers,
  getTopStreams,
};
