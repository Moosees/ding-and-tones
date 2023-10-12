// export const createAllBeatsSnapshot = (arrangement, bars, mutedBars) => {
//   const beatsInOrder = arrangement.reduce((acc, barId) => {
//     const muted = !!mutedBars[barId];
//     const beats = bars[barId].measure.map((beatId) => ({ beatId, muted }));

//     return [...acc, ...beats];
//   }, []);

//   return beatsInOrder.reduce((acc, { beatId, muted }, i) => {
//     const firstBeat = i === 0;
//     const lastBeat = i === beatsInOrder.length - 1;
//     const prevBeatId = firstBeat
//       ? beatsInOrder[beatsInOrder.length - 1].beatId
//       : beatsInOrder[i - 1].beatId;
//     const nextBeatId = lastBeat
//       ? beatsInOrder[0].beatId
//       : beatsInOrder[i + 1].beatId;

//     acc[beatId] = { muted, firstBeat, lastBeat, prevBeatId, nextBeatId };

//     return acc;
//   }, {});
// };

export const getBarMetreOffset = ({ countOpen, handsOpen }) => {
  let offset = 0;

  if (countOpen) offset += 7;
  if (handsOpen) offset -= 7;

  return offset;
};
