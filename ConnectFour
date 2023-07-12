import java.util.ArrayList;
import java.util.Scanner;

public class ConnectFour
{
    //2d array          
    String[][] board = new String[5][7];
    Scanner scan = new Scanner(System.in);
        
    public boolean pConnect4;
    public boolean cConnect4;
    
    public ConnectFour()
    {
        pConnect4 = false;
        cConnect4 = false;
        for(int i = 0; i < board.length; i++)
        {
            for(int j = 0; j < board[0].length; j++)
            {
                board[i][j] = " ";
            }
        }
    }
    
    public void computerMove()
    {
        int num = (int)(Math.random() * 6);
        for(int i = 4; i >= 0; i--)
        {
            if(board[i][num].equals(" "))
            {
                board[i][num] = "X";
                break;
            }
        }
    }
    
    public void playerMove(int c)
    {
        for(int i = 4; i >= 0; i--)
        {
            if(c > 6)
            {
                System.out.println("Try again");
                int n = scan.nextInt();
                
                playerMove(n);
            }
            if(board[i][c].equals(" "))
            {
                board[i][c] = "O";
                break;
            }
        }
        computerMove();
        for(int i = 0; i < board.length; i++)
        {
            String[] b1 = board[i];
            for(String s : b1)
            {
                System.out.print(s + "|");
            }
            System.out.println();
        }
    }
    
    public void isFour()
    {
        //horizontal connect 4
        int countp1 = 0;
        int countp2 = 0;
        int countp3 = 0;
        int countc1 = 0;
        int countc2 = 0;
        int countc3 = 0;
        int num = 3;
        for(int i = 4; i >= 0; i--)
        {
            for(int j = 0; j < board[0].length; j++)
            {
                if(board[i][j].equals("O"))
                {
                    countp1++;
                    if(countp1 >= 4)
                    {
                        pConnect4 = true;
                        break;
                    }
                }
                else if(board[i][j].equals("X") || board[i][j].equals(" "))
                {
                    countp1 = 0;
                }
            }
            countp1 = 0;
            if(countp1 >= 4)
            {
                pConnect4 = true;
                break;
            }
            
            for(int j = 0; j < board[0].length; j++)
            {
                if(board[i][j].equals("X"))
                {
                    countc1++;
                    if(countc1 >= 4)
                    {
                        cConnect4 = true;
                        break;
                    }
                }
                else if(board[i][j].equals("O") || board[i][j].equals(" "))
                {
                    countc1 = 0;
                }
            }
            countc1 = 0;
            if(countc1 >= 4)
            {
                cConnect4 = true;
                break;
            }
        }
        
        //vertical connect 4
        for(int i = 0; i < board[0].length; i++)
        {
            for(int j = 4; j > 0; j--)
            {
                if(board[j][i].equals("O"))
                {
                    countp2++;
                    if(countp2 >= 4)
                    {
                        pConnect4 = true;
                        break;
                    }
                }
                else if(board[j][i].equals("X") || board[j][i].equals(" "))
                {
                    countp2 = 0;
                }
            }
            countp2 = 0;
            if(countp2 >= 4)
            {
                pConnect4 = true;
                break;
            }
            
            for(int j = 4; j > 0; j--)
            {
                if(board[j][i].equals("O"))
                {
                    countc2++;
                    if(countc2 >= 4)
                    {
                        cConnect4 = true;
                        break;
                    }
                }
                else if(board[j][i].equals("X") || board[j][i].equals(" "))
                {
                    countc2 = 0;
                }
            }
            countc2 = 0;
            if(countc2 >= 4)
            {
                cConnect4 = true;
                break;
            }
            
        }
        
        //diagonal connect 4
        for(int i = 0; i < board.length; i++)
        {
            for(int j = 3; j > num; j--)
            {
                if(board[j][i].equals("O"))
                {
                    countp3++;
                    if(countp3 >= 4)
                    {
                        pConnect4 = true;
                    }
                    break;
                }
                System.out.println(countp3);
            }
        }
        
        for(int i = 0; i < board.length; i++)
        {
            for(int j = 3; j > num; j--)
            {
                if(board[j][i].equals("O"))
                {
                    countc3++;
                    if(countc3 >= 4)
                    {
                        cConnect4 = true;
                    }
                    break;
                }
                System.out.println(countc3);
            }
        }
    }
    
    public void game()
    {
        while(pConnect4 == false && cConnect4 == false)
        {
            System.out.println("Which row would you like to place your token in(choose number 0-6)?");
            int n = scan.nextInt();
        
            playerMove(n);
            isFour();
        }
    }
    
    public void clearBoard()
    {
        for(int i = 0; i < board.length; i++)
        {
            for(int j = 0; j < board[0].length; j++)
            {
                board[i][j] = " ";
            }
        }
    }
}
