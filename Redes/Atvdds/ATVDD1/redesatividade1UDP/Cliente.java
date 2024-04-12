/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package redesatividade1UDP;
import java.io.*;
import java.net.*;
import javax.swing.JOptionPane;
/**
 *
 * @author Henri
 */
public class Cliente {

    public static void main(String args[]) throws Exception {
        DatagramSocket clientSocket = new DatagramSocket();
        byte[] sendData = new byte[1024];
        byte[] receiveData = new byte[1024];
        InetAddress IPAddress = InetAddress.getByName("localhost");
        
        while (true) {
            String sentence = JOptionPane.showInputDialog("Digite:");
            sendData = sentence.getBytes();
            DatagramPacket sendPacket = new DatagramPacket(sendData, sentence.length(), IPAddress, 9876);
            clientSocket.send(sendPacket);
            DatagramPacket receivePacket = new DatagramPacket(receiveData, receiveData.length);
            clientSocket.receive(receivePacket);
            String received = new String(receivePacket.getData());
            System.out.println("Recebido do servidor:" + received);
            
            if (sentence.equals("fim"))break;
        }
        clientSocket.close();
    }
}


