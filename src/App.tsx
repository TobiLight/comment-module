import React from 'react'
import { Images } from './assets'

export const App = () => {
  return(
    <div className="w-screen min-h-screen flex justify-center items-center relative">
      <div className="w-full h-full absolute -z-10 top-0 left-0 bg-gradient-to-r from-orange-300 via-red-300 to-purple-600"></div>
      <div className="w-full md:w-[40rem] lg:w-[45rem] bg-white px-10 pb-5 rounded-lg">
        {/* New Comment */}
        <div className="flex mt-5">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 mb-2 flex items-center justify-center">
              <img 
                src={Images.UserAvatar}
                alt="user avatar"
                className="w-10 mt-1"
              />
            </div>
            <div className="w-0.5 h-full bg-gray-300"></div>
          </div>
          <div className="ml-5">
            <div className="flex">
              <h1 className="font-semibold">adamsdavid</h1>
              <p className="ml-3 text-gray-600">20 hours ago</p>
            </div>
            <p className="my-2">I genuinely think that Codewell's community is AMAZING. It's just starting out but the templates on there are amazing.</p>
            <div className="flex">
              <div className="flex">
                <img 
                  src={Images.Up}
                  alt="up icon"
                />
                <p className="font-semibold mx-2">2</p>
                <img 
                  src={Images.Down}
                  alt="down icon"
                />
              </div>
              <h2 className="mx-3">Reply</h2>
              <h2>Report</h2>
            </div>
            {/* Reply Comment */}
            <div className="flex mt-5">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 mb-2 flex items-center justify-center">
                <img 
                  src={Images.UserAvatar1}
                  alt="user avatar"
                  className="w-10 mt-1"
                />
              </div>
              <div className="w-0.5 h-full bg-gray-300"></div>
            </div>
            <div className="ml-5">
              <div className="flex">
                <h1 className="font-semibold">saramy</h1>
                <p className="ml-3 text-gray-600">16 hours ago</p>
              </div>
              <p className="my-2">I agree. I've been coding really well (pun intended) ever since I started practicing on thier templates hehe.</p>
              <div className="flex">
                <div className="flex">
                  <img 
                    src={Images.Up}
                    alt="up icon"
                  />
                  <p className="font-semibold mx-2">5</p>
                  <img 
                    src={Images.Down}
                    alt="down icon"
                  />
                </div>
                <h2 className="mx-3">Reply</h2>
                <h2>Report</h2>
              </div>
              {/* Reply Comment */}
              <div className="flex mt-5">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 mb-2 flex items-center justify-center">
                  <img 
                    src={Images.UserAvatar2}
                    alt="user avatar"
                    className="w-10 mt-1"
                  />
                </div>
                <div className="w-0.5 h-full bg-gray-300"></div>
              </div>
              <div className="ml-5">
                <div className="flex">
                  <h1 className="font-semibold">jessica21</h1>
                  <p className="ml-3 text-gray-600">14 hours ago</p>
                </div>
                <p className="my-2">Okey, this comment wins.</p>
                <div className="flex">
                  <div className="flex">
                    <img 
                      src={Images.Up}
                      alt="up icon"
                    />
                    <p className="font-semibold mx-2">5</p>
                    <img 
                      src={Images.Down}
                      alt="down icon"
                    />
                  </div>
                  <h2 className="mx-3">Reply</h2>
                  <h2>Report</h2>
                </div>
                {/* Reply Comment */}
                
              </div>
            </div>
            {/* New comment */}
            </div>
          </div>
          {/* New comment */}
          </div>
        </div>
        {/* New comment */}
        <div className="flex mt-5">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 mb-2 flex items-center justify-center">
              <img 
                src={Images.UserAvatar3}
                alt="user avatar"
                className="w-10 mt-1"
              />
            </div>
            <div className="w-0.5 h-full bg-gray-300"></div>
          </div>
          <div className="ml-5">
            <div className="flex">
              <h1 className="font-semibold">andrew231</h1>
              <p className="ml-3 text-gray-600">20 hours ago</p>
            </div>
            <p className="my-2">Thanks for making this, super helpful.</p>
            <div className="flex">
              <div className="flex">
                <img 
                  src={Images.Up}
                  alt="up icon"
                />
                <p className="font-semibold mx-2">2</p>
                <img 
                  src={Images.Down}
                  alt="down icon"
                />
              </div>
              <h2 className="mx-3">Reply</h2>
              <h2>Report</h2>
            </div>
            {/* Reply Comment */}
            
          </div>
        </div>
        {/* New comment */}
      </div>
    </div>
  )
}