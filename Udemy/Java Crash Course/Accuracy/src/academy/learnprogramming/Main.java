package academy.learnprogramming;

import java.math.BigDecimal;

public class Main {

    public static void main(String[] args) {

        double result1 = 0.1 * 8;
        double result2 = 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1;

//        System.out.printf("result1 is %f %n", result1);
//        System.out.printf("result2 is %f %n", result2);
        System.out.printf("result1 is %.99f %n", result1);
        System.out.printf("result2 is %.99f %n", result2);

        double difference = result1 - result2;

        boolean checkResult = result1 - result2 == 0;

        System.out.printf("difference is %.99f %n", difference);

        BigDecimal oneTenth = BigDecimal.valueOf(0.1);

        BigDecimal result3 = oneTenth.multiply(BigDecimal.valueOf(7));
        BigDecimal result4 = oneTenth.add(oneTenth
                            .add(oneTenth)
                            .add(oneTenth)
                            .add(oneTenth)
                            .add(oneTenth)
                            .add(oneTenth));

        BigDecimal difference2 = result3.subtract(result4);

        System.out.printf("result3 is %.99f %n", result3);
        System.out.printf("result4 is %.99f %n", result4);
        System.out.printf("difference is %.99f %n", difference2);

    }
}
