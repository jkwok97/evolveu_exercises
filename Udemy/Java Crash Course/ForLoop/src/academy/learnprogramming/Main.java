package academy.learnprogramming;

public class Main {

    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            System.out.println("i is " + i);
        }

        for (int x = 0; x < 10; x = x + 2) {
            System.out.println("x is " + x);
        }

        for (int y = 5; y > 0; y--) {
            System.out.println("y is " + y);
        }

        for (int z = 0; z <= 9; z++) {
            System.out.printf("row %d ", z);
            for (int s = 0; s <= 9; s++) {
                System.out.print(s);
            }
            System.out.println();
        }
    }
}
