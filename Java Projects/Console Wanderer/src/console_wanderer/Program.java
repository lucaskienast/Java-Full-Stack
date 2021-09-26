package console_wanderer;

import java.util.Scanner;

public class Program {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Field fieldGame = new Field();
		fieldGame.buildField();		
		Player player1 = new Player(fieldGame);
		fieldGame.printField();
		
		String decision;
		Scanner sc = new Scanner(System.in);
		int temp = 0;
		
		while(temp == 0) {
			System.out.println("g: go forwards | l: left turn | r: right turn | q: quit");
			decision = sc.next();
			
			switch(decision) {
				case("g"):{
					player1.goForward(fieldGame);
					break;
				}
				case("l"):{
					player1.leftTurn(fieldGame);
					break;
				}
				case("r"):{
					player1.rightTurn(fieldGame);
					break;
				}
				case("q"):{
					temp = 1;
					System.out.println("Game ended!");
					break;
				}
				default:{
					System.out.println("Error wrong key!");
					break;
				}
			}	
		}
	}

}
