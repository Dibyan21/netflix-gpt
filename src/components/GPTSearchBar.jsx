import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import model from "../utils/gemini";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGPTSearchClick = async () => {
    //Make an API call to Gemini API and get movie suggestions
    const prompt =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gaddar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await model.generateContent(prompt);
    console.log(gptResults.response.text());
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder} //since we don't have anything as langKey in the actual object 'lang' in store we use lang[langKey]
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-600 text-white rounded-lg"
          onClick={handleGPTSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
