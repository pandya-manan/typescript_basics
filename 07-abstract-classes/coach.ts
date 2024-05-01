abstract class Coach {
    name: string;

    constructor(nameToAdd: string) {
        this.name = nameToAdd;
    }

    display(): void {
        console.log(`Hi ${this.name} sir!`);
    }

    abstract find(name: string): Coach;
}

export { Coach }; // Exporting the Coach class to make it accessible in other files

