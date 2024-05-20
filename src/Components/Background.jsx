import React from 'react'

export default function Background() {
    return (
        <>
            <div className='fixed w-full h-screen z-[2]'>

                <div className="w-full py-9 flex justify-center absolute top-[3%]" >Documents</div>
                <h1 className="text-[13vw] tracking-tight leading-none absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 font-semibold">Docs.</h1>

            </div>
        </>
    )
}
