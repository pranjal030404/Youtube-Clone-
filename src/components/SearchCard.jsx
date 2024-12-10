import { abbreviateNumber } from "js-abbreviation-number";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Time from "../loader/Time";
import { Link } from "react-router-dom";

function SearchCard({ video }) {
  console.log(video);
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col md:flex-row  mb-8 md:mb-3  md:p-4">
          <div className="relative flex h-48  w-full md:w-80   ">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={video?.thumbnails[0]?.url}
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden">
            <span className="text-lg md:text-2xl font-semibold line-clamp-2 ">
              {video?.title}
            </span>
            <span className="empty:hidden text-sm line-clamp-1 md:line-clamp-2md:pr-24 md:my-4">
              {video?.descriptionSnippet}
            </span>
            <div className="hidden md:flex items-center">
              <div className="flex items-start mr-3">
                <div className="flex h-9 w-9 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={video?.author?.avatar[0]?.url}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold mt-2  flex items-center">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className=" text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
                  )}
                </span>
                <div className="flex text-sm font-semibold  truncate overflow-hidden">
                  <span>{`${abbreviateNumber(
                    video?.stats?.views,
                    2
                  )} views`}</span>
                  <span className="flex text-[24px] leading-none font-bold  relative top-[-10px] mx-1">
                    .
                  </span>
                  <span className="truncate">{video?.publishedTimeText}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SearchCard;
