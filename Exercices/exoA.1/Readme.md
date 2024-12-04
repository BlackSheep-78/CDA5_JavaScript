## Le jeu du "Memory"

### Objectif
Le but de ce premier exercice est d'écrire un programme de jeu de memory. Le memory se joue avec des paires de carte ayant la même image. Au début du jeu, toutes les cartes sont retournées (face non visible), puis on choisit deux cartes, que l'on retourne, si les deux cartes ont la même image, on a trouvé une paire, et les 2 cartes restent face visible avec leur image, si les 2 cartes choisies ne correspondent pas à la même image, les cartes sont retournées (face non visible). Le but du memory est de trouver toutes les paires d'images.

### Données fournies
L'ensemble des ressources, c'est-à-dire, la page Web memory.html, le fichier JavaScript memory.js ainsi que les images est disponible dans le dossier "code"

### Travail à réaliser

#### 1. Le constructeur
À quoi sert la fonction *constructor* ?

    constructor(images, blank) {
      // TODO
    }

À quel moment est-elle appelée dans le script de memory.html ?

#### 2. Implémenter le constructeur
Écrivez le code du constructeur de la classe MemoryGame pour stocker le tableau des images et l'image de dos de carte.  
Écrivez ensuite le code de la méthode build afin que le nombre d'images soit affiché à l'intérieur de la balise div prise en paramètre.  
L'affichage devra se faire de manière alignée et "responsive", si besoin en complétant le fichier de style.

#### 3. Initialiser le jeu
Pour notre jeu de memory, nous allons créer des paires de cartes, une paire par image. Pour stocker ces cartes, on va créer un tableau cards qui va contenir pour chaque carte l'index de l'image correspondante.  
Dans un vrai memory, ce tableau des index des images est permuté lors de la création du jeu ; sinon, ce n'est pas très drôle ! Pour l'instant, nous allons utiliser la fonction shuffleCards qui vous a été donnée car cela sera plus facile pour la mise au point du programme.  
Que fait la fonction *shuffleCards*, et en quoi cela aide-t-il pour la mise au point du programme ?

#### 4. Améliorer le constructeur
Modifiez le constructeur de la classe MemoryGame pour que la classe contienne également un tableau positions fourni par la fonction *shuffleCards*. Modifiez ensuite la méthode build pour afficher autant de cartes que de cases du tableau cards qu'a renvoyé la fonction *shuffleCards* (ici, 16 cartes).  
Chaque carte sera représentée par un div contenant une image (voir le fichier de style). Pour l'instant, chaque carte affichera le même dos d'image.

#### 5. Choix d'une carte
On souhaite ajouter une fonction permettant de savoir lorsque l'utilisateur a cliqué sur une carte.
Une carte doit réagir lors d'un clic sur celle-ci. 

Comment faire pour savoir sur quelle carte un utilisateur a cliqué ?  
Implantez la solution retenue pour que, lorsque l'on clique sur une carte, son index dans le tableau des cartes (entre 0 inclus et 16 exclus) et le numéro de carte correspondante (entre 0 inclus et 8 exclus) soient affichés dans la console du navigateur (à de des fins de mise au point).

#### 6. Affichage de la carte choisie
On souhaite maintenant pouvoir afficher l'image correspondant à une carte lorsque l'on clique sur la carte.  
Le problème est que le tableau des images doit être stocké dans un objet MemoryGame et qu'il faut que cet objet soit accessible à la fonction qui est exécutée lors d'un clic.  
    
Comment faire pour que le tableau des images soit accessible lors d'un clic ?  
Implantez votre solution pour que, lorsque l'on clique sur une carte, l'image correspondante s'affiche.

#### 7. La mécanique du jeu
Il faut maintenant réaliser la mécanique du jeu.  
Comme on découvre les cartes, une par une, il faut se souvenir de la carte précédente (si elle existe) pour savoir si le jeu est dans l'un des états suivants :
- on doit découvrir 2 cartes  
- on doit découvrir 1 carte (l'autre est déjà connue)  
- deux cartes ont été découvertes.

Sachant que l'on appelle *selection* la carte dont on se souvient, réchéchissez à l'algorithme qui prend en paramètre la carte sur laquelle on vient de cliquer et qui réalise la mécanique de jeu.  
Implémentez ensuite votre algorithme en JavaScript.  
Comment faire pour ne pas prendre en compte les cartes déjà retournées (il y a deux cas) ?  
Modifiez votre programme en conséquence.

#### 8. Statuer sur le coup joué
Si les cartes sont identiques. Elles restent face découverte.  
Si les images des deux cartes ne sont pas identiques, on souhaite avoir le temps de voir la face de la seconde carte avant de les retourner de nouveau, face cachée. Pour cela, le plus simple est d'attendre de l'ordre de 500 ms avant de retourner les cartes.
Comment écrire cela en JavaScript ?

#### 9. Amélioration finale
Enfin, modifiez *shuffleCards* pour que le tableau des cartes soit mélangé de façon aléatoire.
