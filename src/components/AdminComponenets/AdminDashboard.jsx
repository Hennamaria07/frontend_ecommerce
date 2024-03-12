import React, { useEffect, useState } from "react";
import AdinNavbar from "./AdinNavbar";
export default function AdminDashboard() {

    return (
        <>
            <section className="w-full h-full  text-black  dark:text-white bg-white dark:bg-[#121212ed]">
                  <AdinNavbar />
                    <div className="lg:w-[calc(100vw-256px)] absolute top-0 z-100 lg:left-[256px]  pt-[64px] ">
                      <div className="p-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perferendis laudantium magni aut harum eos mollitia sequi qui. Eligendi repellendus nam fugiat velit, numquam harum adipisci error laborum sequi eum?
                      </div>
                </div>
            </section>
        </>
    );
}

