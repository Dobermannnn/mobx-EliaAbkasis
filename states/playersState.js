import { makeObservable, observable, computed, action, autorun } from "mobx";
export class PlayersState {
  players = [];
  wordList = ["hello", "world", "phone", "gpu"];
  word = "";
  blurWord = "";
  gameStart = false;
  imgList = [
    "https://t4.ftcdn.net/jpg/01/99/00/79/360_F_199007925_NolyRdRrdYqUAGdVZV38P4WX8pYfBaRP.jpg",
    "https://www.shutterstock.com/image-photo/dog-jumping-air-small-orange-600nw-2339878403.jpg",
    ,
    "",
  ];
  letter = "";

  constructor() {
    makeObservable(this, {
      players: observable,
      word: observable,
      blurWord: observable,
      gameStart: observable,
      letter: observable,
      addPlayer: action,
      removePlayer: action,
      startGame: action,
      checkIndex: action,
      changeTurn: action,
      getTurn: computed,
    });
    autorun(() => console.log(this.players));
  }

  addPlayer(name, imgLink) {
    this.players.push({
      name: name,
      imgLink: imgLink,
      score: 0,
      charsList: "",
      isInGame: false,
      turn: 0,
    });
  }
  removePlayer(removeThis) {
    this.players = this.players.filter((player) => player != removeThis);
  }

  //assume wordlist e,r,t
  checkIndex(player) {
    console.log(player.charsList);
    if (
      this.word.includes(this.letter) &&
      !this.blurWord.includes(this.letter) &&
      !player.charsList.includes(this.letter)
    ) {
      for (let i = 0; i < this.word.length; i++) {
        console.log("letter " + this.letter);
        if (this.word[i] == this.letter) {
          this.blurWord =
            this.blurWord.substring(0, i) +
            this.letter +
            this.blurWord.substring(i + 1, this.blurWord.length);
        }
      }
      player.score += 1;
      player.charsList += this.letter + ", ";
    }
  }
  changeTurn() {
    let turn = Math.floor(Math.random() * this.players.length);
    for (let i = 0; i < this.players.length; i++) {
      if (i == turn) this.players[i].turn = 1;
      else {
        this.players[i].turn = 0;
      }
    }
  }
  startGame() {
    if (this.gameStart == false) {
      for (let i = 0; i < this.players.length; i++) {
        this.players[i].charsList = "";
        this.players[i].score = 0;
      }
      this.players = this.players;
      this.gameStart = true;
      this.word =
        this.wordList[Math.floor(Math.random() * this.wordList.length)];
      this.blurWord = Array(this.word.length).fill("*").join("");
    }
  }
  get getTurn() {
    if (this.gameStart) {
      for (let i = 0; i < this.players.length; i++) {
        if (this.players[i].turn == 1) return i;
      }
    }
    return -1;
  }
}
