import React, { useEffect, useState } from "react";
import AdinNavbar from "./AdinNavbar";
export default function AdminDashboard() {

    return (
        <>
            <section className="w-full h-full  text-black  dark:text-white bg-white dark:bg-[#121212ed]">
                  <AdinNavbar />
                    <div className="w-full absolute top-0 z-100  pt-[64px] lg:ps-[256px]">
                      <div className="p-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perferendis laudantium magni aut harum eos mollitia sequi qui. Eligendi repellendus nam fugiat velit, numquam harum adipisci error laborum sequi eum?
                      </div>
                </div>
            </section>
        </>
    );
}

