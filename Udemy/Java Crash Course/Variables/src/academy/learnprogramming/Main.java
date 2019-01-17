package academy.learnprogramming;

import java.util.Random;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        Random randomGenerator = new Random();

        int randomNumber = randomGenerator.nextInt(8) + 2;

        int firstNumber = randomNumber;
        int secondNumber = randomNumber;

        var subtraction = randomNumber;
        int answer = firstNumber * secondNumber - subtraction;

        String prompt = ". Don't type in your answer, just press ENTER when you're ready to continue";

        System.out.println("Think of a number between 1 and 10" + prompt);
        scanner.nextLine();

        System.out.println("Multiply your number by " + firstNumber + prompt);
        scanner.nextLine();

        System.out.println("Now multiply the result by " + secondNumber + prompt);
        scanner.nextLine();

        System.out.println("Divide the result by the number your originally thought of" + prompt);
        scanner.nextLine();

        System.out.println("Now subtract " + subtraction + prompt);
        scanner.nextLine();

        System.out.println("The answer is " + answer);

        scanner.close();
    }
}
