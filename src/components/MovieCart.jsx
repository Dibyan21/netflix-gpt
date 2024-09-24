import { IMG_CDN } from "../utils/constants";

const MovieCart = ({ posterPath }) => {
  return (
    <div className="w-52 mr-11">
      <img src={IMG_CDN + posterPath} alt="banner" />
    </div>
  );
};

export default MovieCart;
