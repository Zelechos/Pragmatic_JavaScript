/*
 * @Autor: Pragmatic Coder
 * @Repositorio : https://github.com/Zelechos/Pragmatic_Java
*/

package create_file;

import java.io.File;
import java.io.IOException;

public class Create_File {

    
    File File;
    
    private void CreateFile(){
        File = new File("Ether");        
        
        try{// la excepcion salta usualmente con rutas absolutas por ejemplo si te equivocas en poner la ruta absoluta . . .
            
            if(File.createNewFile()){
                System.out.println("The File "+File.getName()+" has been created successfully . . . ");
            }
            
        }catch(IOException exception){
            System.err.println("Error the File was not created"+ exception);
        }
    }
    
    
    private void CreateDirectory(){
            File = new File("web_Pragmatic");
            
            if(File.mkdir()){
                System.out.println("The Directory "+File.getName()+" has been created successfully . . .");
            }else{
                System.err.println("Error the Directory was not created");
            }
            
        
    }

    public static void main(String[] args) {

        Create_File Object = new Create_File();
        
        Object.CreateDirectory();
        
        //Creando un archivo ... 
        Object.CreateFile();
    }
    
   
    
}
