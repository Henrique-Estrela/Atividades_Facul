/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package redesatividade1CHAT;
import java.io.*; 
import javax.swing.*; 
import java.net.*;
/**
 *
 * @author Henri
 */

public class Server {
    public static void main(String args[]) throws IOException {

        System.out.println("Servidor iniciado ...");
        ServerSocket socketServidor = new ServerSocket(5000);
        Socket socketCliente = socketServidor.accept();
        PrintWriter out = new PrintWriter(socketCliente.getOutputStream(), true);
        BufferedReader in = new BufferedReader(new InputStreamReader(socketCliente.getInputStream()));
        Threads escuta = new Threads(in);
        escuta.start();
        String entrada;
        while (true){
            entrada = JOptionPane.showInputDialog(null, "Mensagem para o cliente", "Servidor", JOptionPane.INFORMATION_MESSAGE);
            System.out.println("Servidor:" + entrada); out.println(entrada);
        }
    }
}