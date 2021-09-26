package console_wanderer;

public class Field {
	
	// attributes
	private char[][] field;
	
	// Constructor
	Field() {
		field = new char[10][10];
	}
	
	// build field
	public void buildField() {
		// frame with #'s
		for (int i = 0; i < field.length; i++) {
			// left and right border
			field[i][0]  = '#';
			field[i][field.length-1] = '#';
			for (int j = 1; j < field.length-1; j++) {
				if (i == 0 || i == field.length-1) {
					// top and bottom border
					field[i][j] = '#';
				}
				else {
					// all other fields empty spaces
					field[i][j] = ' ';
				}
			}
		}
	}
	
	// print on console
	public void printField() {
		for (int i = 0; i < field.length; i++) {
			for (int j = 0; j < field[i].length; j++) {
				System.out.print(field[i][j]);
			}
			System.out.println();
		}
	}

	// getter setter field
	public char[][] getField() {
		return field;
	}

	public void setField(char[][] field) {
		this.field = field;
	}

}
