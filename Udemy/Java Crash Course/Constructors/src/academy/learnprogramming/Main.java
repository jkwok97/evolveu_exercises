package academy.learnprogramming;

public class Main {

    public static void main(String[] args) {
        Account jeffAccount = new Account("34567", 0.00, "Jeff", "jeff@mail.com", "403-123-4567");

        jeffAccount.withdrawal(100.00);

        jeffAccount.deposit(50.00);
        jeffAccount.withdrawal(25.00);

        jeffAccount.deposit(100.00);
        jeffAccount.withdrawal(20.00);

        Account juliaAccount = new Account("12345", 0.00, "Julia", "Julia@email.com", "123-456-7890");

        juliaAccount.deposit(100.00);
        juliaAccount.withdrawal(50.00);

        Account larryAccount = new Account();

        Account barryAccount = new Account("Barry", "Barry@email.com", "403-3456-7890");
        System.out.println(barryAccount.getBalance() + " name:" + barryAccount.getCustomerName());

        VipPerson person1 = new VipPerson();
        System.out.println(person1.getName());

        VipPerson person2 = new VipPerson("Tim", 25000.00);
        System.out.println(person2.getCreditLimit());

        VipPerson person3 = new VipPerson("Ana", 100000.00, "Ana.email.com");
        System.out.println("Name: " + person3.getName() + " | Credit Limit: " + person3.getCreditLimit() + " | Email: " + person3.getEmailAddress());
    }
}
