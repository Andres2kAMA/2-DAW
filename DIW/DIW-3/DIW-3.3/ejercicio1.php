<!DOCTYPE html>
<html>
  <head>
  <title>Aplicación de estilos CSS</title>
  <style>
	* { font-family: Verdana, Arial, sans-serif; }
    table, td, th { border: solid 1px black; }
 
  </style>
</head>
<body>
   <table>
    <?php
  $ncols   = 5;
  $nrows   = 23;
  $comment = 'Celda = ';
  $nr = 0;
 
  for ($r=0; $r < $nrows; $r++) {
    $nr++;
    print("<tr>\n");
    for ($c=0; $c < $ncols; $c++) {
      if ($r == 0) {
         $cell = 'th';
         $text = sprintf("Columna %d", $c);
      } else {
         $cell = 'td';
         $text = sprintf("%s [%d, %d]", $comment, $r, $c);
     }
      printf("<%s>%s</%s>\n", $cell, $text, $cell);
    }
    print("</tr>\n");
  }
?>
</table>
</body>
</html>
