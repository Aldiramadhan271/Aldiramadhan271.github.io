<?php 
function sum_of_integers_in_string(string $s): int {
   return array_sum(preg_split("/[^\d]/",$s));

}
echo sum_of_integers_in_string(array_sum);

 ?>