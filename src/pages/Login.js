import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../slice/languageSlice';
import { translation } from './Translation';


function Login() {
    // const [lang,setLanguage]=useState('en')
    const lang = useSelector((state) => state.language.lang);
    const dispatch = useDispatch();
    console.log(lang)
    const t = translation[lang]; // Get the translations for the selected language
console.log(t,"translation")
  return (
    <div>
      
    
    <div class="h-screen bg-gradient-to-br from-blue-600 to-cyan-300 flex flex-col item-center w-full">
    <div className='flex justify-end items-center mt-6 gap-6 mr-8'>
        <button className='bg-white rounded-lg px-4 py-3'onClick={() => dispatch(setLanguage('en'))}
        >EN</button>
        <button className='bg-white rounded-lg px-4 py-3' onClick={() => dispatch(setLanguage('ar'))}
        >AR</button>
        <button className='bg-white rounded-lg px-4 py-3' onClick={() => dispatch(setLanguage('fr'))}
        >FR</button>
        </div>
        <form className='flex justify-center items-center h-screen'>
       
            <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-xl max-w-sm ">
                <div class="space-y-4">
                    <h1 class="text-center text-2xl font-semibold text-gray-600">{t.login}
                    {/* {lang === 'en' ? 'Login' : 'تسجيل الدخول'} */}
                    </h1>
                    {/* <hr> */}
                <div class="flex items-center border-2 py-2 px-3 rounded-md mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <input class="pl-2 outline-none border-none w-full" type="email" name="email" value="" placeholder="Email" required/>

                </div>
                <div class="flex items-center border-2 py-2 px-3 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                    <input class="pl-2 outline-none border-none w-full" type="password" name="password" id="" placeholder="Password" required/>
                    
                </div>
                </div>
                <div class="flex justify-center items-center mt-4">
                    <p class="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                        <input type="checkbox" id="rememberMeCheckbox" name="rememberMe" class="mr-2"/>
                        {/* <span class="text-xs font-semibold">Remember me?</span> */}
                        <span className="text-xs font-semibold">
                            {t.rememberMe}
                            {/* {lang === 'en' ? 'Remember me?' : 'تذكرني؟'} */}

                        </span>

                    </p>
                </div>

                <button type="submit" value="login" id="login" class="mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000">
                {/* {lang === 'en' ? 'Login' : 'تسجيل الدخول'} */}
                {t.login}

                    </button>
                {/* <hr> */}
                <div class="flex justify-center items-center mt-4">
                    <p class="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                        <span class="ml-2">
                            {/* {lang === 'en' ? 'You dont have an account ?':'ليس لديك حساب؟'} */}
                            {t.noAccount}

                        <a href="#" class="text-xs ml-2 text-blue-500 font-semibold">{t.registerNow} &rarr;</a>
                        </span>
                    </p>
                </div>
            </div>
            {/* <div class="pt-6 text-base font-semibold leading-7">
                <p class="font-sans text-red-500 text-md hover:text-red-800">
                <a href="/" class="absolute">&larr; Home</a>
                </p>
            </div> */}
        </form>
    </div>

    </div>
  )
}

export default Login
