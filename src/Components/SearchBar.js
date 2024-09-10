import React, { useRef } from 'react'

const SearchBar = () => {
    
    const searchText = useRef(null);

    // const handleSearch = async() => {

    //   const queryText = "Act as a Movie recommendation system and suggest movies for given title or people or genre" +
    //                searchText.current.value + 
    //                "Suggest only 5 movie name titles as comma separated text. Example: Inside out, Moana, cars, toy story, Tangled "

    //   const gptResult = await openai.chat.completions.create({
    //                      model: "gpt-3.5-turbo",
    //                      messages: [
    //                      { role: "system", content: queryText },
    //                      ],
    //               });

    //   console.log(gptResult.choices[0]?.message?.content);

    // }
    
    
    return (
      <div className='flex justify-center'>
          <form  onSubmit ={(event) => event.preventDefault()} className='m-36 text-white'>
            <input ref={searchText} type='text' placeholder='Ask GPT for Movie Recommendations' className='p-3 m-3 w-96 bg-transparent border-2 rounded-lg'/>
            <button type="button" className= "text-black font-semibold bg-slate-400 hover:bg-neutral-600  rounded-lg w-24 h-12">Search</button>
          </form>  
      </div>
    )
}

export default SearchBar;