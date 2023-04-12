import React, { useEffect, useState } from 'react'

export const ScoreDisplay = ({score}) => {
    const [scoreBg, setScoreBg] = useState()
    useEffect(() => {
        const getScoreBg = (score) => {
            if (score >= 0 && score < 20) {
                setScoreBg("bg-red-500");
            } else if (score >= 20 && score < 40) {
                setScoreBg("bg-orange-500");
            } else if (score >= 40 && score < 60) {
                setScoreBg("bg-yellow-500");
            } else if (score >= 60 && score < 90) {
                setScoreBg("bg-green-500");
            } else if (score >= 90 && score <= 100) {
                setScoreBg("bg-blue-500");
            }
        };
        getScoreBg(score)
    }, [score])
    return (
        <div className="flex justify-center  col-start-11 col-end-13 row-start-1 row-end-5 ">
            <div className={`rounded-full border-2 border-black h-[3.4rem] w-[3.4rem] m-auto flex justify-center ${scoreBg}`}>
                <p className='m-auto text-3xl'>{score}</p>
            </div>
        </div>
    )
}
