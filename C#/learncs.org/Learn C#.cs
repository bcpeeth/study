Variables and Types
// C# is a statically-typed language. Therefore, we must define the types of variables before using them.

// To define a variable in C#, we use the following syntax, which is similar to C / Java:

int myInt = 1;
float myFloat = 1f;
bool myBoolean = true;
string myName = "John";
char myChar = 'a';
double myDouble = 1.75;

// Notice that defining a floating point number requires an explicit f letter after the number.

// C# supports type inference - which means that you don't always have to explicitly specify a type - you can let the compiler try and understand the type of variable automatically. However, once the type of variable has been determined, it cannot be assigned a different type.

var x = 1;
var y = 2;
var sum = x + y;    // sum will also be defined as an integer

Enums
// Enums are integers that should be used when an integer is used to specify an option from a fixed amount of options.

public enum CarType
{
    Toyota = 1,
    Honda = 2,
    Ford = 3,
}

public class Tutorial
{
    public static void Main()
    {
        CarType myCarType = CarType.Toyota;
    }
}