Team Treehouse C# Notes

C# Basics: 

Most C# programs start with this basic code: 

class Program 
{
    static void Main(string[] args)
    {
        // Displays "Hello World!" on the terminal. 
        System.Console.WriteLine("Hello World!");
    }
}

The above code doesn’t need to be memorized as C# comes with tools that can generate this code for us. 

“dotnet run” finds and runs our program. 

What will be covered in this course: 

- Variables and types
- Methods
- Strings
- Numeric Types
- Math Operations
- If Statements

.NET is a framework created by Microsoft that can run programs written in various languages including C#, F#, and Visual Basic. 

- C# = Object Oriented Language
- F# = Functional Language
- Visual Basic = Simplistic Language

All three of these languages compile down to an intermediate language which is handled handled by .NET’s Common Language Runtime (CLR). The intermediate language is not intended to be read or written by humans and cannot be executed on a regular computer processor. CLR complies the intermediate language into machine language. 

.NET: write code once and have it run on any compatible operating system (iOS, Android, Windows, Mac, Linux).

.NET IS NOT a language but a framework in which C# can be written on. 

Self-contained Deployment: an executable that contains the .NET runtime so it can run all by itself without .NET installed on the target system. 

Compiler is strict on syntax. 

Compile errors provide details about the type of error the compiler ran into in execution. 

Ex: 
Program.cs(6,49): error CS1002: ; expected [/home/treehouse/workspace/workspace.csproj]

(File name, line, column, error code, and explanation.)

Comments are prefaced with //.

C# variable naming syntax: 

var number = 5;
System.Console.WriteLine(number);

Variable names can start upper or lowercase and can use numbers, letters, and underscore characters.

Can’t use keywords in variables names either

Best variable practices: 
- name starts with lower letter
- avoid underscore characters
- use camel case.

You can get the type of a variable by using the .GetType() method.

Type Name Shortcuts: 

- Boolean 
- Int32
- Double
- String 
- Char

Types specify what a value can be used for. 

C# will prompt you with errors if you try to complete wrong functions with variable types. 

Implicitly-typed variables means the variables type is implied by its initialized value. 

C# developers never use full type names for variables.

Namespaces are groupings of similar classes. Almost all C# programs use them.

For example, if you put using System at the top of your code, you can write Console.WriteLine instead of System.Console.WriteLine.

C# source code is stored in plain text files, but instead of .txt, the file name usually ends in .cs.
