'use client'

import Lottie from "lottie-react";
import meditatingMonkey from "@/public/meditating-monkey-lottie.json";

export default function LottieAnimation(){
    return (
        <div>
            <Lottie animationData={meditatingMonkey} loop={true} autoplay={true}/>
        </div>
    )
}