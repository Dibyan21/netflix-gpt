import { IMG_CDN } from "../utils/constants";

const MovieCart = ({ posterPath }) => {
  return posterPath ? (
    <div className="w-36 md:w-52 mr-11">
      <img src={IMG_CDN + posterPath} alt="banner" />
    </div>
  ) : null;
};

export default MovieCart;
