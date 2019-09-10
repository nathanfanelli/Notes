PHP  Notes:

PHP (PHP Hypertext Preprocessor)

Current version (2019) is PHP 7. 

PHP code can be embedded directly in HTML. 

PHP is a server-side language, meaning the code is processed on the server. The server returns plain HTML. 

Basic code example: 

<?php 
	echo ‘Hello World’;
?>

The command line interface (CLI) processes the PHP code and returns only the output. 

PHP does NOT care about extra whitespace. 

3 types of comments in PHP: 

1. Single Line ( // )
2. Multi-line ( /*…*/ )
3. DocBlock ( /* *** */ )

Variables in PHP are always prefaced with a ‘$’.

PHP variable names CANNOT start with a number. 

There are four data scalar types supported in PHP: 

1. Boolean
2. Integer
3. Float
4. String

  ‘var_dump’ dumps information about a variable (data type and value)

Anytime you are using a floating point number for arithmetic, the resulting value will become a floating point number as well. 

single-quoted strings in PHP don’t expand variables, whereas double-quoted strings DO expand variable. 

To interpolate variable value into a string, use double quotes. 

Escape sequences (\) are used to signify that the character after the sequence should be treated specially.

How the string is parsed is always based on the OUTER MOST quotes. 

Escape sequences are primarily only used for double-quoted strings. 

Concatenation in PHP is one with the ‘ . ‘ character and the ‘ .= ‘.

PHP is weakly typed and not strong suited for big applications. 

‘ == ‘ equal type
‘ === ‘ identical type

‘if’ statements in PHP are akin to ‘if’ statements in JS. 
