/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package redesatividade1CHAT;
import java.io.*;
/**
 *
 * @author Henri
 */
public class Threads extends Thread {

    BufferedReader in;
    public Threads (BufferedReader in) {
        this.in = in;
    }
    
    public void run(){
    String entrada;
    try {
        while ((entrada = in.readLine()) != null) {
            System.out.println("Recebi:" + entrada);
        }
    } 
    catch (IOException e) {}
    }
}

