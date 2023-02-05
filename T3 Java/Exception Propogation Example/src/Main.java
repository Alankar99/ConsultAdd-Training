public class Main {
    public void divide()
    {
        int variable = 2/0; 
    }

    public void innerFun()
    {
        divide();
    }

    public void outerFun()
    {
        try{
            innerFun();
        }
        catch (Exception e){
            System.out.println("Exception occured here");
        }
    }
    public static void main(String[] args) {
        System.out.println("Start");
        Main obj = new Main();
        obj.outerFun();
        System.out.println("End");
    }
}