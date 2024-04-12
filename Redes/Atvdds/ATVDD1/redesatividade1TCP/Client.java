/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package redesatividade1TCP;

/**
 *
 * @author Henri
 */
import java.io.*;
import java.net.*;
import javax.swing.JOptionPane;

public class Client {
	public static void main(String args[]) {
		Socket socket = null; // Socket cliente
		PrintWriter out = null; // Escreve no socket
		BufferedReader in = null; // Le do socket
		try {
			socket = new Socket("localhost", 5000);
			out = new PrintWriter(socket.getOutputStream(), true);
			in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
			String entradaservidor = "";
			String entradausuario = "";
			while (true) {
				entradausuario = JOptionPane.showInputDialog("Chegou do servidor:" + entradaservidor + "\n\nDigite para enviar para o servidor:");
				out.println(entradausuario);
				entradaservidor = in.readLine();
				if(entradausuario.equals("fim")) break;
				System.out.println("Chegou do servidor: " + entradaservidor);
			}
			out.close();
			in.close();
			socket.close();
		} catch (IOException e) {
			System.err.println("Erro na criação dos objetos");
			System.exit(1);
		}
	}
}
