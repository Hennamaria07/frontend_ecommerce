import React, { useEffect, useState } from "react";
import AdinNavbar from "./AdinNavbar";
import { useSelector } from "react-redux";
export default function AdminDashboard() {
const show = useSelector(state => state.mode.show);
// console.log(show);
    return (
        <>
            <section className="w-full h-full text-black  dark:text-white bg-white dark:bg-[#121212ed]">
                  <AdinNavbar /> 
                    <div className= {`${show ? 'w-[calc(100vw-256px)] absolute top-0 z-100 pt-[64px] left-[256px]' : 'lg:w-[calc(100vw-256px)] absolute top-0 z-100 lg:left-[256px] pt-[64px]'}`} >
                      <div className="p-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perferendis laudantium magni aut harum eos mollitia sequi qui. Eligendi repellendus nam fugiat velit, numquam harum adipisci error laborum sequi eum?
                      </div>
                </div>
            </section>
        </>
    );
}

