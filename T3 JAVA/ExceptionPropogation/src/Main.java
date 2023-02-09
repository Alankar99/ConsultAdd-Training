public class Main {
    public void fun3(){
        int div = 5/0; //unchecked exception
    }
    public void fun2(){
        fun3();
    }
    public void fun1(){
        try{
            fun2();
        }
        catch (Exception e){
            System.out.println("EXCEPTION HANDLED!!");
        }
    }
    public static void main(String[] args) {
        Main obj = new Main();
        obj.fun1();
        System.out.println("Rest program lines!");
    }
}