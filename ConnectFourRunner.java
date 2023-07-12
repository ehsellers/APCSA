import java.util.Scanner;

public class ConnectFourRunner
{
    public static void main(String[] args)
    {
        ConnectFour p1 = new ConnectFour();
        Scanner scan = new Scanner(System.in);
        
        System.out.println("Do you want to play?");
        String s = scan.nextLine();
        
        while(s.equals("yes"))
        {
            p1.game();
        
            if(p1.pConnect4 == true)
            {
                System.out.println("You Win!");
            }
            else if(p1.cConnect4 == true)
            {
                System.out.println("You Lose :(");
            }
            else
            {
                System.out.println("Draw");
            }
            
            p1.clearBoard();
            
            System.out.println("Do you want to play again?");
            s = scan.nextLine();
        }
    }
}
