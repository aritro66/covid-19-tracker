import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';


export default function Home() {
    return (
        <>
            <div className="w-full h-hl bg-corona bg-fill bg-no-repeat text-white items-center flex flex-col justify-center">
                <p className="text-center text-6xl font-head">COVID-19 TRACKER</p>
                <div>
                    <TypeWriterEffect
                        textStyle={{
                            fontFamily: "Red Hat Display",
                            color: "#ffffff",
                            fontSize: "20px",
                            textAlign: "center",
                        }}
                        startDelay={1000}
                        cursorColor="#ffffff"
                        multiText={[
                            "π· Wear a mask",
                            "π§Όπ Clean your hands",
                            "π§βοΈπ§ Maintain safe distance",
                            "π Get vaccinated",
                        ]}
                        multiTextDelay={2000}
                        typeSpeed={15}
                        multiTextLoop={true}
                    />
                </div>


            </div>
        </>
    );
}