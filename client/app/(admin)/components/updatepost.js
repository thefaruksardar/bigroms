"use client";
import Switch from "../components/switch";
import Notadmin from "../components/notadmin";
import { useSession } from "next-auth/react";
import useLocalStorage from "../hooks/useLocalstorage";
import axios from "axios";

const Page = ({ post }) => {
  const { data: session } = useSession();

  const [title, setTitle] = useLocalStorage("title", post.title);
  const [name, setName] = useLocalStorage("name", post.name);
  const [size, setSize] = useLocalStorage("size", post.size);
  const [rating, setRating] = useLocalStorage("rating", post.rating);
  const [language, setLanguage] = useLocalStorage("language", "");
  const [category, setCategory] = useLocalStorage("category", post.category);
  const [rom, setRom] = useLocalStorage("rom", post.rom);
  const [isdraft, setIsDraft] = useLocalStorage("isdraft", post.isdraft);
  const [file, setFile] = useLocalStorage("file", post.file);
  const [image, setImage] = useLocalStorage("image", post.image);
  const [permalink, setPermalink] = useLocalStorage(
    "permalink",
    post.permalink
  );

  const uploadImg = async (e) => {
    if (!e.target.files[0]) {
      return;
    }

    setImage(e.target.files[0].name);
    const formdata = new FormData();

    formdata.append("gameIcon", e.target.files[0], e.target.files[0].name);

    // Uploading image to the server
    await axios.post(`${process.env.NEXT_PUBLIC_POST}/image`, formdata);
  };

  const publishPost = async () => {
    const res = await axios.put(`${process.env.NEXT_PUBLIC_POST}`, {
      id: post._id,
      title,
      name,
      size,
      rating,
      language,
      category,
      rom,
      isdraft,
      file,
      image,
      permalink,
    });
    console.log("updated", res);
    if (res.statusText === "OK") {
      alert("Post Updated");
    }
  };

  return (
    <div className="max-w-6xl bg-gray-100 mx-auto rounded-xl">
      {session?.user?.email === "theppssppgames@gmail.com" ? (
        <div className=" py-6 px-3 ">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Title"
              className="text-3xl w-full border py-1 px-3 rounded-xl my-2 focus:outline-none"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <button
              className="bg-blue-500 px-3 p-1 rounded-xl text-white"
              onClick={(e) => publishPost()}
            >
              Update
            </button>
          </div>
          <input
            type="text"
            placeholder="Game"
            className=" w-full border py-1 px-3 rounded-xl my-2 focus:outline-none"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <div className="grid grid-cols-3 gap-3 my-3">
            <input
              type="text"
              placeholder="Size"
              className=" w-full border py-1 px-3 rounded-xl my-2 focus:outline-none"
              onChange={(e) => setSize(e.target.value)}
              value={size}
            />
            <input
              type="text"
              placeholder="Rating"
              className=" w-full border py-1 px-3 rounded-xl my-2 focus:outline-none"
              onChange={(e) => setRating(e.target.value)}
              value={rating}
            />

            <select
              className="rounded-xl"
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="Afrikaans">Afrikaans</option>
              <option value="Albanian">Albanian</option>
              <option value="Arabic">Arabic</option>
              <option value="Armenian">Armenian</option>
              <option value="Basque">Basque</option>
              <option value="Bengali">Bengali</option>
              <option value="Bulgarian">Bulgarian</option>
              <option value="Catalan">Catalan</option>
              <option value="Cambodian">Cambodian</option>
              <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
              <option value="Croatian">Croatian</option>
              <option value="Czech">Czech</option>
              <option value="Danish">Danish</option>
              <option value="Dutch">Dutch</option>
              <option value="English" selected>
                English
              </option>
              <option value="Estonian">Estonian</option>
              <option value="Fiji">Fiji</option>
              <option value="Finnish">Finnish</option>
              <option value="French">French</option>
              <option value="Georgian">Georgian</option>
              <option value="German">German</option>
              <option value="Greek">Greek</option>
              <option value="Gujarati">Gujarati</option>
              <option value="Hebrew">Hebrew</option>
              <option value="Hindi">Hindi</option>
              <option value="Hungarian">Hungarian</option>
              <option value="Icelandic">Icelandic</option>
              <option value="Indonesian">Indonesian</option>
              <option value="Irish">Irish</option>
              <option value="Italian">Italian</option>
              <option value="Japanese">Japanese</option>
              <option value="Javanese">Javanese</option>
              <option value="Korean">Korean</option>
              <option value="Latin">Latin</option>
              <option value="Latvian">Latvian</option>
              <option value="Lithuanian">Lithuanian</option>
              <option value="Macedonian">Macedonian</option>
              <option value="Malay">Malay</option>
              <option value="Malayalam">Malayalam</option>
              <option value="Maltese">Maltese</option>
              <option value="Maori">Maori</option>
              <option value="Marathi">Marathi</option>
              <option value="Mongolian">Mongolian</option>
              <option value="Nepali">Nepali</option>
              <option value="Norwegian">Norwegian</option>
              <option value="Persian">Persian</option>
              <option value="Polish">Polish</option>
              <option value="Portuguese">Portuguese</option>
              <option value="Punjabi">Punjabi</option>
              <option value="Quechua">Quechua</option>
              <option value="Romanian">Romanian</option>
              <option value="Russian">Russian</option>
              <option value="Samoan">Samoan</option>
              <option value="Serbian">Serbian</option>
              <option value="Slovak">Slovak</option>
              <option value="Slovenian">Slovenian</option>
              <option value="Spanish">Spanish</option>
              <option value="Swahili">Swahili</option>
              <option value="Swedish ">Swedish </option>
              <option value="Tamil">Tamil</option>
              <option value="Tatar">Tatar</option>
              <option value="Telugu">Telugu</option>
              <option value="Thai">Thai</option>
              <option value="Tibetan">Tibetan</option>
              <option value="Tonga">Tonga</option>
              <option value="Turkish">Turkish</option>
              <option value="Ukrainian">Ukrainian</option>
              <option value="Urdu">Urdu</option>
              <option value="Uzbek">Uzbek</option>
              <option value="Vietnamese">Vietnamese</option>
              <option value="Welsh">Welsh</option>
              <option value="Xhosa">Xhosa</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-3 my-3">
            <input
              type="text"
              placeholder="Category"
              className=" w-full border py-1 px-3 rounded-xl my-2 focus:outline-none"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
            <input
              type="text"
              placeholder="ROM"
              className=" w-full border py-1 px-3 rounded-xl my-2 focus:outline-none"
              onChange={(e) => setRom(e.target.value)}
              value={rom}
            />
            <Switch isSelected={isdraft} onChange={setIsDraft}>
              Draft
            </Switch>
          </div>

          <div className="grid grid-cols-3 gap-3 my-3">
            <input
              type="text"
              placeholder="File URL"
              className=" w-full border py-1 px-3 rounded-xl my-2 focus:outline-none"
              onChange={(e) => setFile(e.target.value)}
              value={file}
              name="gameIcon"
            />
            <input
              type="text"
              placeholder="permalink"
              className=" w-full border py-1 px-3 rounded-xl my-2 focus:outline-none"
              onChange={(e) => setPermalink(e.target.value)}
              value={permalink}
              name="gameIcon"
            />
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                for="file_input"
              >
                Upload file
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                type="file"
                onChange={(e) => uploadImg(e)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Notadmin />
        </div>
      )}
    </div>
  );
};
export default Page;
