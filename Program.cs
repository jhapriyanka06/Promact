using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace arrayassignment
{
    class Program
    {
        static void Main(string[] args)
        {
            bool flag = false;
            ArrayList words = new ArrayList();
            //accepting input into the arraylist
            words.Add("boat");
            words.Add("house");
            words.Add("cat");
            words.Add("river");
            words.Add("cupboard");
            Console.WriteLine("\n");

            Console.WriteLine(" All The plural name of the words are:-\n");
            foreach (string s in words) 
            {
                Console.WriteLine(s+"s"); //printing the plural of all the words
            }
            Console.WriteLine("\n");
            words[1] = "residence";
            Console.WriteLine(" The synonym of house is:-  " + words[1]);//printing the synonym of house
            Console.WriteLine("\n");

            words.Add("new word"); //adding a new word to the arraylist

            Console.WriteLine(" The total number of words in the array after adding a new word is:-  " + words.Count);
            Console.WriteLine("\n");

            //checking for words having 7 characters
            foreach (string s in words)
            {
                if (s.Length == 7)
                {
                    Console.WriteLine(s);
                    flag = true;
                }
               
            }
            if (flag==false)
                Console.WriteLine(" No words are of length 7 characters\n");

            Console.WriteLine(" The word at third position is:-  " + words[2]); //printing the word at third position
            Console.WriteLine("\n");

            Console.WriteLine(" All words in ascending order is:-\n");
            words.Sort(); //sorting the array in ascending order
            foreach (string s in words)
            {
                Console.WriteLine(s);
            }
            Console.WriteLine("\n");
            words.Reverse(); //getting the reverse of the array
            Console.WriteLine(" The array in reverse order is :-");
            foreach (string s in words)
            {
                Console.WriteLine(s);
            }
        }
    }
}
