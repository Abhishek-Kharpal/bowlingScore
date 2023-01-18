const {bestScore,score} = require('./bowlingScore')


describe('bowlingScore', () => {
  describe('score', () => {

    it('should return score of game', () => {
      expect(score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
    });

    it('should throw error when frame is not a number',()=>{
      expect(()=>score(['string'])).toThrow('Invalid Frame');
    });

    it('should throw error when roll is not an array',()=>{
      expect(()=>score(243)).toThrow('Rolls not an array');
    });

  });
});


describe('bowlingScore', () => {
    describe('bestScore', () => {
  
      it('should return score of game', () => {
        expect(bestScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(9);
      });
      it('should throw error when frame is not a number',()=>{
        expect(()=>score(['string'])).toThrow('Invalid Frame');
      });
  
      it('should throw error when roll is not an array',()=>{
        expect(()=>score(243)).toThrow('Rolls not an array');
      });
  
    });
  });