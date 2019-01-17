package academy.learnprogramming;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Please enter your name");
        String name = scanner.nextLine();
        System.out.println("Hello " + name);
        System.out.println("How old are you?");
//        int age = Integer.parseInt(scanner.nextLine());
        int age = scanner.nextInt();
        System.out.println(name + " is " + age + " years old");
        System.out.printf("%s is %d years old%n", name, age);

        scanner.close();
    }
}
