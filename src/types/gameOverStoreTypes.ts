export default interface GameStates {
  gameOver: boolean;
  setGameOver: (state: boolean) => void; //함수 타입이라서 void
}
