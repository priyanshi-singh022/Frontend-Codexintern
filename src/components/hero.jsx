import { useState } from "react"
import axios from 'axios';


function Translator() {
  const [text, setText] = useState("")
  const [option, setOption] = useState("")
  const [convertedText, setConvertedText] = useState("")

  const captureText = (e) => {
    setText(e.target.value)
  }

  const captureOption = (e) => {
    e.preventDefault()
    setOption(e.target.value)
  }

  const ConvertText = async () => {
    const options = {
      method: 'POST',
      url: 'https://google-translator9.p.rapidapi.com/v2',
      headers: {
        'x-rapidapi-key': 'fab5257173msh3b97263df892148p1be689jsn41df27311a6c',
        'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        q: `${text}`,
        source: 'en',
        target: `${option}`,
        format: 'text'
      }
    };

    try {
      const response = await axios.request(options);
      setConvertedText(response.data?.data?.translations[Number(0)]?.translatedText)
    } catch (error) {
      console.error(error);
    }
  }

  console.log(text)
  console.log(option)
  return (
    <>
     <div class="flex items-center justify-center flex-col min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 via-50% to-blue-200 animate-gradient-x px-2">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 drop-shadow-md text-center p-10">
          Translate to your fav language
        </h1>
        
        <div class="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl p-10 shadow-xl w-full max-w-2xl space-y-8">


          <div class="flex flex-col md:flex-row items-center gap-6">
            <input type="text" placeholder="Enter your text here"
              class="w-full md:w-1/2 px-4 py-3 rounded-lg bg-white/50 placeholder-gray-600 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 shadow-sm" onChange={captureText} />
            <div class="text-gray-800 flex flex-col items-start">
              <label>Choose Target Language: </label>
              <select name="language" class="rounded-md px-4 py-2 bg-white/60 text-gray-800 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300" onChange={captureOption}>
                <option value="mr">Marathi</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="ko">Korean</option>
                <option value="zh">Chinese</option>
                <option value="ja">Japanese</option>
              </select>
            </div>
            <button type="submit" class="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce" onClick={ConvertText}>Convert</button>
          </div>
          <div class="bg-white/40 border border-white/50 rounded-lg p-6 text-gray-800 shadow-md min-h-[100px]">
            <p class="text-base italic text-gray-700">
              {convertedText}
            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Translator;