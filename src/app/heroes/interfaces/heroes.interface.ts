export interface Heroe {
    id?:              string;
    superhero:        string;
    publisher:        Publisher;
    alter_ego:        string;
    first_appearance: number;
    characters:       number;
    alt_img?:         string; // https://kasdfjaskdfajsdf.com/img.png
}

export enum Publisher {
    Tipo1 = "Tipo 1",
    Tipo2 = "Tipo 2",
}
