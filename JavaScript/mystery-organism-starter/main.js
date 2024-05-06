// Returns a random DNA base
const returnRandBase = () => 
{
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => 
{
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,

    mutate() {
      let rand = Math.floor(Math.random() * this.dna.length);
      let current = this.dna[rand];

      while (this.dna[rand] === current)
      {
        this.dna[rand] === returnRandBase();
      }
      
      return this.dna;
    },

    compareDNA(pAequorObj) {
      let total = 0;

      for (let i = 0; i < this.dna.length; i++)
      {
        if (this.dna[i] === pAequorObj.dna[i])
        {
          total++;
        }
      }

      let percent = (total / this.dna.length) * 100;

      console.log(`Specimen ${this.specimenNum} and specimen ${pAequorObj.specimenNum} have ${percent}% DNA in common.`);
    },

    willLikelySurvive() {
      let total = 0;

      for (let i = 0; i < this.dna.length; i++)
      {
        if (this.dna[i] === 'C' || this.dna[i] === 'G')
        {
          total++;
        }
      }

      if (total / this.dna.length >= 0.6)
      {
        return true;
      }
      else 
      {
        return false;
      }
    }

  }
}

let survivingAequors = []; 

const aequorInstances = () => {
  let total = 0;
  let i = 1;

  while (total < 30)
  {
    let current = pAequorFactory(i, mockUpStrand());
    i++;
    
    if (current.willLikelySurvive() === true)
    {
      total++;
      survivingAequors.push(current);
    }
  }
}

aequorInstances();
console.log(JSON.stringify(survivingAequors));
