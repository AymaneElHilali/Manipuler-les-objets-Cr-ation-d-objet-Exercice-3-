class Livre {
    constructor(titre, genre, auteur, lu = false, dateLecture = null) {
        this.titre = titre;
        this.genre = genre;
        this.auteur = auteur;
        this.lu = lu;
        this.dateLecture = dateLecture;
    }
}

class ListeLivres {
    constructor() {
        this.livres = [];
        this.livresLus = 0;
        this.livresNonLus = 0;
        this.livreSuivant = null;
        this.livreEnCours = null;
        this.dernierLivreLu = null;
        this.nextList = [];
    }
    ajouter(livre) {
        this.livres.push(livre);
        if (livre.lu == false) {
            this.livresNonLus++;
            if (this.livreEnCours == null) {
                this.livreEnCours = livre;
            } else if (this.livreEnCours != null && this.livreSuivant == null) {
                this.livreSuivant = livre;
            } else if (this.livreEnCours != null && this.livreSuivant != null) {
                this.nextList.push(livre);
            }
        } else if (livre.lu == true) {
            this.livresLus++;
        }
    }

    terminerLivreEnCours() {
        this.livreEnCours.lu = true;
        this.livresNonLus--;
        this.livresLus++;
        this.dernierLivreLu = this.livreEnCours;
        this.livreEnCours = this.livreSuivant;
        this.livreSuivant = this.nextList.shift();
    }
    afficherListeLivres(){
        console.log(this.livres)
        console.log(this.livreEnCours)
        console.log(this.livreSuivant)
        console.log(this.dernierLivreLu)
    }
}
const listeLivres = new ListeLivres();
const livre1 = new Livre('Harry Potter', 'FantasK', 'J.K. Rowling');
const livre2 = new Livre('CRUELLA ', 'Fantasy', 'J.R.R. Tolkien');
const livre3 = new Livre('2005', 'Dystopie', 'George Orwell');
const livre4 = new Livre('2006', 'Dystopie', 'George Orwell');
const livre5 = new Livre('2007', 'Dystopie', 'George Orwell');
const livre6 = new Livre('2008', 'Dystopie', 'George Orwell');
listeLivres.ajouter(livre1);
listeLivres.ajouter(livre2);
listeLivres.ajouter(livre3);
listeLivres.ajouter(livre4);
listeLivres.ajouter(livre5);
listeLivres.ajouter(livre6);
listeLivres.terminerLivreEnCours();
listeLivres.afficherListeLivres();
