public class Main {
    System.out.println("Start");
    public void innerFun(){
        int var = 999/0;
    }
    public void outerFun(){
        innerFun();
    }
    public void fun(){
        try{
            outerFun();
        }
        catch (Exception e){
            System.out.println("Exception occured");
        }
    }
    public static void main(String[] args) {
        Main obj = new Main();
        obj.fun();
        System.out.println("End");
    }
}