import React from 'react'

export default function Nft(props) {
    return (
        <>
            <div class="rounded overflow-hidden shadow-lg p-4">
                <img className="w-full" src={props.imageURL} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{props.name}</div>
                    <div class="font-bold text-xl mb-2">{props.thash}</div>
                    <p class=" text-base">
                        {props.description}
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block border border-whiteone px-3 py-1 text-sm font-semibold text-gray-400 mr-2 mb-2">Chain: {props.chain}</span>
                </div>
            </div>
        </>
    )
}
