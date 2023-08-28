function getParticipants(handshakes: number): number {
    if (!handshakes) {
        return 0;
      }
      let participants = 1;
      let maxHandshakes = 0;
      while (handshakes > maxHandshakes) {
        maxHandshakes += participants;
        participants++;
      }
      return participants;
}
    
let result1: number = getParticipants(0)
let result2: number = getParticipants(1)
let result3: number = getParticipants(3)
let result4: number = getParticipants(6)

    
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)

    
export {}