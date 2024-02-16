<?php

function is_palindrome($input) {
    //solve this method that says if the sentence is palindrome or not
    $input = strtolower($input);

    // Eliminar espacios y signos de puntuación
    $input = preg_replace('/\s+|[[:punct:]]/', '', $input);

    $firstCharacter = 0;
    $lastCharacter = strlen($input) - 1;
    $palindromeResult = 0;

    while ($lastCharacter > $firstCharacter) {
        if ($input[$firstCharacter] != $input[$lastCharacter]) {
            $palindromeResult = 1;
            break;
        }
        $firstCharacter++;
        $lastCharacter--;
    }

    if (!$palindromeResult == 0) {
        return false;
    } else {
        return true;
    }

    return $palindromeResult;
}



$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));

