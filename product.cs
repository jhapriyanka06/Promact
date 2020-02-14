using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;
using System.Threading.Tasks;

namespace Assignment3
{
    public class product
    {
        public List<product> p;
        public int sum,quantity;
        public double totprice,price;
        public string name,type; 

        //Declaring, initializing and populating a list

        public IEnumerable<product> RetrieveAll()
        {
                var p = new List<product>()
            {
                {new product()
                    { name="lettuce", price=10.5 ,quantity=50 ,type="leafy green" }},
                {new product()
                    { name = "cabbage", price = 20, quantity = 100, type = "cruciferous" }},
                {new product()
                    {  name = "pumpkin", price = 30, quantity = 30, type = "marrow" }},
                {new product()
                    { name = "cauliflower", price = 10, quantity = 25, type = "cruciferous" }},
                {new product()
                    { name = "zucchini", price = 20.5, quantity = 50, type = "marrow" }},
                {new product()
                    { name = "yam", price =30, quantity = 50, type = "root" }},
                {new product()
                    { name = "spinach", price = 10, quantity = 100, type = "leafy green" }},
                {new product()
                    { name = "broccoli", price = 20.2, quantity = 75, type = "cruciferous" }},
                {new product()
                    { name = "garlic", price = 30, quantity = 20, type = "leafy green" }},
                {new product()
                    { name = "silverbeet", price = 10, quantity = 50, type = "marrow" }}
            };
            Console.WriteLine("the total number of vegetables :-  " + p.Count());
            Console.WriteLine("\n");

            p.Add(new product() { name = "potato", price = 10, quantity = 5, type = "root" }); //adding potato

            Console.WriteLine("the list of all the vegetables after adding potato is:");

            foreach (var product in p)
            {
                Console.WriteLine(product.name);
                if (product.name == "cabbage")
                {
                    sum = product.quantity + 50;
                }
            }
            Console.WriteLine("the count after adding potato:- " + p.Count());
            Console.WriteLine("\n");

            //selecting vegetables of type leafy green
            var productquery = p.Where(pr => pr.type == "leafy green");
            Console.WriteLine("the vegetables of type leafy green are:-\n");

            foreach (var product in productquery)
            {
                Console.WriteLine(product.name);
            }
            Console.WriteLine("\n");
            //after removing garlic
            p.RemoveAt(8);
            Console.WriteLine("the total number of product left on the list after removing garlic:-  " + p.Count());
            Console.WriteLine("\n");

            //after adding 50 more cabbages
            Console.WriteLine("the final quantity of cabbage is:-  " + sum);
            Console.WriteLine("\n");
            totprice = ((1 * 10.5) + (2 * 20.5) + (1 * 20.2));
            Console.WriteLine("the total cost of 1kg lettuce, 2kgs zucchini & 1kg broccoli is:-  " + totprice); 
              
            return p;
          }
        }
    }

