package console_wanderer;

public class Player {
	
	// attributes
	private char[] playerSign;
	private int currentRow;
	private int currentColumn;
	private int counter;
	
	// constructor 
	Player(Field field) {
		playerSign = new char[4];
		playerSign[0] = '^';
		playerSign[1] = '>';
		playerSign[2] = 'v';
		playerSign[3] = '<';
		
		currentRow = 3;
		currentColumn = 3;
		
		counter = 0;
		
		field.getField()[currentRow][currentColumn] = playerSign[0];
	}
	
	// right turn
	public void rightTurn(Field field) {
		if(counter == 0) {
			counter = 1;
		}
		else if(counter == 1) {
			counter = 2;	
		}
		else if(counter == 2) {
			counter = 3;	
		}
		else if(counter == 3) {
			counter = 0;	
		}
		else {
			System.out.println("Error right turn!");
		}
		field.getField()[currentRow][currentColumn] = playerSign[counter];
		field.printField();
	}
	
	// left turn
	public void leftTurn(Field field) {
		if(counter == 0) {
			counter = 3;
		}
		else if(counter == 1) {
			counter = 0;	
		}
		else if(counter == 2) {
			counter = 1;	
		}
		else if(counter == 3) {
			counter = 2;	
		}
		else {
			System.out.println("Error left turn!");
		}
		field.getField()[currentRow][currentColumn] = playerSign[counter];
		field.printField();
	}
		
	// move forwards
	public void goForward(Field field) {
		field.getField()[currentRow][currentColumn] = ' ';
		if(counter == 0) {
			if(field.getField()[currentRow-1][currentColumn] != '#') {
				currentRow--;
			}
			else {
				System.out.println("Cannot move further up!");
			}
		}
		else if(counter == 1) {
			if(field.getField()[currentRow][currentColumn+1] != '#') {
				currentColumn++;
			}
			else {
				System.out.println("Cannot move further right!");
			}
		}
		else if(counter == 2) {
			if(field.getField()[currentRow+1][currentColumn] != '#') {
				currentRow++;
			}
			else {
				System.out.println("Cannot move further down!");
			}
		}
		else if(counter == 3) {
			if(field.getField()[currentRow][currentColumn-1] != '#') {
				currentColumn--;
			}
			else {
				System.out.println("Cannot move further left!");
			}
		}
		else {
			System.out.println("Error go forward!");
		}
		field.getField()[currentRow][currentColumn] = playerSign[counter];
		field.printField();
	}

}
