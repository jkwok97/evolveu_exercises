package academy.learnprogramming;

import java.text.NumberFormat;

public class Main {

    public static void main(String[] args) {

//        NumberFormat currencyFormat = NumberFormat.getCurrencyInstance();
//        currencyFormat.setMinimumFractionDigits(2);
//
//        String apples = "Apples";
//        int appleQuantity = 8;
//        int applePrice = 100;
//        String oranges = "Oranges";
//        int orangeQuantity = 12;
//        int orangePrice = 80;
//
//        String column1Heading = "Fruit";
//        String column2Heading = "Quantity";
//        String column3Heading = "Price";
//
//        System.out.printf("%-12s %8s %6s%n", column1Heading, column2Heading, column3Heading);
//        System.out.printf("%-12s %-8d %6s%n", apples, appleQuantity, currencyFormat.format(applePrice / 100.0));
//        System.out.printf("%-12s %-8d %6s%n", oranges, orangeQuantity, currencyFormat.format(orangePrice / 100.0));

        System.out.printf("Pi is %f %n", Math.PI);
        System.out.printf("Pi is %.3f %n", Math.PI);
        System.out.printf("Pi is %.0f %n", Math.PI);
        System.out.printf("Pi is %.12f %n", Math.PI);
        System.out.printf("Pi is %.99f %n", Math.PI);

    }
}
