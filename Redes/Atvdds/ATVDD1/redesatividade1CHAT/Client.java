/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package redesatividade1CHAT;

/**
 *
 * @author Henri
 */
import java.io.*; import java.net.Socket; import javax.swing.JOptionPane;
public class Client {
    public static void main(String args[]) throws IOException {

        System.out.println("Cliente iniciado ...");
        Socket socket = new Socket("localhost", 5000);
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        Threads escuta = new Threads(in);
        escuta.start();
        String entrada = "";
        while (true) {
            entrada = JOptionPane.showInputDialog(null, "Mensagem para o servidor", "Cliente",
            JOptionPane.INFORMATION_MESSAGE);
            out.println(entrada);
            System.out.println("Cliente: " + entrada);
        }
    }
}
