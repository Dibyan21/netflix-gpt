import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
import { BG_URL } from "../utils/constants";

const GPTSearchPage = () => {
  return (
    <div>
      <div className="absolute w-screen h-screen -z-10">
        <img
          className="w-full h-full"
          src={BG_URL}
          alt="background-image"
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearchPage;
