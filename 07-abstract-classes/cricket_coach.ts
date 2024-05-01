import { Coach } from './coach'; // Importing the Coach class

class CricketCoach extends Coach {
    state_team: string;

    constructor(nameToAdd: string, state: string) {
        super(nameToAdd);
        this.state_team = state;
    }

    find(name: string): Coach {
        return new CricketCoach(name, this.state_team);
    }
}

export { CricketCoach }; // Exporting the CricketCoach class to make it accessible in other files
