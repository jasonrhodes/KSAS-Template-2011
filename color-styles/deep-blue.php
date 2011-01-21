<?php
header("Content-type: text/css");

$primary = "#1c2349";
$p =& $primary;

$secondary = "#5a688d";
$s =& $secondary;

$textColor = "#ffffff";
$tC =& $textColor;

?>

/* +++ Module: Template-Specific Colors */
/* ##################################
 * Deep Blue Theme:
 * #1c2349 	primary blue
 * #5a688d	secondary hover blue
 * ##################################
 */
 
.logo-parent a {
	background-color: <?php echo $p; ?>;
}
.logo-parent a:hover {
	background-color: <?php echo $s; ?>;
}
.search {
	background-color: <?php echo $s; ?>;
}
.main-content .center {
	background-color: <?php echo $p; ?>;
}
.sidebar h2 {
	background-color: <?php echo $p; ?>;
	color: <?php echo $tC; ?>;
}
