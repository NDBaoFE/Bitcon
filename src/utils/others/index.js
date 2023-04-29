export const calPercentWin = (winRound, playedRound) => {
    if (playedRound === 0) return "Haven't played yet";
    const res = Math.round((winRound / playedRound) * 100);
    if (isNaN(res)) return "Error";
    return res;
};
